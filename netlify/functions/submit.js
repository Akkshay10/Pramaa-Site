const fetch = globalThis.fetch || require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const headers = event.headers || {};
  const contentType = (headers['content-type'] || headers['Content-Type'] || '').toLowerCase();
  let bodyObj = {};

  if (contentType.includes('application/json')) {
    try { bodyObj = JSON.parse(event.body || '{}'); } catch(e) { bodyObj = {}; }
  } else {
    // parse urlencoded
    try { bodyObj = Object.fromEntries(new URLSearchParams(event.body || '')); } catch(e) { bodyObj = {}; }
  }

  const params = new URLSearchParams();
  const allowed = ['name','email','company','phone','message','timeline','budget'];
  allowed.forEach(k => { if (bodyObj[k]) params.append(k, String(bodyObj[k])); });
  params.append('_subject','New inquiry from pramaa.solutions');
  params.append('_captcha','false');
  params.append('_template','table');
  params.append('_next','/thank-you.html');

  const recipient = process.env.FORM_EMAIL || 'info@pramaa.solutions';
  const url = `https://formsubmit.co/${encodeURIComponent(recipient)}`;

  try {
    const res = await fetch(url, { method: 'POST', body: params });
    if (!res.ok) {
      const text = await res.text().catch(()=> '');
      return { statusCode: 502, body: 'Forward failed: ' + text };
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return { statusCode: 502, body: 'Forward failed' };
  }
};
