import {normalizeWhitespace} from '../../../engine/rules/whitespace.rules.js';

describe('normalizeWhitespace', ()=>{
    test('collapse multiple sapce into one',()=>{
     expect(normalizeWhitespace('hello  world')).toBe('hello world');
    })
    test('trims leading and trailig whitespace', ()=>{
        expect(normalizeWhitespace('  hello  ')).toBe('hello');
    });
    test('convert tabs and newlines into single spaces', ()=>{
        expect(normalizeWhitespace('hello\tworld\nfoo')).toBe('hello world foo');
    });
    test('return return an empty string unchanged',()=>{
        expect (normalizeWhitespace('')).toBe('');
    });
    test('leaves an already-clean string unchanged',()=>{
        expect (normalizeWhitespace('hello world')).toBe('hello world');
    });
    test('handles a string that is only whitespace',()=>{
        expect (normalizeWhitespace(' ')).toBe('');
    });
});