// let name = "Mohit";
// let age = 27;
// let isStudent = true;
// let a = 2;
// let b = 3;

// // str method
// //const str=name.length
// //  console.log(str);

// /* const str=name.toLowerCase()
//   console.log(str);


// const str=name.slice(2)
//     console.log(str);


// const str= name.charAt(10);
//     console.log(str);

// const str= name.includes("Ja");
//     console.log(str);

// const str= name.indexof("");
//     console.log(str);

// console.log(name.lastIndexof("h"));

// console.log(name.replaceAll("h","H"));

// const str=name.split(" ");
//     console.log(str);

// const str= name.padEnd(1,"0");
//     console.log(str);

// console.log('My name is ${name} and my age is ${age}');

// console.log(${age}+${name});

// console.log(`${age} ${name}`);

// console.log(Number(name)+b);

// console.log(name.trimEnd());

// console.log(name.trimStart());

// console.log(name.valueOf());

// alert, prompt, operators,conditions, if else, switch, 

// let marks=Number(prompt("Enter the student percentage"));

// if(marks>=90){
//     console.log("Grade: A+");
// }
// else if(marks>=85){
//     console.log("Grade: A");
// }
// else if(marks>=75){
//     console.log("Grade: B+");
// }
// else if(marks>=65){
//     console.log("Grade: B");
// }
// else if(marks>=55){
//     console.log("Grade:C+");
// }
// else if(marks>=45){
//     console.log("Grade: C");
// }
// else if(marks>=32){
//     console.log("Grade:D");
// }
// else{
//     console.log("Fail");
// }


// console.log(marks >=90? "A+":marks>=85? "A":marks>=75? "B+" :"F")

// for(let i=10; i>=0;i--){
//     console.log(i);
// }
   

// function arithmetic(a,b,operator){
//     switch(operator){
//         case "+":s
//             return a+b;
//         case '-':
//             return a-b;
//         case '*':
//             return a*b;
//         case '/':
//             return a/b;
//         default:
//             return "Invalid operator";
//     }
// }
// console.log(arithmetic(2,3,"+"));

// const a= (a,b)=>{
//     return a+b;
// }
// console.log(a(5,5));

// const arithmetic = (a, b, operator) => {
//     switch (operator) {
//         case '+': return a + b;
//         case '-': return a - b;
//         case '*': return a * b;
//         case '/': return a / b;
//         default: return "Invalid operator";
//     }
// };
// console.log(arithmetic(2,3,"+"));

// const isEven = (num) => num % 2 === 0 ? `${num} is Even` : `Given ${num} is Odd`;

// console.log(isEven(7)); // "Even"
// console.log(isEven(8)); // "Odd"

// let num=[1,2,3,4,5];
// console.log(num[0]);
// console.log(num.length);
// console.log(num.push(6));
// console.log(num.pop(5));
// console.log(num.slice(1,3));
// console.log(num.unshift(2,3));
// console.log(num.splice(0,9,8,0));
// console.log(num.map);

// let num=4.7;

// console.log(Math.pow(num,2));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.abs(num));

// console.log(Math.floor(Math.random()*10+1))

// let cards=['a','2','3','4','5','6','7','8','9','k'];

// const random_cards=cards[Math.floor(Math.random()*cards.length)];
// console.log(random_cards);

// // guessing ga
// me
// let retry=3;
// let num=Math.floor(Math.random()*10+1);
// let guess=prompt("Guess a number between 1 to 10");


// let fruits=['apple','Mango','papaya','banana'];
// let newfruits=fruits;
// let checkfruits=[...fruits];

// newfruits.push("pineapple");
// console.log(fruits)
// console.log(newfruits)
// console.log(checkfruits)
// console.log(newfruits == fruits)
// console.log(fruits==checkfruits)
// */
// //primitive le value matra copy garxa non primitive le chai address and reference dubai copy garxa
// // let obj ={
// //     name: "Mohit",
// //     age:27,
// //     isStudent: true,
// //     address: {
// //         city:"Butwal",
// //         state:"Lumbini",
// //         country:"Nepal"
// //     }

