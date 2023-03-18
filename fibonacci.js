function fibs(num)
{
	if (num == 1) return [0];
	let fibArray = [];
	fibArray[0] = 0;
	fibArray[1] = 1;

	for (let i = 2; i < num; ++i) {
		fibArray[i] = fibArray[i-1] + fibArray[i-2];
	}
	return fibArray;
}

console.log(fibs(1));
console.log(fibs(20));
