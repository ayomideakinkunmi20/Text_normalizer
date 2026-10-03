import {normalizeRepeatedChars} from '../../../engine/rules/repeatedChars.rules.js';

describe('normalizeRepeatedChars',()=>{
    test('collapse repeated letters down to two',()=>{
        expect(normalizeRepeatedChars('soooooo good')).toBe('soo good');
    });
    test('collapse long run of repeated letters',()=>{
        expect(normalizeRepeatedChars('heyyyyy')).toBe('heyy');
    });
    test('leaves legitimate double letters untouched',()=>{
        expect(normalizeRepeatedChars('good')).toBe('good');
    });
    test('leaves legitimate double letters in a full word untouched',()=>{
        expect(normalizeRepeatedChars('coffee')).toBe('coffee');
    });
    test('handle repeated-letters words in one string',()=>{
        expect(normalizeRepeatedChars('soooooo good heyyyyyy')).toBe('soo good heyy');
    });
    test('leaves alraedy-clean text unchanged',()=>{
        expect(normalizeRepeatedChars('hello world')).toBe('hello world');
    });
})