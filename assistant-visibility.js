'use strict';

const assistantLink = document.getElementById('public-assistant-link');

if (assistantLink) {
  const endpoint = new URL('/api/v1/assistant/status', assistantLink.href);
  async function refreshAssistantVisibility() {
    try {
      const response = await fetch(endpoint, {
        cache: 'no-store', credentials: 'omit', redirect: 'error', signal: AbortSignal.timeout(3000)
      });
      assistantLink.hidden = !response.ok || (await response.json()).available !== true;
    } catch {
      assistantLink.hidden = true;
    } finally {
      setTimeout(refreshAssistantVisibility, 15000);
    }
  }
  void refreshAssistantVisibility();
}
