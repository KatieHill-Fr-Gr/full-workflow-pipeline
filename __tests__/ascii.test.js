/** @jest-environment jsdom */

import { getCows, getFigletFonts, renderCowsay, renderFiglet } from '../src/ascii.js';

test('renderFiglet and renderCowsay return strings', () => {
    const figletArt = renderFiglet('Hello', 'Standard');
    const cowArt = renderCowsay('Hello', 'default');

    expect(typeof figletArt).toBe('string');
    expect(typeof cowArt).toBe('string');
    expect(figletArt.length).toBeGreaterThan(0);
    expect(cowArt.length).toBeGreaterThan(0);
});

test('getFigletFonts and getCows return option lists', async () => {
    const fonts = await getFigletFonts();
    const cows = await getCows();

    expect(Array.isArray(fonts)).toBe(true);
    expect(Array.isArray(cows)).toBe(true);
    expect(fonts.length).toBeGreaterThan(0);
    expect(cows.length).toBeGreaterThan(0);
});
