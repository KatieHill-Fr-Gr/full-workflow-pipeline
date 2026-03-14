
// View renderer: injects stylable ASCII output and rendered-at timestamp.
function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

/**
 * Renders ASCII art preview and timestamp into the provided element.
 * `now` and `asciiRenderer` are injected for testability.
 */
export function renderApp(
  el,
  {
    bannerText = 'Hello CI',
    textColor = '#111827',
    bgColor = '#f9fafb',
    fontSize = 14,
    now = () => new Date().toLocaleString(),
    asciiRenderer = (text) => text
  } = {}
) {
  if (!el) throw new Error('Missing target element');
  const asciiArt = escapeHtml(asciiRenderer(bannerText));

  el.innerHTML = `
    <pre
      class="preview"
      aria-label="ascii-art"
      style="color:${textColor};background-color:${bgColor};font-size:${fontSize}px"
    >${asciiArt}</pre>
    <p class="timestamp">Rendered at: ${now()}</p>
  `;
}
