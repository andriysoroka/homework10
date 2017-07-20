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

	function play() {
		debugger
		askNumber = parseInt(prompt("Nice! Let's start! You have three chance! Write random numder", askNumber));
		parthOfPrice = 1;
		if (askNumber === randomNumber) {
			congratulation(parthOfPrice);
		} else {
			askNumber = parseInt(prompt("Wrong! You have two chance", askNumber));
			parthOfPrice = 2;
				if(askNumber === randomNumber) {
					congratulation(parthOfPrice);
				} else {
					askNumber = parseInt(prompt("Wrong! You have the last chance", askNumber));
					parthOfPrice = 5;
					if(askNumber === randomNumber) {
						congratulation(parthOfPrice);
					} else {
						alert (`Your price is - 0$`);
						oneMoreTry();
					}
				}
		}
	}
	function congratulation(parth){
		alert(`Сongratulation! Your price is ${prise / parth}$`);
		correctNumber();
	}
	function correctNumber() {
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
