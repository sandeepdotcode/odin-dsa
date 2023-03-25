function merge(lArr, rArr) {
	let j = 0, k = 0;
	const newArr = [];

	while (j < lArr.length && k < rArr.length) {
		if (lArr[j] <= rArr[k]) {
			newArr.push(lArr[j]);
			j++;
		} else {
			newArr.push(rArr[k]);
			k++;
		}
	}

	while (j < lArr.length) {
		newArr.push(lArr[j]);
		j++;
	}
	while (k < rArr.length) {
		newArr.push(rArr[k]);
		k++;
	}
	return newArr;
}

function mergeSort(arr) {

	if (!Array.isArray(arr)) return "ERROR! Not Array!";
	if (arr.length < 2) return arr;

	const nSplit = Math.floor(arr.length / 2);
	return merge(mergeSort(arr.slice(0, nSplit)), mergeSort(arr.slice(nSplit)));
}


console.log(mergeSort("abc"));
console.log(mergeSort(34));
console.log(mergeSort([]));
console.log(mergeSort([1]));
console.log(mergeSort([7, 3]));
console.log(mergeSort([9, 8, 6, 5, 7, 4, 3, 2, 1]));
console.log(mergeSort([1, 2, 3, 4, 5, 6]));
