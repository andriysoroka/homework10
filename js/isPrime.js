var isPrime = (number) => {
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return console.log(number < 1);
		}
	}
	return console.log(number > 1)
}
isPrime(5);