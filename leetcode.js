//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//Example:
//
//Given nums = [2, 7, 11, 15], target = 9,
//
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

//find if target - i = x
// var twoSum = function(nums, target) {
//     var values = []
//     for(let i=0;i<nums.length;i++){
//         for(let x=1;i<nums.length;i++){
//             if(target - nums[i] === nums[x] || target - nums[i] === nums[x]){
//                     values.push(x,i)
//             }
//         }
//     }

//     return values
// };

var twoSum = function(nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
}

//Given a 32-bit signed integer, reverse digits of an integer.
//
//Example 1:
//
//Input: 123
//Output: 321
//Example 2:
//
//Input: -123
//Output: -321
//Example 3:
//
//Input: 120
//Output: 21
var reverse = function(x) {
    newX = parseFloat(x.toString().split('').reverse().join(''))
    if(newX > 2147483647){
        return 0
    } else {
    return newX * Math.sign(x)
    }
};

//Math.sign(1) is going to return 1, and Math.sign(-1) is going to return -1, so you can find if the original value is positive or negative this way, and then make the new value match.
//parseFloat removes the zeros at the beginning and the negative from the end if there is one

//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//didn't work on leetcode, works just fine here, who knows

var isPalindrome = function(x) {
    newX = x.toString().split('').reverse().join('')
    console.log(x)
    console.log(newX)
    if(x == newX){
        console.log('true')
    } else {
        console.log('false')
    }
};
isPalindrome(1221)
