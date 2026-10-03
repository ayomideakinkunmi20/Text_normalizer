import {normalizeAbbreviations} from '../../../engine/rules/abbreviations.rules.js';

describe('normalizeAbbreviation',()=>{
    test('expands "Idk" to "I don\'t know',()=>{
        expect(normalizeAbbreviations('Idk what to do')).toBe("I don't know what to do");
    });
    test('expands "pls" to "please"', ()=>{
        expect(normalizeAbbreviations('pls help me')).toBe('please help me');
    });
    test('expands "fr" to "for real"',()=>{
        expect(normalizeAbbreviations('fr this is crazy')).toBe('for real this is crazy');
    });
    test('expands "wby" to "what about you"',()=>{
        expect(normalizeAbbreviations('I am good, Wby')).toBe('I am good, what about you');
    });
    test('expands "tbh" to "to be "honest"',()=>{
        expect(normalizeAbbreviations('you are  very beautiful, tbh')).toBe('you are very beautiful, to be honest');
    });
    test('is case-insensitive when matching abbreviation',()=>{
        expect(normalizeAbbreviations('IDK what happened')).toBe("I don't know what happened");
    });
    test('leaves word with no matching abbreviation unchanged',()=>{
        expect(normalizeAbbreviations('hello world')).toBe('hello world');
    });
});