// ASCII helper module: wraps figlet and cowsay APIs for UI-friendly rendering.
import figlet from 'figlet';
import Big from 'figlet/importable-fonts/Big.js';
import Doom from 'figlet/importable-fonts/Doom.js';
import Ghost from 'figlet/importable-fonts/Ghost.js';
import Slant from 'figlet/importable-fonts/Slant.js';
import Small from 'figlet/importable-fonts/Small.js';
import Standard from 'figlet/importable-fonts/Standard.js';
import * as cowsayModule from 'cowsay';

const sayFn = cowsayModule.say;

const COW_MAP = Object.fromEntries(
    Object.entries(cowsayModule).filter(([name, value]) => {
        if (name === 'say' || name === 'think' || name === 'EYES') {
            return false;
        }
        return typeof value === 'string';
    })
);

const FALLBACK_COWS = [
    'DEFAULT',
    'BUNNY',
    'CHEESE',
    'DRAGON',
    'ELEPHANT',
    'GHOSTBUSTERS',
    'KITTY',
    'KOALA',
    'MOOSE',
    'SHEEP',
    'SKELETON',
    'STEGOSAURUS',
    'TURKEY',
    'TURTLE',
    'VADER'
];

const FALLBACK_FIGLET_FONTS = [
    'Standard',
    'Ghost',
    'Slant',
    'Small',
    'Big',
    'Doom'
];

const FONT_DATA = {
    Standard,
    Ghost,
    Slant,
    Small,
    Big,
    Doom
};

let fontsPrepared = false;

function prepareFonts() {
    if (fontsPrepared) return;

    Object.entries(FONT_DATA).forEach(([name, data]) => {
        const fontData = data.default ?? data;
        figlet.parseFont(name, fontData);
    });

    fontsPrepared = true;
}

export function renderFiglet(text, font = 'Standard') {
    const message = (text || '').trim() || 'Type something!';
    prepareFonts();

    try {
        return figlet.textSync(message, { font });
    } catch {
        return figlet.textSync(message, { font: 'Standard' });
    }
}

export function renderCowsay(text, cow = 'DEFAULT') {
    const message = (text || '').trim() || 'Type something!';
    if (typeof sayFn !== 'function') {
        return message;
    }

    const selectedCow = COW_MAP[cow] ?? COW_MAP.DEFAULT;

    try {
        return sayFn({ text: message, cow: selectedCow });
    } catch {
        return sayFn({ text: message });
    }
}

export async function getFigletFonts() {
    prepareFonts();
    return FALLBACK_FIGLET_FONTS;
}

export async function getCows() {
  const names = Object.keys(COW_MAP).sort();
  if (names.length > 0) {
    return names;
  }
  return FALLBACK_COWS;
}
