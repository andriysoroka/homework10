function getMin() {
	if (arguments.length === 0) {
		console.log("empty arguments");
		return;
	}
	var min = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		if (arguments[i] < min) {
			min = arguments[i];
		}
	}
	return console.log(min);
}
getMin(1, 5,4,-1,-5);