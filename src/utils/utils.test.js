import { calculateIsActive, calculateModifier } from "./utils";

describe('Class list', () => {
    it('returns true if the attributes meet the minimum requirements', () => {
        const attributes = {
            'attr1': 10,
            'attr2': 20,
            'attr3': 30,
        };

        const requirements = {
            'attr1': 10,
            'attr2': 10,
            'attr3': 10,
        };

        expect(calculateIsActive(requirements, attributes)).toBe(true);
    });

    it('returns false if the attributes don\'t meet the minimum requirements', () => {
        const attributes = {
            'attr1': 10,
            'attr2': 20,
            'attr3': 30,
        };

        const requirements = {
            'attr1': 10,
            'attr2': 40,
            'attr3': 50,
        };

        expect(calculateIsActive(requirements, attributes)).toBe(false);
    });
});

describe('Attributes list', () => {
    it('returns the expected value for the ability modifier', () => {
        expect(calculateModifier(7)).toBe(-2);
        expect(calculateModifier(9)).toBe(-1);
        expect(calculateModifier(10)).toBe(0);
        expect(calculateModifier(11)).toBe(0);
        expect(calculateModifier(12)).toBe(1);
        expect(calculateModifier(14)).toBe(2);
        expect(calculateModifier(20)).toBe(5);
    })
})