// class Person {
//   talk(x) {
//     return x + ' is talking'
//   }
// }

// function Person2(x) {
//   this.x = x
//   this.talk = function () {
//     return x + ' is talking'
//   }
// }

// const me = new Person()
// const you = new Person()

// const me2 = new Person2('hello')

// console.log(me.talk('hello')) //Talking
// console.log(you.talk('hello')) //Talking

// console.log(me2.talk('hello')) //Talking

// const FactoryFunction = (string) => {
//   const capitalizeString = () => string.toUpperCase()
//   const printString = () => console.log(`----${capitalizeString()}----`)
//   return { printString, capitalizeString }
// }

// const taco = FactoryFunction('taco')

// // printString(); // ERROR!!
// // capitalizeString(); // ERROR!!
// // taco.capitalizeString(); // ERROR!!
// taco.printString() // this prints "----TACO----"
// taco.capitalizeString()

// console.log(taco.capitalizeString())const counterCreator = () => {

// const counterCreator = () => {
//   let count = 0
//   return () => {
//     console.log(count)
//     count++
//   }
// }

// const counter = counterCreator()

// const Player = (name, level) => {
//   let health = level * 2
//   const getLevel = () => level
//   const getName = () => name
//   const die = () => {
//     console.log(`${name} died`)
//   }

//   const damage = (amount) => {
//     health -= amount
//     if (health <= 0) {
//       die()
//     }
//   }

//   const attack = (enemy) => {
//     if(level < enemy.getLevel()){
//       damage(1);
//       console.log(`${name} attacked ${enemy.getName()}`);
//     }
//     if(level >= enemy.getLevel()){
//       enemy.damage(1);
//       console.log(`${name} attacked ${enemy.getName()}`);
//     }
//   }

//   return {attack,damage,getLevel,getName}
// }

// const player1 = Player('player1', 1)
// const player2 = Player('player2', 2)
// player1.attack(player2)
// console.log(player2.getLevel())
// console.log(player2.getName())

// const Person = (name) => {
//   const sayName = () => console.log(`my name is ${name}`)
//   return {sayName};
// }

// const Nerd = (name) => {
//   //simply create a person and null out the sayName function with
//   //destructuring assignment syntax!
//   const {sayName} = Person(name);
//   const doSomethingNerdy = () => console.log(`${name} does something nerdy`)
//   return {sayName, doSomethingNerdy}
// }

// const jeff = Nerd('jeff');
// jeff.sayName();
// jeff.doSomethingNerdy();

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }

// const firstCopy = Object.assign(target,...source);
// console.log(firstCopy)

// const Person = (name) => {
//   const sayName = () => console.log(`my name is ${name}`)
//   return { sayName }
// }
// const Nerd = (name) => {
//   const { sayName } = Person(name)
//   const doSomethingNerdy = () => console.log(`${name} does something nerdy`)
//   return { sayName, doSomethingNerdy }
// }

// const personFactory = (name, age) => {
//   const sayHello = () => console.log(`hello my name is ${name}`)
//   return { name, age, sayHello }
// }

// const jeff = personFactory('jeff', 30)

// console.log(jeff.name)
// jeff.sayHello()

// const Person = function (name, age) {
//   this.name = name
//   this.age = age
//   this.sayHello = function () {
//     console.log(`hello my name is ${this.name}`)
//   }
// }

// const lance = new Person('lance', 30)

// console.log(lance.name)
// lance.sayHello()

// const Player = (name, level) => {
//   let health = level * 2
//   const getLevel = () => level
//   const getName = () => name
//   const die = () => {
//     console.log(`${name} died`)
//   }

//   const damage = (amount) => {
//     health -= amount
//     if (health <= 0) {
//       die()
//     }
//   }

//   const attack = (enemy) => {
//     if (level < enemy.getLevel()) {
//       damage(1)
//       console.log(`${name} attacked ${enemy.getName()}`)
//     }
//     if (level >= enemy.getLevel()) {
//       enemy.damage(1)
//       console.log(`${name} attacked ${enemy.getName()}`)
//     }
//   }

//   return { attack, damage, getLevel, getName }
// }

// const jimie = Player('jimie', 10);
// const jimie2 = Player('jimie2', 10);
// jimie.attack(jimie2);

// const Player = (name) => {
//   const sayName = () => console.log(`my name is ${name}`)
//   return { sayName }
// }

// const Nerd = (name) => {
//   const { sayName } = Player(name)
//   const doSomethingNerdy = () => console.log(`${name} does something nerdy`)
//   return { sayName, doSomethingNerdy }
// }

// const lance = Nerd('lance')
// lance.sayName()

// const Nerd2 = (name) => {
//  const prototype = Player(name);
//  const doSomethingNerdy = () => console.log(`${name} does something nerdy`)
//  return Object.assign({}, prototype, { doSomethingNerdy })
// }

// const jess = Nerd2('jess')
// jess.sayName()

