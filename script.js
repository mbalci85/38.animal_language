// Take a phrase and translate it into its whale equivalent.
// There are a few simple rules for translating text to whale language:
// 1.	There are no consonants. Only vowels excluding “y”.
// 2.	The u‘s and e‘s are extra long, so we must double them in our program.
// For example for “Hi, Human” output is : “IUUA”.
// To accomplish this translation, we can use our knowledge of loops.

let input = 'a whale of a deal!';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
	if (vowels.includes(input[i])) {
		if (input[i] == 'e' || input[i] == 'u') {
			resultArray.push(input[i].repeat(2));
		} else {
			resultArray.push(input[i]);
		}
	}
}

console.log(resultArray.join('').toUpperCase());
