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

// let x = Math.random();
// if (x > 0.5) {
//   alert("X je vece od 0.5, i iznosi: " + x);
// } else {
//   alert("X je manje od 0.5, i iznosi :" + x);
// }

///// Arrays

// const my_array = ["item1", "item2", "item3"];
// my_array[3] = "cetvrti item";
// my_array[4] = "peti item";
// my_array[5] = "sesti item";
// // document.writeln(my_array);
// // document.writeln("Duzina array-a je: " + my_array.length);
// // Izmena sadrzaja arraya

// my_array[0] = "The new item1";
// my_array[my_array.length - 1] = "The new sesti item";
// document.writeln(my_array);

// const my_array = [];
// my_array[0] = "The First item";
// my_array[1] = "The Second item";
// my_array[2] = "The Third item";
// my_array[3] = "The Fourth item";
// my_array[0] = "The new First item";
// my_array[my_array.length - 1] = "The new Last item";
// console.log(my_array);

// const info = ["Pavle Jovanovic", 40, "red"];
// // console.log(info);
// // document.writeln(info);
// info.push("Toyota Verso"); // dodaje na kraju novi element
// info.unshift("Human"); // dodaje na pocetku novi element
// console.log(info);
// document.writeln(info);
// info.pop(); // uklanja poslednji elelment
// info.shift(); // ukljanja prvi element
// console.log(info);
// document.writeln(info);

// Task

// With prompts, ask the user about their name, surname and age.
// Parse the age to int with the parseInt() method (converts string to the number if possible).
// Save that data into an array and show it in the console.

// let name = prompt("Tell me your name: ");
// let surname = prompt("Tell me your surname: ");
// let age = parseInt(prompt("Tell me your age: "));
// const my_array = [name, surname, age];
// console.log(my_array);
// console.log(my_array.toString());
// console.log(my_array.join(", - "));
// let string = my_array.join(" - ");
// console.log(string);
// const opetArray = string.split(" - ");
// console.log(opetArray);

// With prompts, ask the user about their name, surname and age.
// Create a one-element array for each of these properties.
// Concatenate all arrays and print the result in the console.

// let name = [prompt("Tell me your name: ")];
// let surname = [prompt("Tell me your surname: ")];
// let age = [parseInt(prompt("Tell me your age: "))];
// const result = [...name, ...surname, ...age];
// console.log(name, surname, age);
// console.log(result);

// With prompts, ask the user about three numbers.
// Create an array containing all of them.
// Delete the middle element and add the mean of the first
//  and the last element at the end of the array.

// let first = [parseInt(prompt("Tell me first number: "))];
// let seccond = [parseInt(prompt("Tell me seccond number: "))];
// let third = [parseInt(prompt("Tell me third number: "))];
// const result = [...first, ...seccond, ...third];
// result.splice(1, 1);
// let mid = [parseInt(first) + parseInt(third)] / 2;
// result.splice(2, 0, mid);
// console.log(result);

// const number1 = parseInt(prompt("What's the first number"));
// const number2 = parseInt(prompt("what's the second number?"));
// const number3 = parseInt(prompt("What's the third number"));
// let array = [number1, number2, number3];
// array.splice(1, 1);
// array.push((array[0], array[1]) / 2);
// console.log(array);

// iterator methods // forEach metoda, daje informacije o elementima u arrayu

// const numbers = [1, 2, 3, 4, 5, 6, "Pavle Jovanovic", 40, "red"];
// numbers.forEach(callback);
// function callback(value, index, array) {
//   return console.log("value: ", value, "index: ", index, "array", array);
// }

// Map() metoda, modifikuje elemente, cuva u novom arrayu

// const numbers = [1, 2, 3, 4, 5, 6];
// const newNumbers = numbers.map(myFunction);
// console.log(numbers); //[1, 2, 3, 4, 5, 6]
// console.log(newNumbers); //[2, 4, 6, 8, 10, 12]
// function myFunction(value) {
//   return value * 3000678;
// }

// filter metoda, vraca elemente samo ako ispunjava odredjene uslove

// const numbers = [1, 2, 3, 4, 5, 6];
// const even = numbers.filter(isEven);
// function isEven(value) {
//   return value % 2 == 0;
// }
// console.log(numbers); //[1, 2, 3, 4, 5, 6]
// console.log(even); //[2, 4, 6]

// activity

// const collors = prompt("Give me three colors: ");
// const collors1 = collors.toUpperCase();
// const colors2 = [collors1];
// console.log(colors2);

// Task

// The number x should only be visible if x is equal to or greater than 0 while being equal to or less than 0.5.
// If x isn’t between 0 and 1, you need to ask the user to pass the number again.
// If the new data is correct, the application behaves like now.
// However, if the new data is also incorrect, you should create an alert with the text
// “Your data is not correct!” and don’t show any other alert. You can use the parseFloat() method to parse the string to float number.

// let x = prompt("Please pass the number between 0 and 1", "0.5");
// if (x > 0.5 && x < 1) {
//   alert("Hello, it's nice to see you here.");
// } else if (x >= 0 && x <= 0.5) {
//   alert(x);
// } else if (x < 0 || x >= 1) {
//   parseFloat(prompt("Please pass the number between 0 and 1", "0.5"));
//   if (x < 0 || x >= 1) {
//     alert("Your data is not correct!");
//   }
// }
///////////// Task2

// For this task, create an array containing 10 names of vegetables.
// At least one vegetable name should have an even length.
// Using the iterator method, show the user an alert containing this name if the length of the vegetable name is even.

// const array = [
//   "apple",
//   "cherry",
//   "banana",
//   "mango",
//   "lime",
//   "watermellon",
//   "pear",
//   "passion fruit",
//   "orange",
//   "clementine",
// ];
// const array1 = array.filter(sameLenght);
// function sameLenght(element) {
//   return element.length === array[0].length;
// }
// console.log(array);
// console.log(array1);

////////////////
// For loop

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }
////// activity
//Create an array containing 10 values. Print all of them using the for-loop.

// let array = [
//   "apple10",
//   "cherry20",
//   "banana30",
//   "mango40",
//   "lime50",
//   "watermellon60",
//   "pear70",
//   "passion fruit80",
//   "orange90",
//   "clementine100",
// ];
// // for (i = 0; i < 10; i++) {
// //   console.log(array[i]);
// // }
// for (value of array) {
//   console.log(value);
// }
///////////////

/// the while Loop

// let manjeOdDeset = true;
// let i = 0;
// while (manjeOdDeset) {
//   i++;
//   if (i < 10) {
//     manjeOdDeset = true;
//   } else {
//     manjeOdDeset = false;
//   }
//   console.log(manjeOdDeset);
// }
