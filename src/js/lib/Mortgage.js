module.exports = class Mortgage {
  constructor(principal, interest, term, period) {
    this.principal = principal;
    this.interest = interest;
    this.term = term;
    this.period = period;
  }
  
  monthlyPayment(principal, interest, term, period) {
  // let payment;
  let P = this.principal;
  let I = this.interest/ 100/ this.period ;
  let N = this.term * this.period ;
  
  // payment = monthlyPayment(P, N, I);
  
  let payment =  ((P * I) * (Math.pow(1 + I, N)) / (Math.pow(1 + I, N) -1)).toFixed(2);
   return parseFloat(payment);
  }
    
  
  }
   




