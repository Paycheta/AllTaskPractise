// // var x = 55;
// // var X = "abc";
// // var _x = 1.2;
// // document.writeln(x);
// // document.writeln(X);
// // document.writeln(_x);

// // let a = 5;
// // let b = 8;
// // let c = a + b;
// // document.writeln(c);

// let x = 15;
// let name = "John";
// let result = name + x;
// document.writeln(result);

// let x1 = 15;
// let y = 5;
// let name1 = "John";
// let result1 = x + y + name;
// let result2 = name + x + y;
// document.writeln(result1);
// document.writeln(result2);

// let x2 = 55;
// let x3 = x2 / "text";
// let x4 = x / 0;
// document.writeln(x3);
// document.writeln(x4);

// let a = 8;
// a += 8 - 7;
// document.writeln(a);

// The task
// Part 1
// We installed a text editor for web development in this lesson and created our first web application. The task for this lesson is very similar to what we have already done. You are asked to create a new website that shows three sentences.
// The first sentence says, ‘I am sentence number 1 and I was printed without JS.’ It should be displayed without using JavaScript.
// The second sentence says, ‘I am sentence number 2 and I was printed with JS from the HTML file.’ It should be displayed with JavaScript but within an HTML file.
// The third sentence says, ‘I am sentence number 3 and I was printed with JS from a js file.’ It should be displayed with the use of a separate JavaScript file.
// All three sentences need to be displayed on the same page. When you open your HTML file in the browser, what is the order of the sentences?
// To complete this task, you are asked to perform desktop research to find out why sentences have been displayed in a given order and communicate your findings in a short report written in a Word document.
// Your report should contain print screens of your code, print screens of your website, information about files that were created in Visual Studio Code and other relevant information.
// Sentence order depends on the order of the sentences in the HTML source code. The sentences earlier in the source code will also be earlier on the website. It doesn’t depend on how we add them.

// let a = "I am sentence number 3 and I was printed with JS from a js file.";
// document.writeln(a);

// let a = "a" + 1 + 2 + 1.2;
// let b = 1 + 1.2 + "a" + 1;
// let c = "" == 0;
// let d = !(1 + 2 == 3) || !(2 > 4);
// let e = 0.1 + 0.2;
// let f = 9 % 2 ** 3;
// let g = -1 / 0;
// document.write(g);

// let a = "Hello";
// let b = "my";
// let c = "preety";
// let d = "World";
// let e = a + " " + b + " " + c + " " + d;

// let f =
//   "I like this world so much. I enjoy myself in this world. World is great.";
// let result = e.concat(". " + f);
// document.writeln(result.toLowerCase());
// let replacResult = result.replace(/world/gi, "city");
// document.writeln(replacResult.toUpperCase());
// let searchString = result.indexOf("world");
// document.writeln(searchString);
// let x = 4;
// if (x > 10) {
//   document.writeln("Hi Pavle");
// } else if (x == 5) {
//   document.writeln("Bye Pavle");
// } else if (x < 2) {
//   document.writeln("How are you Pavle");
// } else {
//   document.writeln("Who are you?");
// }

// let a = 1;
// let b = -3;
// if (a > 0) {
//   if (b > 0) {
//     document.writeln(b);
//   } else {
//     document.writeln(a);
//   }
// }
// let x = 6;
// switch (x) {
//   case 1:
//     document.writeln("jedan");
//     break;
//   case 2:
//     document.writeln("dva");
//     break;
//   case 3:
//     document.writeln("tri");
//     break;
//   default:
//     document.writeln("neki drugi broj");
//     break;
// }

// let a = 10;
// let b = 20;
// let c = a > b ? a : b;
// document.writeln(c);

// Task
// resultText1: favourite book is “Harry Potter”
// resultText2: My book is love.
// resultText3: My book is “HARRY POTTER”.
// resultText4: potter harry

// let text = 'My favourite book is "Harry Potter". I love this book so much.';

// let result1 = text.slice(3, 35);
// document.writeln(result1);
// let result2 = text.slice(0, 2) + text.slice(12, 20) + text.slice(38, 43) + ".";
// document.writeln(result2);
// let text1 = text.slice(20, 35);
// let result3 = `${text.slice(0, 2) + text.slice(12, 20) + text1.toUpperCase()}.`;
// document.writeln(result3);
// let text2 = text1.toLowerCase();
// let result4 = text2.slice(8, 14) + " " + text2.slice(2, 7);
// document.writeln(result4);

// let sender = prompt("Unesite posiljaoca: a, b ili c");
// let a = "Djole";
// let b = "Blagic";
// let c = "Kum";

// if (sender == "a") {
//   document.write(`Hvala na cestitkama ${a}.`);
// } else if (sender == "b") {
//   document.write(`Hvala na cestitkama ${b}u.`);
// } else {
//   document.write(`Hvala na cestitkama ${c}e.`);
// }
// Alerts

let x = Math.random();
if (x > 0.5) {
  alert("X je vece od 0.5, i iznosi: " + x);
} else {
  alert("X je manje od 0.5, i iznosi :" + x);
}
