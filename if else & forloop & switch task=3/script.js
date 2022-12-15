// 1) if-else :

//1). check if a number is odd or even and print on console ?

// let num=20;
// if(num %2 === 0){
//     console.log("Number is even:"+(num));
// }else{
//     console.log("Number is odd:"+(num));
// }

//Q2).find the largest of two number 

// console.log("2.find the largest of two number.");

// let num1=30;
// let num2=15;
// if(num1 > num2){
//     console.log("number1 is greater than number2");
// }else{
//     console.log("number1 is less than number2");
// }

//Q3).perform arithmatic operations on two numbers.

//  console.log("3.perform arithmatic operations on two number.");
//  let a=+prompt("Enter the fisrt number");
//  let b=+prompt("Enter the second number");
//  let operator=prompt("Enter operator (+,-,*,/");
// if(operator == '+'){
//     console.log("Addtion of two number is:" +(a+b));
// }else if(operator == '-'){
//     console.log("Substraction of two number is:"+(a-b));
// }else if(operator == '*'){
//     console.log("Multiplication of two number is:"+(a*b));
// }else
// {
//     console.log("Divistion of two number is:"+(a/b));
// }


// for loop:

//Q1).write a js code to print numbers from 1 to 10.

//console.log(" 1.write a js code to print numbers from 1 to 10");
// console.log("print numbers from 1 to 20 ");
// for(let j=1;j<=10;j++){
//     console.log(j);
// }

//Q2).Write a js code to find the power of a number using for loop.

// function power(a,b){
//     let number=a;
// for(let i=1;i<=b;i++){
//     number*=a;
// }
// return number;
// }
// console.log(power(8,8));

//Q3). write a js code to print Even number.
//console.log("3.write a js code to print Even number");
// console.log("print Even number 1 to 10");
// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// switch :
//Q4).Create a simple calculator using switch statement.

 //1.accept two numbers from user 
 //2.disply the menu to user and accept the input as a sign (operator)
//menu =>
    //+ => addtion,
   //- => substraction
  //* => multiplication
 /// => divistion
 // % => mod 
 // ** => power

// 3.disply/write the output on the screen(eg.Addtion =45)


  console.log("Create a simple calculator using switch statement");
    let num1=+prompt("Enter the first number");
    let num2=+prompt("Enter the second number");

     let operator=prompt(`disply the menu to user and accept the input as a sign (operator)
         menu =>
                // + => addtion,
                // - => substraction
                //  * => multiplication
                //  / => divistion
                //  % => mod 
                //  ** => power`);
                 switch(operator){
                     case '+':
                         console.log("Addtion of two number is:"+ (num1+num2));
                         break;

                         case '-':
                            console.log("Substracrtion of two number is:"+ (num1-num2));
                            break;

                            case '*':
                                console.log("Multiplication of two number is:"+ (num1*num2));
                                break;

                                case '/':
                                    console.log("Divistion of two number is:"+ (num1/num2));
                                    break;

                                    case '%':
                                        console.log("Remainder of two number is:"+ (num1%num2));
                                        break;

                                        case '**':
                                            console.log("power of two number is:"+ (num1**num2));
                                            break;

                                            default:
                                                console.log("Your Invalid Operator");
                 }

                 
                 