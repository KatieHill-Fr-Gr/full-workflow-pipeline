
/** @jest-environment jsdom */

import { renderApp } from '../src/render.js';

test('renderApp injects styled ASCII art and rendered date', () => {
  document.body.innerHTML = '<div id="app"></div>';
  const el = document.getElementById('app');
  const fixedNow = () => '2026-03-11 10:00';
  const asciiRenderer = (text) => `<ASCII:${text}>`;

  renderApp(el, {
    bannerText: 'Workshop',
    textColor: '#010203',
    bgColor: '#fefefe',
    fontSize: 19,
    now: fixedNow,
    asciiRenderer
  });

  const preview = el.querySelector('pre[aria-label="ascii-art"]');
  expect(preview).not.toBeNull();
  expect(preview.textContent).toContain('<ASCII:Workshop>');
  expect(preview.getAttribute('style')).toContain('color:#010203');
  expect(preview.getAttribute('style')).toContain('background-color:#fefefe');
  expect(preview.getAttribute('style')).toContain('font-size:19px');
  expect(el.textContent).toContain('Rendered at: 2026-03-11 10:00');
  expect(el.querySelectorAll('p.timestamp').length).toBe(1);
});
