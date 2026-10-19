/**
 * Rishi Coffee — drop sign-up receiver.
 *
 * Paste this into the "Rishi Coffee – Drop Sign-ups" sheet:
 *   Extensions → Apps Script → replace everything → Save
 *   Deploy → New deployment → type "Web app"
 *     Execute as: Me    Who has access: Anyone
 *   Copy the Web app URL into SIGNUP_URL in cart.js.
 */

function doPost(e) {
  var p = (e && e.parameter) || {};
  var clean = function (v, max) {
    v = String(v || '').trim().slice(0, max || 200);
    // Stop values being read as spreadsheet formulas.
    return /^[=+\-@]/.test(v) ? "'" + v : v;
  };

  // Ignore bots that fill the hidden field.
  if (p.website) return json_({ ok: true });

  var name = clean(p.name, 100);
  var phone = clean(p.phone, 30);
  var email = clean(p.email, 200);
  if (!phone && !email) return json_({ ok: false, error: 'missing contact' });

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      new Date(),
      name,
      phone,
      email,
      p.texts === 'yes' ? 'yes' : 'no',
      clean(p.page, 200)
    ]);
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

function doGet() {
  return json_({ ok: true, service: 'rishi-coffee-signups' });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
