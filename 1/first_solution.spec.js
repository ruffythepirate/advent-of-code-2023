const {parseNumberFromString} = require("./first_solution");

describe('solution', () => {
    describe('parsenNumberFromString', () => {
        it('should return 1 when input is "1a"', () => {
            const input = '1a';
            const expected = 11;
            const actual = parseNumberFromString(input);
            expect(actual).toBe(expected);
        });

        it('should handle characters', () => {
            const input = 'a1b2';
            const expected = 12;
            const actual = parseNumberFromString(input);
            expect(actual).toBe(expected);
        });

        it('should only take two numbers', () => {
            const input = 'a1b2c3d4d6a';
            const expected = 16;
            const actual = parseNumberFromString(input);
            expect(actual).toBe(expected);
        });
    });
});