const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgagecalculator = null;

    beforeEach( () => {
        mortgagecalculator = new Mortgage(400000, 5, 10, 12);
    });

    it('monthlyPayment function should exist', () => {
      expect(mortgagecalculator.monthlyPayment).to.exist;
    });

    it('monthlyPayment should equal to 4,242.62', () => {
      
        expect(mortgagecalculator.monthlyPayment(400000, 5,10,12 )).to.equal(4242.62);
    });

    it('term should exist', () => {
      
        expect(mortgagecalculator.term).to.exist;
    });
    it('interest should exist', () => {
      
        expect(mortgagecalculator.interest).to.exist;
    });




})