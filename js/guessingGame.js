(function() {
	var ask = confirm('You wanna play the game?'),
		prise = 10,
		randomNumber = Math.ceil(Math.random()*5),
		isContinue = true,
		times = 1,
		parthOfPrice, askNumber;
	
	if(ask) {
		play();
	} else {
		goodBye();
	}
	
	function play() {
		debugger
		askNumber = parseInt(prompt("Nice! Let's start! You have three chance! Write random numder", askNumber));
		firstTry(askNumber)
		function firstTry(askNumber) {
			parthOfPrice = 1;
			if (askNumber === randomNumber) {
				alert(`Сongratulation! Your price is ${prise / parthOfPrice}$`);
				correctNumber();
			} else {
				secondTry();
			}
		}
		function secondTry() {
			askNumber = parseInt(prompt("Wrong! You have two chance", askNumber));
			parthOfPrice = 2;
			if(askNumber === randomNumber) {
				alert(`Сongratulation! Your price is ${prise / parthOfPrice}$`);
				correctNumber();
			} else {
				thirdTry();
			}
		}
		function thirdTry() {
			askNumber = parseInt(prompt("Wrong! You have the last chance", askNumber));
			parthOfPrice = 5;
			if(askNumber === randomNumber) {
				alert(`Сongratulation! Your price is ${prise / parthOfPrice}$`);
				correctNumber();
			} else {
				alert (`Your price is - 0$`);
				oneMoreTry();
			}
		}
		function correctNumber() {
			askContinue = confirm("continue?");
			if (askContinue) {
				prise = prise * 3;
				times = times + 1;
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
	}
	function goodBye() {
		alert("good bye");
	}
})();
