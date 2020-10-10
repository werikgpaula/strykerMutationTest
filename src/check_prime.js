const range = require('./range')

// Implementação da função proposta
function check_prime(number){
	if(number != 1){
		for (factor in  range(2, number)){
			if((number % factor) == 0){
				return false;
			}
		}
	} else{
		return false;
	}
	return true;
};

module.exports = check_prime;