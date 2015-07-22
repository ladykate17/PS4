// PROBLEM SET #4


// Write a function addNumbers that takes a single string parameter and searches for 
// all the numbers in the string, adds them together, then returns the sum. For example: if
// str is "88Hello 3World!" the output should be 91. You will have to differentiate between
// single digit numbers and multiple digit numbers like in the example above. So "55Hello"
// and "5Hello 5" should return two different answers. Each string will contain at least one
// letter or symbol.

var addNumbers = function(string){
	var nums = [];
	var result = 0 

		for (var i = 0; i < string.length; i++){
		
			if ( !isNaN(string[i]) ){
				nums.push(string[i]);
			} 

			if ( !isNaN(string[i]) && !isNaN(string[i++]) ){
				a = string[i] + string[i++]
				result = result + parseInt(a)
			} 
			
		}
		console.log(result)
		console.log(nums)

		// setInterval(function(){
			
		// 	for (var j = 0; j <= nums.length; j++){
		
		// 		if ( !isNaN(string[j]) && !isNaN(string[j++]) ){
		// 			a = string[j] + string[j++]
		// 			result = result + parseInt(a)
		// 		} 
		// 			console.log(result)
		// 	}

		// }, 1000);

}

addNumbers('88Hello 3World!');

	// if (compareIndecies === true){
	// 	console.log(compareIndecies, 'both indecies are a number!')

	// }
		// retu                                                                                                                                                                                                            rn true

	// for (var i = 0; i < string.length; i++){		
	// 	compareI = ( isNaN( string[i]) === false ) && ( isNaN( string[i++]) === false )

	// 	if ( compareI === true ){
		
	// 	temp = string[i] + string[i++]

	// 	console.log(temp);

	// 	nums.push(temp)

	// 	result = result + parseInt(temp)
	// 	} else if (isNaN(string[i]) === false ) {

	// 		result = result + parseInt(string[i])
	// 	console.log(string[i]);
	// 	nums.push(temp)


	// 	}
	// }
	// console.log('nums: ', nums);

	// console.log('result: ', result);
	// return result;




// Write a function longestWord that takes a single string parameter and returns the largest
// word in the string. If there are two or more words that are the same length, it returns the
// first word from the string with that length. Ignore punctuation and assume the input
// sentence will not be empty.


// BONUS: Write a function averageStringNumbers that takes a single string parameter and searches
// for all the numbers in the string, adds them together, then returns that final number divided
// by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!"
// the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then
// there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the
// nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used
// throughout the whole string (So this won't ever be the case: hello44444 world). Each string
// will also have at least one letter.

