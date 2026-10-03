import {normalizeCasing} from '../../../engine/rules/casing.rules.js';

describe('normalizeCasing',()=>{
    test('lowercases an all-caps senstence and capitalize the first letter',()=>{
        expect(normalizeCasing('HELLO WORLD')).toBe('Hello world');
    });
    test('capitalize the first letter of each sentence',()=>{
        expect(normalizeCasing('hELLo woRLD. this is fun! are you ready?'))
        .toBe('Hello world. This is fun! Are you ready?');
    });
    test('handle mixed casing correctly',()=>{
        expect(normalizeCasing('hELLo WoRLD')).toBe('Hello world');
    });
    test('leaves an already-correct sentence unchanged',()=>{
        expect(normalizeCasing('Hello world')).toBe('Hello world');
    });
    test('capitalize a single lowercase word',()=>{
        expect(normalizeCasing('hello')).toBe('Hello');
    });
    test('return an empty string unchanged',()=>{
        expect(normalizeCasing('')).toBe('');
    });

});