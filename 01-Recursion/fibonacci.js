function fibs(num) {
	if (num < 1 || typeof num !== 'number') return "ERROR! Enter valid no.!";
	if (num === 1) return [0];
	let fibArray = [];
	fibArray[0] = 0;
	fibArray[1] = 1;

	for (let i = 2; i < num; ++i) {
		fibArray[i] = fibArray[i-1] + fibArray[i-2];
	}
	return fibArray;
}

console.log(fibs(-30));	// ERROR! Enter valid no.!
console.log(fibs(1));	// [ 0 ]
console.log(fibs(2)); 	// [ 0, 1 ]
console.log(fibs(10));  // [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34]

function fibsRec(num) {
	if (num < 1 || typeof num !== 'number') return "ERROR! Enter valid no.!";
	
	if (num === 1) return [0];
	if (num === 2) return [0, 1];

	const fibArray = fibsRec(num - 1);
	return [...fibArray, fibArray.at(-1) + fibArray.at(-2)];
}

console.log(fibsRec(-30));	// ERROR! Enter valid no.!
console.log(fibsRec(1));	// [ 0 ]
console.log(fibsRec(2)); 	// [ 0, 1 ]
console.log(fibsRec(10));  // [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
