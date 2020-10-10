const check_prime = require('./check_prime')

describe('Test cases check prime', ()=>{
	it('check number 2', ()=>{
	  	expect(check_prime(2)).toBe(true);
	})

	it('check number 4', ()=>{
	  	expect(check_prime(4)).toBe(false);
	})

	it('check number 1', ()=>{
	  	expect(check_prime(1)).toBe(false);
	})
})