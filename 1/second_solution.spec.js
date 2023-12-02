const {parseNumberFromString} = require("./second_solution");
describe('second solution', () => {
    it('should handle text numbers', () => {
        const input = 'aoneb2';
        const expected = 12;
        const actual = parseNumberFromString(input);
        expect(actual).toBe(expected);
    });

    it('should handle two text numbers', () => {
        const input = 'two1nine';
        const expected = 29;
        const actual = parseNumberFromString(input);
        expect(actual).toBe(expected);
    });

    it('should handle strings interfering', () => {
        const input = 'twone1nine';
        const expected = 29;
        const actual = parseNumberFromString(input);
        expect(actual).toBe(expected);
    });

    it('should handle strings interfering from the end', () => {
        const input = 'twone1twone';
        const expected = 21;
        const actual = parseNumberFromString(input);
        expect(actual).toBe(expected);
    });
});