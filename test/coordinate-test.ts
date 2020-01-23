import { expect } from 'chai';
import { Coordinates } from '../include/coordinate';


describe('Coordinates', () => {
    describe('Must throw an error', () => {
        it('when lat is <=0', () => {
            expect(() => { const cor = new Coordinates(-11, 1, 1); }).to.throw('Value must be bigger than 0');
        });
        it('when lat is 0', () => {
            expect(() => { const cor = new Coordinates(0, 1, 1); }).to.throw('Value must be bigger than 0');
        });

        it('when lon is <=0', () => {
            expect(() => { const cor = new Coordinates(1, -1, 1); }).to.throw('Value must be bigger than 0');
        });
        it('when lon is 0', () => {
            expect(() => { const cor = new Coordinates(1, 0, 1); }).to.throw('Value must be bigger than 0');
        });
    });

    it('Must accept 0 for alt', () => {
        expect(() => { const cor = new Coordinates(1, 1, 0); }).not.to.throw('Value must be bigger than 0');
    });

    it('Must accept negatives for alt', () => {
        expect(() => { const cor = new Coordinates(1, 1, -10); }).not.to.throw('Value must be bigger than 0');
    });

});