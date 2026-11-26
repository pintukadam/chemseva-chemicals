/**
 * ChemSeva Chemicals — Free Google Sheets Lead CRM (Google Apps Script)
 *
 * Setup:
 * 1. Create a Google Sheet named "ChemSeva Enquiries".
 * 2. Add header row in Row 1:
 *    Date | Name | Company | Mobile | Email | Product | Message | Source
 * 3. Open Extensions -> Apps Script, paste this file, and save.
 * 4. Click Deploy -> New deployment -> Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL into VITE_GOOGLE_SHEETS_WEBHOOK_URL in `.env.local`
 *    (and in Vercel / Cloudflare Pages Environment Variables).
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var raw = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var data = JSON.parse(raw);

    // Ignore honeypot spam if ever posted directly
    if (data.botcheck && String(data.botcheck).trim() !== '') {
      return ContentService
        .createTextOutput(JSON.stringify({ result: 'ignored' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow([
      data.submittedAt ? new Date(data.submittedAt) : new Date(),
      data.name || '',
      data.company || '',
      data.mobile || '',
      data.email || '',
      data.product || 'General Enquiry',
      data.message || '',
      data.source || '/'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
