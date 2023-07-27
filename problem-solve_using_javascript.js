// function reverseString(inputString) {
//     let reversedString = "";
//     for (let i = inputString.length - 1; i >= 0; i--) {
//       reversedString += inputString[i];
//     }
//     return reversedString;
//   }

// const myString = "sadia"
// const result = reverseString(myString);
// console.log(result)

// Problem 1

function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
    return reversedString;
  }
  

  const inputStr = "Hello, World!";
  const reversedStr = reverseString(inputStr);
  console.log(reversedStr); 



//   Problem 2

  function sumOfPositiveNumbers(numbersArray) {
    let sum = 0;
    for (let num of numbersArray) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  const numbers = [3, -2, 7, -1, 5, 9];
const positiveSum = sumOfPositiveNumbers(numbers);
console.log(positiveSum); 


// problem 3

function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let mostFrequentElement = arr[0];
    let maxFrequency = 0;
  
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mostFrequentElement = num;
      }
    }
  
    return mostFrequentElement;
  }
  
  // Test example
  const inputArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const myResult = findMostFrequentElement(inputArr);
  console.log(myResult); 

  
//   Problem 4

function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null; 
  }
  
  // Test example
  const inputArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const result = findTwoNumbersWithSum(inputArray, targetValue);
  console.log(result); 
  

//   problem 5

function simpleCalculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error("Cannot divide by zero.");
        }
        return num1 / num2;
      default:
        throw new Error("Invalid operator. Supported operators are +, -, *, and /.");
    }
  }
  
  // Test examples
  try {
    const additionResult = simpleCalculator(5, 3, '+');
    console.log(additionResult); 
  
    const subtractionResult = simpleCalculator(10, 4, '-');
    console.log(subtractionResult); 
  
    const multiplicationResult = simpleCalculator(6, 5, '*');
    console.log(multiplicationResult);
  
    const divisionResult = simpleCalculator(20, 5, '/');
    console.log(divisionResult);
  
   
    const divisionByZeroResult = simpleCalculator(10, 0, '/');
    console.log(divisionByZeroResult);
  
   
    const invalidOperatorResult = simpleCalculator(8, 2, '%');
    console.log(invalidOperatorResult); 
  } catch (error) {
    console.error(error.message);
  }

// problem 6

function generateRandomPassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
  
    return password;
  }
  

  const passwordLength = 12;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword); 
   

//   problem 7

function romanToInt(romanNumeral) {
    const romanToIntMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let total = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentSymbol = romanNumeral[i];
      const currentValue = romanToIntMap[currentSymbol];
      const nextSymbol = romanNumeral[i + 1];
      const nextValue = romanToIntMap[nextSymbol];
  
      if (nextValue > currentValue) {
        total -= currentValue;
      } else {
        total += currentValue;
      }
    }
  
    return total;
  }
  
  // Test examples
  console.log(romanToInt("IX"));    
  console.log(romanToInt("XXI"));   
  console.log(romanToInt("IV"));    
  console.log(romanToInt("XCIX"));  
  console.log(romanToInt("MMMCMXCIX"));
  