// const proto = {
//   sayName: function () {
//     console.log(`my name is ${this.name}`)
//   }
// }

// const george = Object.create(proto)
// george.name = 'george'
// george.sayName()

// mixin style
// const proto = {
//   sayName: function () {
//     console.log(`my name is ${this.name}`)
//   }
// }

// const george = Object.assign({},proto, { name: 'george' })
// george.sayName()

// const foo = Object.assign({
//   attrn: {},
//   sent: function (name, value) {
//     this.attrn[name] = value
//     this.trigger('change', {
//       name,
//       value,
//     })
//   },
//   get:function(name,value){
//     return this.attrn[name]
//   }
// }, Backbone.Events)

// class inheritance
// class Greeter {
//   constructor(name) {
//     this.name = name || 'world'
//   }
//   sayHello() {
//     return `Hello ${this.name}`
//   }
// }

// const george = new Greeter('george')
// const msg = george.sayHello()

// console.log(msg)

//Constructor functions
// function Greeter(name) {
//   this.name = name || 'world'
// }

// Greeter.prototype.sayHello = function () {
//   return `Hello ${this.name}`
// }

// const george = new Greeter('george')
// let georgeMsg = george.sayHello()
// console.log(georgeMsg)

// Factor Function
// const proto = {
//   hello: function () {
//     console.log(`Hello ${this.name}`)
//   },
// }

// const george = Object.assign(proto, { name: 'george' })

// george.hello()

// javascript closure
// const state = 'rabbit'

// function callMe(a) {
//   return `${a} ${state}`
// }
// console.log(callMe("lance"))

// function pureFun(a,b){
//   return a + b
// }

// for (var i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i)
//   }

//   setTimeout(log, 1000)
// }

// function outer() {
//   function inner() {}
// }

// const barker = (state) => ({
//   bark: () => console.log(`Woof, A am ${state} bark`),
// })

// const driver = (state) => ({
//   drive: () => (state.position = state.position + state.speed),
// })

// barker('karo').bark()

// console.log(driver('karo').drive())

// const murderRobotDog = (name) => {
//   let state = {
//     name,
//     speed: 100,
//     position: 0,
//   }
//   return Object.assign({}, barker(state), driver(state), killer(state))
// }

// murderRobotDog('Sniffers').bark()

// const course = {
//   name: 'Web Programming',
//   score: 85,
// }

// const grade = {
//   score: 92,
// }

// const finalResult = Object.assign({ teacher: 'lance' }, course, grade)
// const finalResult2 = { ...course, ...grade, teacher: 'lance' }

// console.log(finalResult)
// console.log(finalResult2)

// const calculator = (() => {
//   const add = (a, b) => a + b
//   const subtract = (a, b) => a - b
//   const multiply = (a, b) => a * b
//   const div = (a, b) => a / b
//   return { add, subtract, multiply, div }
// })()

// console.log(calculator.add(1, 2))
// console.log(calculator.multiply(1, 2))
// console.log(calculator.div(1, 2))
// console.log(calculator.subtract(1, 2))

// (function() {
//   'use strict'
//   //Your Code here
//   // All function and variables are scoped to this function.
// })()

// let myModule = (function () {
//   'use strict'

//   return {
//     publicMethod:function(){
//       console.log('publicMethod')
//     }
//   }
// })()

// // myModule.publicMethod()

// var myModule = (function () {
//   'use strict'

//   const _privateProperty = 'Hello World'
//   function _privateMethod() {
//     console.log(_privateProperty)
//   }

//   return {
//     publicMethod: function () {
//       _privateMethod()
//     }
//   }
// })();

// myModule.publicMethod();//outputs 'hello world'
// console.log(myModule._privateProperty)//is undefined protected by the module closure.
// myModule._privateMethod()//is undefined protected by the module closure.

// var myModule = (function () {
//   'use strict'

//   var _privateProperty = 'Hello World'
//   var publicProperty = 'I am a public property'

//   function _privateMethod() {
//     console.log(_privateProperty)
//   }

//   function publicMethod() {
//     _privateMethod()
//   }

//   return { publicMethod, publicProperty }
// })()

// myModule.publicMethod()
// console.log(myModule.publicProperty)
// console.log(myModule._privateProperty)
// myModule._privateMethod()

// const someModule = (function(){})()

// const Formatter = (function () {
//   console.log('start')
//   const log = (message) =>
//     console.log(`[${new Date().toISOString()}] ${message}`)
//   return { log }
// })()

// Formatter.log('Hello World')

// const Formatter = (function () {
//   console.log('start')
//   const log = (message) =>
//     console.log(`[${new Date().toISOString()}] ${message}`)
// })()


const Formatter = (function(){
  const log = (message) => console.log(`[${new Date().toISOString()}] ${message}`)

  const makeUpperCase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  }
  // return {makeUpperCase}
})()

console.log(Formatter.makeUpperCase("hello world"))