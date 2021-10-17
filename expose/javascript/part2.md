Q1: 3
Q2: 150
Q3: 150
Q4: No output. No error. It returns the discounted price for each price in the arrary respectively. 
Q5: Error "Uncaught ReferenceError: i is not defined"
Q6: Error "Uncaught ReferenceError: discountedPrice is not defined"
Q7: 150
Q8: No output. No error. It returns the discounted price for each price in the arrary respectively. 
Q9: Error "Uncaught TypeError: Assignment to constant variable."
Q10: Error "Uncaught TypeError: Assignment to constant variable."
Q11: Error "Uncaught TypeError: Assignment to constant variable."
Q12: 
A: Accessing the value of the name property in the student object
**console.log(student.name);**
B: Accessing the value of the Grad Year property in the student object
**console.log(student['Grad Year']);**
C: Calling the function for the greeting property in the student object
**student.greeting();**
D: Accessing the name property of the object in the Favorite Teacher property in student
**console.log(student['Favorite Teacher'].name);**
E: Access the first index in the array of the courseLoad property of the student object
**console.log(student.courseLoad[0]);**

Q13:Arithmetic
A. ‘3’ + 2 = '32'
- since integers map to their exact map string representation, 
  and adding a number to a string is concatenation.

B. ‘3’ - 2 = 1
- since string automatically converts to a number, and arithemetic subtraction works.

C. 3 + null = 3
- since null is 0 in integer so 3+0=3

D. ‘3’ + null = '3null'
- since integers map to their exact map string representation

E. true + 3 = 4
- since true maps to 1 in integer so that 1+3=4

F. false + null = 0
- since false and null maps to 0 in integer so that 0+0=0

G. '3' + undefined = '3undefined'
- since integers map to their exact map string representation, addition becomes to concatenation

H. '3' - undefined = NaN
- since undefined becomes to NaN and 3 can't do subtraction with an undefined.


Q14:Comparison
A. ‘2’ > 1
- True, '2' maps to 2 so 2 is larger than 1

B. ‘2’ < ‘12’
- False. 
  Comparing the first character of both strings, string 2 is larger than string 1.

C. 2 == ‘2’
- True, string 2 becomes to number 2 so that they are equal.

D. 2 === ‘2’
- False, "===" is a strict equality operator which checks the equality without type conversion.
Without changing string 2 to number 2, we can't compare them.

E. true == 2
- False, true maps to 1 and then 1 is not equal to 2

F. true === Boolean(2)
- True, Boolean(2) itself is the same type as true 

Q15: Explain the difference between the == and === operators.
- == is equality operator of different types of data are converted to numbers.
- === is a a strict equality operator which checks the equality without type conversion.


Q16: Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.
```
for(let property in statistic){
    if(property[0] == 'r' || statistic[property] %2 == 1){
        console.log(`${property}: ${statistic[property]}`);
    }
}
```
Output:
redCars: 21
blueCars: 45
raceCars: 5
rareCars: 2

Q17: [2, 4, 6]
arr[1,2,3] is passed to function modifyArray first. By using the callback function doSomething, we know that we call doSomething inside the for loop of modifyArray function for each element in the given array.
Callback is different from a normal "calling a function inside a function" as we can modify which callback function we pass as an argument.

Q18: As shown in part2-question18.js

Q19: 
1
4
3
2
 