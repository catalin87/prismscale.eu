interface Env {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const payload = await context.request.json() as any;
    const token = context.env.TELEGRAM_BOT_TOKEN;
    const chatId = context.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return new Response(JSON.stringify({ ok: false, error: 'Telegram credentials not configured on server' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let text = '';
    if (payload.type === 'investor') {
      const inv = payload.investor || {};
      text = [
        `<b>[PrismScale] ANGEL / STRATEGIC INVESTOR INQUIRY</b>`,
        `<b>Investor:</b> ${escapeHtml(inv.fullName)}`,
        `<b>Entity / Fund:</b> ${escapeHtml(inv.organization || 'Angel / Private')}`,
        `<b>Email:</b> <code>${escapeHtml(inv.email)}</code>`,
        `<b>LinkedIn / Web:</b> ${escapeHtml(inv.linkedinOrWebsite || 'N/A')}`,
        `<b>Target Check Size:</b> ${escapeHtml(inv.ticketSize)}`,
        `<b>Strategic Value-Add:</b> ${escapeHtml(inv.strategicValue || 'N/A')}`,
        `<b>Language:</b> ${(payload.language || 'en').toUpperCase()}`,
        `<b>Timestamp:</b> ${new Date().toISOString()}`
      ].join('\n');
    } else {
      const lead = payload.lead || {};
      text = [
        `<b>[PrismScale] New Enterprise Lead Captured</b>`,
        `<b>Name:</b> ${escapeHtml(lead.fullName)}`,
        `<b>Company:</b> ${escapeHtml(lead.company)}`,
        `<b>Role:</b> ${escapeHtml(lead.role || 'N/A')}`,
        `<b>Email:</b> <code>${escapeHtml(lead.businessEmail)}</code>`,
        `<b>Interest:</b> ${escapeHtml(payload.intentLabel || lead.intent)}`,
        `<b>Notes:</b> ${escapeHtml(lead.notes || 'None')}`,
        `<b>Language:</b> ${(payload.language || 'en').toUpperCase()}`,
        `<b>Timestamp:</b> ${new Date().toISOString()}`
      ].join('\n');
    }

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML'
      })
    });

    const tgData = await tgRes.json();
    return new Response(JSON.stringify({ ok: tgRes.ok, result: tgData }), {
      status: tgRes.ok ? 200 : 400,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

function escapeHtml(text: string): string {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
