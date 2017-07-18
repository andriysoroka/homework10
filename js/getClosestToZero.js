function getClosestToZero() {
	var closest;
	if (arguments.length === 0) {
		console.log("empty arguments");
		return;
	}
	closest = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		if (Math.abs(arguments[i]) < closest)
			closest = arguments[i];
	}
	console.log(`closest numbet to 0 is ${closest}`);
}
getClosestToZero(2, 4, -1);