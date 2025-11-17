import type { AuditResponse } from '@shared/schema';
import { getTopPriorities } from './auditAnalysis';

export function generateAuditEmailHtml(auditData: AuditResponse): string {
  const priorities = getTopPriorities(auditData);
  
  return `
<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audit výsledky - ViKrea</title>
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.7;
      color: #1a1a1a;
      max-width: 640px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
    }
    .greeting {
      font-size: 16px;
      margin-bottom: 24px;
      line-height: 1.7;
    }
    .intro {
      font-size: 16px;
      margin-bottom: 32px;
      line-height: 1.7;
    }
    .priority {
      background: #f8f9fa;
      border-left: 4px solid #1E40AF;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 4px;
    }
    .priority h3 {
      color: #1E40AF;
      font-size: 18px;
      margin-top: 0;
      margin-bottom: 12px;
      font-weight: 600;
    }
    .priority p {
      margin: 0;
      color: #4a5568;
      font-size: 15px;
      line-height: 1.6;
    }
    .explanation {
      font-size: 16px;
      line-height: 1.7;
      margin: 32px 0;
    }
    .cta-section {
      margin: 32px 0;
      font-size: 16px;
      line-height: 1.7;
    }
    .cta-link {
      display: inline-block;
      color: #FF6B35;
      text-decoration: none;
      font-weight: 600;
      border-bottom: 2px solid #FF6B35;
    }
    .cta-link:hover {
      color: #e55a28;
      border-bottom-color: #e55a28;
    }
    .signature {
      font-size: 16px;
      margin-top: 40px;
      line-height: 1.7;
    }
    .footer {
      text-align: center;
      padding-top: 32px;
      margin-top: 40px;
      border-top: 2px solid #e5e7eb;
      color: #9ca3af;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="greeting">
    Dobrý deň,
  </div>

  <div class="intro">
    z vašich odpovedí vyplývajú tri najkritickejšie oblasti, ktoré majú najväčší dopad na výkon firmy:
  </div>

  ${priorities.map((priority, index) => `
  <div class="priority">
    <h3>Priorita ${index + 1}: ${priority.title}</h3>
    <p>${priority.text}</p>
  </div>
  `).join('')}

  <div class="explanation">
    Tieto oblasti sú najčastejším zdrojom stagnácie alebo chaosu v malých a stredných firmách. Nie je to nič neobvyklé — dôležité je, že teraz presne viete, kde začať.
  </div>

  <div class="explanation">
    Ak chcete, môžeme si to prejsť spolu. Ukážem vám, aké kroky majú najväčší efekt a ako ich nastaviť tak, aby sa systém v praxi naozaj dodržiaval.
  </div>

  <div class="cta-section">
    → <a href="https://calendly.com/vikrea/30min" class="cta-link">Rezervovať krátky call</a>
  </div>

  <div class="signature">
    Rada vám s tým pomôžem,<br><br>
    Viera
  </div>

  <div class="footer">
    <div style="margin-bottom: 12px;">
      <img src="cid:vikrea-logo" alt="ViKrea" style="height: 40px; width: auto;" />
    </div>
    <p style="margin: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">
      Systémy. Výsledky. Žiadne výhovorky.
    </p>
    <p style="margin: 16px 0 0 0;">
      <a href="https://vikrea.sk" style="color: #1E40AF; text-decoration: none; font-weight: 600; border-bottom: 2px solid #1E40AF;">
        vikrea.sk
      </a>
    </p>
  </div>
</body>
</html>
  `.trim();
}

export function generateAuditEmailText(auditData: AuditResponse): string {
  const priorities = getTopPriorities(auditData);
  
  let text = `Dobrý deň,

z vašich odpovedí vyplývajú tri najkritickejšie oblasti, ktoré majú najväčší dopad na výkon firmy:

`;

  // Add priorities
  priorities.forEach((priority, index) => {
    text += `PRIORITA ${index + 1}: ${priority.title}\n`;
    text += `${priority.text}\n\n`;
  });

  text += `Tieto oblasti sú najčastejším zdrojom stagnácie alebo chaosu v malých a stredných firmách. Nie je to nič neobvyklé — dôležité je, že teraz presne viete, kde začať.

Ak chcete, môžeme si to prejsť spolu. Ukážem vám, aké kroky majú najväčší efekt a ako ich nastaviť tak, aby sa systém v praxi naozaj dodržiaval.

→ Rezervovať krátky call: https://calendly.com/vikrea/30min

Rada vám s tým pomôžem,

Viera

---

ViKrea
Systémy. Výsledky. Žiadne výhovorky.

Web: https://vikrea.sk`;

  return text;
}
