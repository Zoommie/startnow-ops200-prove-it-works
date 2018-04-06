const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

const url = 'http://localhost:8888';

const nightmare = new Nightmare();

describe('End to End Tests', function() {
  this.timeout(10000);
  let httpServer = null;
  let pageObject = null;

  before((done) => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after((done) => {
    httpServer.close();
    done();
  });

  // This is where your code is going to go


it('should contain a <h1> element for the page title', () => 
  pageObject
    .evaluate(() => document.querySelector('h1').innerText)
    .then(headerText => {
      expect(headerText).to.not.be.null;
      expect(headerText.toLowerCase()).to.equal('mortgage calculator');
    }));

it('should contain an <input> element for the balance', () =>
pageObject
  .evaluate(() => document.querySelector('input[name=balance]').innerText)
  .then(input => {
    expect(input).to.not.be.null;
    expect(input).to.exist;
}));


it('should contain an <input> element for the rate', () =>
pageObject
  .evaluate(() => document.querySelector('input[name=rate]').innerText)
  .then(input => {
    expect(input).to.not.be.null;
    expect(input).to.exist;
}));

it('should contain a <select> element for the term', () =>
pageObject
  .evaluate(() => document.querySelector('select[name=term]').innerText)
  .then(select => {
    expect(select).to.not.be.null;
    expect(select).to.exist;
})); 




it('should contain a <option> element with text "10"', () =>
pageObject
  .evaluate(() => document.querySelector('option').innerHTML)
  .then(option => {
    expect(option).to.not.be.null;
    expect(option).to.equal('10');
  }));



it('should contain a <button> element for the button', () => 
  pageObject
  .evaluate(() => document.querySelector('button[name=submit]'))
    .then(button => {
      expect(button).to.not.be.null;
      expect(button).to.exist;
    }));


it('should contain a <div> element with an id of output', () => 
  pageObject
  .evaluate(() => document.querySelector('div[name=output]'))
    .then(div => {
      expect(div).to.not.be.null;
      expect(div).to.exist;
    }));



it('should correctly calculate mortgage', () =>
  pageObject
  .wait()
  .type('input[name=balance]', 400000)
  .type('input[name=rate]', 5)
 .select('select[name=term]', 10)
  .click('#submit')
  .wait('#output')
  .evaluate(() => document.querySelector('#output').innerText)
  .then((outputText) => {
    expect(outputText).to.equal('4242.62');
  })
).timeout(6500);


})