// // }
// // // obj.name="Rohit"
// // // console.log(Object.keys(obj))
// // // console.log(Object.entries(obj))
// // // console.log(obj)
// // // let obj2 = {...obj};
// // // obj2.name="Rahul";
// // // console.log(obj2);
// // // console.log(obj);

// // // let obj3 = structuredClone(obj);

// // // obj3.address.city="Shankhamul";
// // // console.log(obj3);
// // // console.log(obj);

// // // const{name, age}=obj;
// // // console.log(name);
// // // console.log(age);

// // //     greet: function(){
// // //     console.log(`Hello World`);
// // //     }
// // // }
// // // obj.greet();

// let students=[{
//     name:"Mohit",
//     age:27,
//     isStudent: false,
//     marks: 90
// },
// {
//     name:"Rohit",
//     age:20,
//     isStudent: true,
//     marks: 90
// },
// {
//     name:"Tohit",
//     age:21,
//     isStudent: true,
//     marks: 60
// }];

// students.forEach(student => {
//     if(student.isStudent===true){
//         console.log(student.name)
//     }
// });
// // for(let i=1;i<10;i++){
// //     console.log(i);
// // }

// // function arthmetic(a,b,operator){
// //    switch(operator){
// //         case'+':return a+b;
// //         case'-': return a-b;
// //         case'*': return a*b;
// //         case'/': return a/b;
// //         case'%'||'mod': return a%b;
// //         default: return "Invalid Operator";
// //    }  
// // }

// // console.log(arthmetic(1,3,"/"))

// // let num = [1,2,3,4,5]
// // const xy = num.filter(checkEven);
// // function  checkEven(num){
// //     return num%2==0;
// // }
// // console.log(xy.map);
// // console.log(xy);

// // let number=[1,2,3,4,5]

// // const zy= num.filter(item => item % 2 == 0).map(item => item * 2)
// // console.log(zy);
// let fruits= ['apple','banana', 'mango', 'cherry']
// // fruits.push("grapes");
// // console.log(fruits);
// // fruits.splice(3,0,"Potato","Oranges",'kiwi');
// // console.log(fruits);

// // const longestFruit = fruits.reduce((longest, current) => {
// //   return current.length > longest.length ? current : longest;
// // });

// // console.log(longestFruit);
// let users=[{
//     name:"Mohit",
//     age:27,
//     isStudent: false,
//     marks: 90
// },
// {
//     name:"Rohit",
//     age:20,
//     isStudent: true,
//     marks: 90
// },
// {
//     name:"Tohit",
//     age:21,
//     isStudent: true,
//     marks: 60
// }];
// let StudentUser= users.filter((student) => student.isStudent).map(student)=> student.name)
// let StudentUser= users.filter((student)=> student)

//scopes, closure and DOM
//global scope
// function greet(){
//     let name="Mohit"
//     console.log("Hello" + " "+name)

// }
// //console.log(name)
// greet();

//Block scope
// if (1>5){
//     let name="Mohit"
//     console.log("Hello"+" "+name)
// }
// else{
//     let name="Rohit"
//     console.log("Hello"+" "+name)
// }

// function Outer(){
//     let name="John"
//     return function Inner(){
//         console.log("Hello"+ " "+ name)
//     }
//     return Inner
// }
// Outer();

// function Counter(){
//     let count=0
//     function Increment(){
//         count ++
//         console.log(count)
//     }
//     return Increment
// }
// const increment = Counter()
// increment();
// increment();
// increment();

// function Counter(){
//     let count=5
//     function Decrement(){
//         count --
//         console.log(count)
//     }
//     return Decrement
// }
// const decrement = Counter()
// decrement();
// decrement();
// decrement();

//closure
// function Counter(){
//     let count = 0
//     function Increment(){
//         count ++
//         console.log(count)
//     }
//     function Decrement(){
//         count--
//         console.log(count)
//     }
//     return{
//         Increment,
//         Decrement
//     }
// }
// const counter = Counter();
// counter.Increment()
// counter.Increment()
// counter.Decrement()
// counter.Decrement()

// const obj ={
//     name:"John",
//     age: 30,
//     greet: function(){
//         setTimeout(()=>{
//             console.log("Hello"+ " "+this.name)
//         }, 1000)
//     }
// }
// obj.greet();
