// Función serverless en Vercel. La propia web la llama directamente (desde
// src/pages/Contacto.jsx) justo después de guardar el mensaje en Supabase,
// y esta función envía un email de aviso usando Resend.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const record = req.body
  if (!record || !record.email || !record.message) {
    return res.status(400).json({ error: 'Missing record' })
  }

  const { name, email, company, phone, sector, message, locale, source } = record

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.NOTIFY_FROM || 'Altair Sense <onboarding@resend.dev>',
        to: [process.env.NOTIFY_EMAIL],
        reply_to: email,
        subject: `Nuevo lead: ${name}${company ? ' — ' + company : ''}`,
        html: `
          <h2>Nuevo mensaje de contacto en Altair Sense</h2>
          <p><strong>Nombre:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> ${esc(email)}</p>
          ${company ? `<p><strong>Empresa:</strong> ${esc(company)}</p>` : ''}
          ${phone ? `<p><strong>Teléfono:</strong> ${esc(phone)}</p>` : ''}
          ${sector ? `<p><strong>Sector:</strong> ${esc(sector)}</p>` : ''}
          <p><strong>Idioma:</strong> ${esc(locale || '-')}</p>
          <p><strong>Origen:</strong> ${esc(source || '-')}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${esc(message).replace(/\n/g, '<br/>')}</p>
        `
      })
    })

    if (!resendRes.ok) {
      const errText = await resendRes.text()
      console.error('Resend error:', errText)
      return res.status(502).json({ error: 'Email provider error' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Internal error' })
  }
}

function esc(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
