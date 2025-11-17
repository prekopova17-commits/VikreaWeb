import type { AuditResponse } from '@shared/schema';
import { getRecommendation, type Recommendation } from './recommendations';

interface PriorityScore {
  pillar: 'processes' | 'sales' | 'people' | 'growth';
  level: 1 | 2 | 3;
  score: number; // Higher score = higher priority (more critical)
}

/**
 * Analyzes audit responses and returns top 3 priorities with recommendations
 */
export function getTopPriorities(auditData: AuditResponse): Recommendation[] {
  const scores: PriorityScore[] = [];

  // 1. PROCESSES PILLAR
  // Based on "processes" field
  let processesLevel: 1 | 2 | 3 = 3;
  let processesScore = 0;
  
  if (auditData.processes === 'chaos') {
    processesLevel = 1;
    processesScore = 100;
  } else if (auditData.processes === 'functional') {
    processesLevel = 2;
    processesScore = 60;
  } else if (auditData.processes === 'good') {
    processesLevel = 3;
    processesScore = 30;
  } else if (auditData.processes === 'clear') {
    processesLevel = 3;
    processesScore = 20;
  }

  // Consider departments connection (also affects processes)
  if (auditData.departments === 'chaos') {
    processesScore += 40;
    if (processesLevel > 1) processesLevel = 2;
  } else if (auditData.departments === 'clear') {
    processesScore += 20;
  }

  scores.push({ pillar: 'processes', level: processesLevel, score: processesScore });

  // 2. SALES PILLAR
  // Based on "opportunities" field - what opportunities are being missed
  let salesLevel: 1 | 2 | 3 = 3;
  let salesScore = 0;

  const opportunityCount = auditData.opportunities?.length || 0;
  
  if (opportunityCount >= 2) {
    // Missing multiple opportunities = critical
    salesLevel = 1;
    salesScore = 90;
  } else if (opportunityCount === 1) {
    // Missing one opportunity = medium
    salesLevel = 2;
    salesScore = 50;
  } else {
    // No missed opportunities = mild concern
    salesLevel = 3;
    salesScore = 20;
  }

  scores.push({ pillar: 'sales', level: salesLevel, score: salesScore });

  // 3. PEOPLE PILLAR
  // Based on delegation, clientWork
  let peopleLevel: 1 | 2 | 3 = 3;
  let peopleScore = 0;

  // Delegation scoring
  if (auditData.delegation === 'unclear') {
    peopleScore += 60;
    peopleLevel = 1;
  } else if (auditData.delegation === 'trust') {
    peopleScore += 40;
    if (peopleLevel > 2) peopleLevel = 2;
  } else if (auditData.delegation === 'clear-sla') {
    peopleScore += 20;
    if (peopleLevel > 3) peopleLevel = 3;
  } else if (auditData.delegation === 'clear-roles') {
    peopleScore += 15;
  }

  // Client work clarity
  if (auditData.clientWork === 'unclear') {
    peopleScore += 40;
    if (peopleLevel > 1) peopleLevel = 2;
  } else if (auditData.clientWork === 'clear-roles') {
    peopleScore += 20;
  } else if (auditData.clientWork === 'clear') {
    peopleScore += 10;
  }

  scores.push({ pillar: 'people', level: peopleLevel, score: peopleScore });

  // 4. GROWTH PILLAR
  // Based on goals and department speed
  let growthLevel: 1 | 2 | 3 = 3;
  let growthScore = 0;

  const goalCount = auditData.goals?.length || 0;

  if (goalCount === 0) {
    // No clear goals = critical
    growthLevel = 1;
    growthScore = 80;
  } else if (goalCount === 1) {
    // Only 1 goal = medium
    growthLevel = 2;
    growthScore = 50;
  } else {
    // Multiple goals = mild (they have direction)
    growthLevel = 3;
    growthScore = 25;
  }

  // Department speed affects growth
  if (auditData.departmentSpeed === 'unclear') {
    growthScore += 50;
    if (growthLevel > 1) growthLevel = 2;
  } else if (auditData.departmentSpeed === 'unclear-sla') {
    growthScore += 30;
  } else if (auditData.departmentSpeed === 'clear-sla') {
    growthScore += 15;
  }

  scores.push({ pillar: 'growth', level: growthLevel, score: growthScore });

  // Sort by score (highest first) and take top 3
  scores.sort((a, b) => b.score - a.score);
  const topThree = scores.slice(0, 3);

  // Get recommendations for top 3
  const recommendations: Recommendation[] = [];
  for (const priority of topThree) {
    const rec = getRecommendation(priority.pillar, priority.level);
    if (rec) {
      recommendations.push(rec);
    }
  }

  return recommendations;
}
