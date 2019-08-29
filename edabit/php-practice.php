<?php
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.


function addition($num) {
	return $num + 1;
}


//Create a function that takes two numbers as arguments and return their sum.

function addition($a, $b) {
	return $a + $b;
}

//You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm. Return the total number of legs on your farm.

function animals($chickens, $cows, $pigs) {
	return (($chickens * 2) + ($cows * 4) + ($pigs * 4));
}

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero($num) {
	if ($num <= 0){
		return true;
	} else {
		return false;
	}
}

//Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent($num, $exp) {
	return pow($num, $exp);
}

//Write a function that takes the base and height of a triangle and return its area.

function triArea($base, $height) {
	return ($base * $height) / 2;
}

//Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName($firstName, $lastName) {
	return "$lastName, $firstName";
}

//Create a function that returns true if a string is empty and false otherwise.

function isEmpty($str) {
	if ($str !== ''){
		return false;
	} else {
		return true;
	}
}
    
//There is a single operator in JavaScript capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first provider divided by the second parameter will have a remainder, possiby zero. Return that value.

function remainder($x, $y) {
	return fmod($x, $y);
}

//Create a function that returns true if an integer is divisible by 5, and false otherwise.

function divisibleByFive($n) {
	if (fmod($n, 5) == 0){
		return true;
	} else {
		return false;
	}
}



?> 
