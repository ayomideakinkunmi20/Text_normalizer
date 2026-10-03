import {normalizeText} from '../../../engine/ruleEngine.js';

describe('normalizeText(ruleEngine)',()=>{
    test('applies the default profile when no profile is given',()=>{
        const result= normalizeText('heyyyy PLS help!!!');
        expect(result).toBe('Heyy please help!');
    });
    test('applies the chatMessage profile correctly',()=>{
        const result = normalizeText('idk pls!!!','chatMessage');
        expect(result).toBe("I don't know please!");
    });
    test('applies the address profile correctly',()=>{
        const result = normalizeText('123 main st.', 'address');
        expect(result).toBe('123 main st.');
    });
    test('falls back to default profile for an unknown profile name',()=>{
        const result = normalizeText('heyyyy PLS help!!!', 'madeUpProfile');
        expect(result).toBe('Heyy please help!');
    });
    test('handles an already-clean string without changing it',()=>{
        const result = normalizeText('Hello world.','default');
        expect(result).toBe('Hello world.');
    });
});