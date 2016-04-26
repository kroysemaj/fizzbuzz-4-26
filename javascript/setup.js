function fizzBuzz(i){
	if(isDivisibleBy(i, 3) && isDivisibleBy(i, 5)){
		return "fizzbuzz";
	}
	if(isDivisibleBy(i, 3)){
		return "fizz";
	}
	if(isDivisibleBy(i, 5)){
		return "buzz";
	}

	return i;
}

function isDivisibleBy(num, divisor){
	return num % divisor === 0; // is num evenly divisible by divisor
}
