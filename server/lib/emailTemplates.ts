import type { AuditResponse } from '@shared/schema';

export function generateAuditEmailHtml(auditData: AuditResponse): string {
  const companyName = auditData.company?.name || 'Vaša firma';
  
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
      line-height: 1.6;
      color: #1a1a1a;
      max-width: 640px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #1E40AF 0%, #1E40AF 100%);
      color: white;
      padding: 32px;
      border-radius: 8px;
      margin-bottom: 32px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
    }
    .header p {
      margin: 8px 0 0 0;
      opacity: 0.95;
      font-size: 16px;
    }
    .section {
      background: #f8f9fa;
      border-left: 4px solid #06D6A0;
      padding: 20px;
      margin-bottom: 24px;
      border-radius: 4px;
    }
    .section h2 {
      color: #1E40AF;
      font-size: 18px;
      margin-top: 0;
      margin-bottom: 12px;
      font-weight: 600;
    }
    .section p {
      margin: 8px 0;
      color: #4a5568;
    }
    .section ul {
      margin: 8px 0;
      padding-left: 20px;
      color: #4a5568;
    }
    .section li {
      margin: 4px 0;
    }
    .highlight {
      background: #fff;
      border: 2px solid #FF6B35;
      padding: 24px;
      border-radius: 8px;
      margin: 32px 0;
      text-align: center;
    }
    .highlight h3 {
      color: #FF6B35;
      margin: 0 0 12px 0;
      font-size: 20px;
      font-weight: 700;
    }
    .highlight p {
      margin: 8px 0;
      font-size: 16px;
      color: #1a1a1a;
    }
    .cta-button {
      display: inline-block;
      background: #FF6B35;
      color: white;
      padding: 14px 32px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      margin-top: 16px;
      font-size: 16px;
    }
    .footer {
      text-align: center;
      padding-top: 32px;
      margin-top: 32px;
      border-top: 2px solid #e5e7eb;
      color: #6b7280;
      font-size: 14px;
    }
    .footer p {
      margin: 4px 0;
    }
    .mint-bullet {
      color: #06D6A0;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>ViKrea</h1>
    <p>Výsledky vášho auditu rastu</p>
  </div>

  <p style="font-size: 16px; margin-bottom: 24px;">
    Dobrý deň,<br><br>
    Ďakujeme za vyplnenie prioritizačnej matrice pre <strong>${companyName}</strong>. 
    Na základe vašich odpovedí sme identifikovali kľúčové oblasti, ktoré brzdia váš rast.
  </p>

  <div class="section">
    <h2>📊 Základné informácie</h2>
    <p><strong>Veľkosť firmy:</strong> ${auditData.companySize}</p>
    ${auditData.company?.ico ? `<p><strong>IČO:</strong> ${auditData.company.ico}</p>` : ''}
  </div>

  <div class="section">
    <h2>🔍 Oblasti na zlepšenie</h2>
    
    <p><strong>Úroveň procesov a systémov:</strong><br>
    ${auditData.processes}</p>
    
    <p><strong>Prepojenie oddelení:</strong><br>
    ${auditData.departments}</p>
    
    ${auditData.opportunities && auditData.opportunities.length > 0 ? `
    <p><strong>Unikajúce príležitosti:</strong></p>
    <ul>
      ${auditData.opportunities.map(opp => `<li><span class="mint-bullet">●</span> ${opp}</li>`).join('')}
    </ul>
    ` : ''}
    
    <p><strong>Práca s klientmi:</strong><br>
    ${auditData.clientWork}</p>
    
    <p><strong>Delegovanie:</strong><br>
    ${auditData.delegation}</p>
    
    <p><strong>Rýchlosť oddelení:</strong><br>
    ${auditData.departmentSpeed}</p>
  </div>

  ${auditData.goals && auditData.goals.length > 0 ? `
  <div class="section">
    <h2>🎯 Vaše ciele na nasledujúcich 6 mesiacov</h2>
    <ul>
      ${auditData.goals.map(goal => `<li><span class="mint-bullet">●</span> ${goal}</li>`).join('')}
    </ul>
  </div>
  ` : ''}

  <div class="highlight">
    <h3>Ďalší krok: Osobná konzultácia</h3>
    <p>Na základe týchto výsledkov vám pripravím konkrétne odporúčania a akčný plán.</p>
    <p><strong>Dohodneme si 30-minútový hovor?</strong></p>
    <a href="https://calendly.com/vikrea/30min" class="cta-button">Rezervovať si čas</a>
  </div>

  <p style="font-size: 16px; line-height: 1.8; margin-top: 32px;">
    Teším sa na spoluprácu!<br><br>
    <strong>Lucia Prekopová</strong><br>
    ViKrea - Business Consulting<br>
    📧 lucia@vikrea.sk<br>
    📞 0905 400 026
  </p>

  <div class="footer">
    <p><strong>ViKrea</strong> | Systematizácia firiem, ktorá funguje v praxi</p>
    <p>© ${new Date().getFullYear()} ViKrea. Vytvorila Martina Habová.</p>
  </div>
</body>
</html>
  `.trim();
}

export function generateAuditEmailText(auditData: AuditResponse): string {
  const companyName = auditData.company?.name || 'Vaša firma';
  
  let text = `
ViKrea - Výsledky vášho auditu rastu
=====================================

Dobrý deň,

Ďakujeme za vyplnenie prioritizačnej matrice pre ${companyName}.
Na základe vašich odpovedí sme identifikovali kľúčové oblasti, ktoré brzdia váš rast.

ZÁKLADNÉ INFORMÁCIE
-------------------
Veľkosť firmy: ${auditData.companySize}
${auditData.company?.ico ? `IČO: ${auditData.company.ico}` : ''}

OBLASTI NA ZLEPŠENIE
--------------------

Úroveň procesov a systémov:
${auditData.processes}

Prepojenie oddelení:
${auditData.departments}
`;

  if (auditData.opportunities && auditData.opportunities.length > 0) {
    text += `\nUnikajúce príležitosti:\n`;
    auditData.opportunities.forEach(opp => {
      text += `● ${opp}\n`;
    });
  }

  text += `
Práca s klientmi:
${auditData.clientWork}

Delegovanie:
${auditData.delegation}

Rýchlosť oddelení:
${auditData.departmentSpeed}
`;

  if (auditData.goals && auditData.goals.length > 0) {
    text += `\nVAŠE CIELE NA NASLEDUJÚCICH 6 MESIACOV\n`;
    text += `--------------------------------------\n`;
    auditData.goals.forEach(goal => {
      text += `● ${goal}\n`;
    });
  }

  text += `

ĎALŠÍ KROK: OSOBNÁ KONZULTÁCIA
-------------------------------
Na základe týchto výsledkov vám pripravím konkrétne odporúčania a akčný plán.
Dohodneme si 30-minútový hovor?

Rezervovať si čas: https://calendly.com/vikrea/30min

Teším sa na spoluprácu!

Lucia Prekopová
ViKrea - Business Consulting
📧 lucia@vikrea.sk
📞 0905 400 026

---
ViKrea | Systematizácia firiem, ktorá funguje v praxi
© ${new Date().getFullYear()} ViKrea. Vytvorila Martina Habová.
  `.trim();

  return text;
}
