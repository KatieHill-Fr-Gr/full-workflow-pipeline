
import { renderApp } from './render.js';
import { getCows, getFigletFonts, renderCowsay, renderFiglet } from './ascii.js';

// Entry point: wires UI controls to a live ASCII preview.
const el = document.getElementById('app');
const inputEl = document.getElementById('text-input');
const modeEl = document.getElementById('mode-select');
const figletEl = document.getElementById('figlet-select');
const cowEl = document.getElementById('cow-select');
const figletGroupEl = document.getElementById('figlet-group');
const cowGroupEl = document.getElementById('cow-group');
const textColorEl = document.getElementById('text-color');
const bgColorEl = document.getElementById('bg-color');
const sizeRangeEl = document.getElementById('size-range');

const state = {
    text: inputEl?.value || 'Pipeline Workshop',
    mode: modeEl?.value || 'figlet',
    figletFont: 'Standard',
    cow: 'DEFAULT',
    textColor: textColorEl?.value || '#111827',
    bgColor: bgColorEl?.value || '#f9fafb',
    fontSize: Number(sizeRangeEl?.value || 14)
};

function updateModeVisibility() {
    const figletActive = state.mode === 'figlet';
    if (figletGroupEl) figletGroupEl.hidden = !figletActive;
    if (cowGroupEl) cowGroupEl.hidden = figletActive;
}

function getAsciiRenderer() {
    if (state.mode === 'cowsay') {
        return (text) => renderCowsay(text, state.cow);
    }

    return (text) => renderFiglet(text, state.figletFont);
}

function draw() {
    renderApp(el, {
        bannerText: state.text,
        textColor: state.textColor,
        bgColor: state.bgColor,
        fontSize: state.fontSize,
        asciiRenderer: getAsciiRenderer()
    });
}

function fillSelect(selectEl, values) {
    if (!selectEl) return;
    selectEl.innerHTML = '';
    values.forEach((value) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value
            .toLowerCase()
            .replaceAll('_', ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
        selectEl.append(option);
    });
}

async function init() {
    const [figletFonts, cows] = await Promise.all([getFigletFonts(), getCows()]);
    const safeFonts = Array.isArray(figletFonts) && figletFonts.length ? figletFonts : ['Standard'];
    const safeCows = Array.isArray(cows) && cows.length ? cows : ['default'];

    fillSelect(figletEl, safeFonts);
    fillSelect(cowEl, safeCows);

    if (!safeFonts.includes(state.figletFont)) {
        state.figletFont = safeFonts[0];
    }
    if (!safeCows.includes(state.cow)) {
        state.cow = safeCows[0];
    }

    if (figletEl) figletEl.value = state.figletFont;
    if (cowEl) cowEl.value = state.cow;

    updateModeVisibility();
    draw();
}

if (inputEl) {
    inputEl.addEventListener('input', (event) => {
        state.text = event.target.value;
        draw();
    });
}

if (modeEl) {
    modeEl.addEventListener('change', (event) => {
        state.mode = event.target.value;
        updateModeVisibility();
        draw();
    });
}

if (figletEl) {
    figletEl.addEventListener('change', (event) => {
        state.figletFont = event.target.value;
        draw();
    });
}

if (cowEl) {
    cowEl.addEventListener('change', (event) => {
        state.cow = event.target.value;
        draw();
    });
}

if (textColorEl) {
    textColorEl.addEventListener('input', (event) => {
        state.textColor = event.target.value;
        draw();
    });
}

if (bgColorEl) {
    bgColorEl.addEventListener('input', (event) => {
        state.bgColor = event.target.value;
        draw();
    });
}

if (sizeRangeEl) {
    sizeRangeEl.addEventListener('input', (event) => {
        state.fontSize = Number(event.target.value);
        draw();
    });
}

init().catch(() => {
    draw();
});
