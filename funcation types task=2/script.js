
      // 1)function without parameters

    //1)
    // function  message(){
    //     console.log("Hello");
    // }
    // message();

   //2)
    // function add(){
    //    let a=10,b=50;
    //     console.log("addtion of two number is:" +(a+b));
    // }
    // add();

   //3)
    // function add(){
    //     let x=2,y=10;
    //     console.log("multiplication of two number is:"+(x+y));
    // }
    // add();
   //4)
//       function sub(){
//           let num1=Number(prompt("Enter the first number"));
//           let num2=Number(prompt("Enter the second number"));
//           console.log("Substraction of two number is:"+(num1-num2));
//       }
//       sub();

//    //5)
//     function multi(){
//         let num1=+(prompt("Enter  the first number"));
//         let num2=+(prompt("Enter the second number"));
//         console.log(`Divistion of Two number is ${num1*num2}`);
//     }
//     multi();

//    //   ------------------------------------------------------------------------------------

//     //Q2)function with parameters
//     1
//     function message(msg){
//         console.log("Print the message:"+(msg));
//     }
//     message("hello sameer");

//    //  2
//    function add(num1,num2){
//        console.log("Addtion of two number is: "+(num1+num2));
//    }
//    add(2,4);

//    //  3
//      function sub(num1,num2){
//       console.log("Substraction of two number is:" +(num1-num2));
//      }
//       div(60,10);

//    //  4
//    function multi(a,b){
//        console.log("Multiplication of two number is: "+(a*b));
//    }
//    multi(45,40);
   
//    //  5
//    function div(num1,num2){
//        console.log("Divistion of two number is:" +(num1/num2));
//    }
//    div(25,10);

// // ---------------------------------------------------------------------------------------
// //Q3) default parameters 
// // without parameters
//     function  defaultfun(){
//        let msg="hello world";
//        console.log("Print the message :" +msg);
//     }
//     defaultfun();

// //     // with parameters
//     function  default_add(a,b=2){
//         console.log(`Print addtion of default parameter: ${a+b}`);
//      }
//      default_add(50);

// -----------------------------------------------------------------------------------

// 4.) 1)function without parameters  with return statement<br>
// function  parameters with return statement

// 1
// function message(){
//     let msg=prompt("enter the message");
//     return msg;
// }
// console.log("print the message:" +(message()));
//   2
// function add(){
//     let num1=1,num2=2;
//     return num1+num2; 
// }
// let sum=add();
// console.log("Addtion of Two number is:"+(sum));


//   3
// function multi(num1,num2){
//     return num1*num2; 
// }
// let multiplication=multi(50,10);
// console.log("Multiplication two number is:" +(multiplication));

//  4
// function sub(a,b){
//     return a-b; 
// }
// console.log("Substraction two number is:" +(sub(10,76)));
// ----------------------------------------------------------------------------


// ANONYMOUS FUNCTION (function Expression)

// 1
//   const message =function(){
//       let msg="hello world";
//       console.log("print the message:"+msg);
//   }
//   message();

//2
//   const add= function(){
//     let num1=5,num2=2;
//     return num1+num2;
// }
// console.log("Addtion of Two number is:"+(add()));

//3
// const  multi= function(){
//     let num1=+(prompt("enter the first number"));
//     let num2=+(prompt("enter the second number"));
//     return num1*num2;
// }
// console.log("multiplication of Two number is:"+(multi()));

// 4
// const  div= function(a,b){
//     return a/b;
// }
// let Divistion=div(5,13);
// console.log("Divistion of Two number is:"+(Divistion));


// 5
// const  sub= function(a,b){
//     return a-b;
// }
// console.log(`Substraction of Two number is:${sub(37,13)}`);

// -----------------------------------------------------------------------

// FAT ARROW FUNCTION 
// 1)parameterized arrow function 

//  1

// const sum =(a,b)=>{
//console.log("Addtion of two number is:" +(a+b));
//};
//sum(34,55);

// 2)arrow function(without parameters)
//sub();

// 3)arrow function(with parameters and return statement)
// const multi = (a,b) =>{
//   return a*b;
// }
// let multiplication=multi(15,10);
// console.log(`Multiplication of two number is:${multiplication}`);

// 4)arrow function(without curly braces)
// const message =(msg) => console.log("Print the message:"+(msg));
// message("hello sameer");

// // 5)arrow function(without parenthesis)
// const print_msg =msg => console.log("Print the message:"+(msg));
// print_msg("How are you sameer");


// -------------------------------------------------------------

// 2)IIFE(FUNCTION Expression) 
// Immediately involed function Expression
//  1
// ((msg)=>{
// console.log("print the msg:"+(msg));
// })("hii");

//  2
// ((a,b)=>console.log("Mutiplication of two number is:"+(a*b)))(14,10);

//  3
// (()=>{
//     let no=1;
//     console.log("Roll number of student is:"+no);
// })();

//  4
// ((studname)=>{
//     console.log(`student name is:${studname}`);
// })("gaurav");

//  5
// (()=>{ 
//     let courseName="Mern Stack developer";
//     console.log(`Course name is:${courseName}`);
// })();

// -------------------------------------------------------------

// function with  three parameters 
function addsum(num1=10,num2=10,num3=12){
    if(typeof num1!="number"){
        // return "Please Enter a valid Number: + (num1)";
        alert("Please enter the valid number");
    }
    console.log("Addtion of Three Numbers is:" +(num1+num2+num3));
}
addsum();

