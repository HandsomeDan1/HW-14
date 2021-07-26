'use strict';

//1) Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».
// function hello1(text) {
//      return console.log(text)
// }
// hello1('Привет, JavaScript!');

//2) Напишите функцию hello2(), которая при вызове будет принимать переменную name
//(например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
//В случае отсутствующего аргумента выводить «Привет, гость»
// const name = prompt('Введите ваше имя');
// function hello2(text) {
//      if(text){
//           return `Привет ${text}`
//      }
//           return `Привет гость`
// }
// console.log(hello2(name));

//3) Напишите функцию mul(n,m), которая принимает два аргумента и возвращает
//произведение этих аргументов. Проверьте ее работу.
// const mul = (n,m) =>{
//      return n / m
// };
// console.log(mul(50,5));

//4) Создайте глобальную переменную arr (должен быть массив). Напишите функцию
//которая будет записывать в этот массив то, что ввел пользователь.
// const arr = [];
// const userInput = prompt('Enter something');
// function arrayRecord(text) {
//    const arr = [];
//    arr.push(text);
//    return arr;
// }
// arrayRecord(userInput);
// console.log(arrayRecord(userInput));