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

let a = "Hello";
let b = "my";
let c = "preety";
let d = "World";
let e = a + " " + b + " " + c + " " + d;

let f =
  "I like this world so much. I enjoy myself in this world. World is great.";
let result = e.concat(". " + f);
document.writeln(result.toLowerCase());
let replacResult = result.replace(/world/gi, "city");
document.writeln(replacResult.toUpperCase());
