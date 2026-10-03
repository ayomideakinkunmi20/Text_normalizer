import {normalizePunctuation} from '../../../engine/rules/punctuation.rules.js';

describe('normalizePunctuation',()=>{
    test('collapse repeated exclamation mark into one',()=>{
        expect(normalizePunctuation('wait!!!')).toBe('wait!');
    });
    test('collapse repeated question mark into one',()=>{
        expect(normalizePunctuation('Really???')).toBe('Really?');
    });
    test('remove space before punctuation',()=>{
        expect(normalizePunctuation('Wait !')).toBe('Wait!');
    });
    test('add a space after punctuation when missing',()=>{
        expect(normalizePunctuation('Hello,world')).toBe('Hello, world');
    });
    test('leave correctly punctuation text unchanged',()=>{
        expect(normalizePunctuation('Hello, world')).toBe('Hello, world');
    });
    test('handles multiple punctuation issues together',()=>{
        expect(normalizePunctuation('Hello ,world !!!')).toBe('Hello, world!');
    });
})