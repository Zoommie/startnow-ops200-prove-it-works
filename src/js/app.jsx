import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here


constructor(props){

	super(props);
	this.state = {
		 balance:'',
		 rate: '',
		 term:'10',
		 payment:'',
	}


    this.handleBalance = this.handleBalance.bind(this);	
	this.handleRate= this.handleRate.bind(this);
	this.handleTerm= this.handleTerm.bind(this);
	this.handleClick= this.handleClick.bind(this);
}


handleBalance(event) {

    this.setState({balance: event.target.value});

  }

handleRate(event) {
    this.setState({rate: event.target.value});
  }

handleTerm(event){
	this.setState({term:event.target.value});
}  

handleClick(event){

    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();



let payment;
let P = (this.state.balance);
let I = (this.state.rate)/ 100/ 12;
let N = (this.state.term) * 12;

payment = monthlyPayment(P, N, I);

function monthlyPayment(p, n, i) {
 return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) -1);
}
   this.setState({payment:payment.toFixed(2)});
   console.log(this.state.handleClick);

}

  render() {
    return (

      <div className='container'>

        <header class="col-lg-12">
	      <h1>Mortgage Calculator</h1>
	    </header>   
	      
        <div class="col-lg-12">
		        <label>
		        <h3>Loan Balance</h3>
		 			<input id="balance" type="number"  name= "balance" value={this.state.balance} onChange={this.handleBalance}/>
				</label>
		</div>		
	       
        <div class="col-lg-12">
		        <label>
		        <h3>Interest Rate (%)</h3>
		        	<input id="rate" type="number" name="rate" value={this.state.rate} onChange={this.handleRate}/>
				</label>
		</div>			
			
        <div class="col-lg-12">	
        		<label>
        	<h3>Loan Term</h3>
					<select id="term" name="term"  value={this.state.term} onChange={this.handleTerm} >
						<option value="10">10</option>
						<option value="20">20</option>	
					</select>
				</label>
		</div>		
		
		<button className="btn btn-primary btn-lg" name="submit" id="submit" type="submit" onClick={this.handleClick}>SUBMIT</button>
		

			<div id="output" name='output'>
      <h4>{this.state.payment}</h4>
      </div>
		
      </div>
    );
  }
}


