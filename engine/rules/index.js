import{normalizeWhitespace} from './whitespace.rules.js';
import{normalizeCasing} from './casing.rules.js';
import{normalizePunctuation} from './punctuation.rules.js';
import{normalizeAbbreviations} from './abbreviations.rules.js';
import{normalizeRepeatedChars} from './repeatedChars.rules.js';

export const rules = {
    whitespace:normalizeWhitespace,
    casing:normalizeCasing,
    punctuation:normalizePunctuation,
    abbreviation:normalizeAbbreviations,
    repeatedChars:normalizeRepeatedChars,
};