(function() {
	var parthOfPrice, askNumber,
		ask = confirm('You wanna play the game?'),
		prise = 10,
		randomNumber = Math.ceil(Math.random()*5),
		isContinue = true,
		times = 1;

	if(ask) {
		play();
	} else {
		goodBye();
	}
	function isStepSuccess(message, parthOfPrice) {
		debugger
		let askedNumber = parseInt(prompt(message));
		if (askedNumber === randomNumber) {
			alert(`Сongratulation! Your price is ${prise / parthOfPrice}$`);
			correctNumber(parthOfPrice);
			return true
		}
		return false;
	}

	function play() {
		let isSuccess;
		isSuccess = isStepSuccess("Nice! Let's start! You have three chance! Write random numder", 1);
		if(!isSuccess) isSuccess = isStepSuccess("Wrong! You have two chance", 2);
		if(!isSuccess) isSuccess = isStepSuccess("Wrong! You have the last chance", 5);
		if(!isSuccess) {
			alert (`Your price is - 0$`);
			oneMoreTry();
		}
	}
	function congratulation(parth){
		alert(`Сongratulation! Your price is ${prise / parth}$`);
		correctNumber();
	}
	function correctNumber(parthOfPrice) {
		askContinue = confirm("continue?");
		if (askContinue) {
			prise = prise * 3;
			times = times * 2;
			randomNumber = Math.ceil(Math.random() * (5 * times));
			play();
		} else {
			alert(`Your price is ${prise / parthOfPrice}$`);
			goodBye();
		}
	}
	function oneMoreTry() {
		askContinue = confirm("continue?")
		if (askContinue) {
			prise = 10;
			randomNumber = Math.ceil(Math.random()*5);
			play();
		} else {
			goodBye();
		}
	}
	function goodBye() {
		alert("good bye");
	}
})();
