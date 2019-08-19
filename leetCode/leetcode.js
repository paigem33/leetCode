////Given an array of integers, return indices of the two numbers such that they add up to a specific target.
////
////You may assume that each input would have exactly one solution, and you may not use the same element twice.
////
////Example:
////
////Given nums = [2, 7, 11, 15], target = 9,
////
////Because nums[0] + nums[1] = 2 + 7 = 9,
////return [0, 1].
//
////find if target - i = x
//// var twoSum = function(nums, target) {
////     var values = []
////     for(let i=0;i<nums.length;i++){
////         for(let x=1;i<nums.length;i++){
////             if(target - nums[i] === nums[x] || target - nums[i] === nums[x]){
////                     values.push(x,i)
////             }
////         }
////     }
//
////     return values
//// };
//
//var twoSum = function(nums, target) {
//    let map = new Map;
//    for (var i = 0; i < nums.length; i++) {
//        let complement = target - nums[i];
//        if (map.has(complement)) {
//            return [map.get(complement), i]
//        }
//        map.set(nums[i], i);
//    }
//}
//
////Given a 32-bit signed integer, reverse digits of an integer.
////
////Example 1:
////
////Input: 123
////Output: 321
////Example 2:
////
////Input: -123
////Output: -321
////Example 3:
////
////Input: 120
////Output: 21
//var reverse = function(x) {
//    newX = parseFloat(x.toString().split('').reverse().join(''))
//    if(newX > 2147483647){
//        return 0
//    } else {
//    return newX * Math.sign(x)
//    }
//};
//
////Math.sign(1) is going to return 1, and Math.sign(-1) is going to return -1, so you can find if the original value is positive or negative this way, and then make the new value match.
////parseFloat removes the zeros at the beginning and the negative from the end if there is one
//
////Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
////didn't work on leetcode, works just fine here, who knows
//
//var isPalindrome = function(x) {
//    newX = x.toString().split('').reverse().join('')
//    console.log(x)
//    console.log(newX)
//    if(x == newX){
//        console.log('true')
//    } else {
//        console.log('false')
//    }
//};
//isPalindrome(1221)
//
////take in roman numeral, return int
//
//function fromRoman(str) {  
//  var result = 0;
//  // the result is now a number, not a string
//  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
//  for (var i = 0;i<=decimal.length;i++) {
//      //roman[i] is the is X, and it is in the zero index at the first loop
//      //it is going to loop through and keep going up indexes until it finds one that is on the roman array and is at index 0 of the string
//    while (str.indexOf(roman[i]) === 0){
//        console.log(i)
//        console.log(roman[i])
//        //find the corrisponding decimal to the index of i, so for X it would be 10 on the first loop, assign it to result
//      result += decimal[i];
//        //then remove the value at index 0, thus making the loop run again if the new value at index 0 is in the roman array
//      str = str.replace(roman[i],'');
//    }
//  }
//  console.log( result);
//}
//
//fromRoman("III")

//can it do all the indexes at the same time, right now it is just adding the similiar ones onto the result over again
//var longestCommonPrefix = function(strs) {
//    if(strs.length <= 0)
//    result = ''
//    if(strs[0].charAt(0) !== strs[1].charAt(0)){
//        console.log(result)
//    } else {
//        let value = strs[0]
//            for(let i = 1;i<strs.length;i++){
//                console.log(strs[i] + " !!!!!-i in i loop")
//                for(let x = 0;x<value.length;x++){
//                    if(strs[i].charAt(x) === value.charAt(x)){
//                        console.log(strs[i].charAt(x) + " -i in x loop")
//                        result = result + strs[i].charAt(x)
//                        console.log(result + " -result in x loop")
//                    }
//            }
//        }
//    console.log(result + " -the result")
//    }
//};

//var longestCommonPrefix = function(strs) {
//    if(strs.length <= 0){return ''}
//    result = ''
//    if(strs[0].charAt(0) !== strs[1].charAt(0)){
//        console.log(result)
//    } else {
//        let value = strs[0]
//            for(let i = 1;i<strs.length;i++){
//                for(let x = 0;x<value.length;x++){
//                    if(strs[i].charAt(x) === value.charAt(x)){
//                        //need to somehow tell it to stop repeating/ going off of value at the next index and instead go off of result maybe???
//                        result = result + strs[i].charAt(x)
//                    }
//            }
//        }
//    console.log(result)
//    }
//};
//longestCommonPrefix(
//["flower","flow","flight"])


//simple idea, take 1st string as prefix (the max prefix you will get will no longer than this one);
//outer loop is the string, inner loop is all string except 1st one (because 1st one is itself)
//if all match, add 1 letter to out, otherwise break and return out. ---idea doing oposite of my attempt


var longestCommonPrefix = function(strs) {
    if(strs.length <= 0){return ''}
    result = ''
    let value = strs[0]
            for(let i = 0;i<value.length;i++){
                for(let x = 1;x<strs.length;x++){
                    if(strs[x].charAt(1) === value.charAt(x)){
                        //need to somehow tell it to stop repeating/ going off of value at the next index and instead go off of result maybe???
                        result = result + strs[i].charAt(x)
                    }
            }
    }
    console.log(result)
};
longestCommonPrefix(
["flower","flow","flight"])