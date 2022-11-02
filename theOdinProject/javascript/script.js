// //object literal
// const myObject = {
//   property: 'Value!',
//   otherProperty: 77,
//   'obnoxious property': function () {
//     return 'alert'
//   },
// }

// console.log(myObject.property)
// console.log(myObject['property'])

// Objects as a Design Pattern

// const playerOne = {
//   name: 'tim',
//   marker: 'X',
// }

// const playerTwo = {
//   name: 'jenn',
//   marker: 'O',
// }

// function printName(player) {
//   console.log(player.name)
// }

// printName('lance')
// console.log(playerOne.name)
// console.log(playerTwo.name)

// function gameOver(winningPlayer){
//   console.log("Congratulations")
//   console.log(winningPlayer + ' is the winner')
// }

// gameOver("lance")

// Object Constructors

// function Player(name, marker) {
//   this.name = name
//   this.marker = marker
// }

// const player = new Player ('steve', 'X')
// console.log(player.name)

// function PlayerOne(name, maker){
//   this.name = name
//   this.maker = maker
//   this.sayName = function(){
//     return name
//   }
// }

// const player1 = new PlayerOne('steve', 'x')
// const player2 = new PlayerOne('also steve', 'o')

// console.log(player1.sayName())
// console.log(player2.sayName())

// Exercise

// function Book(title, author, pages, read) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.read = false
//   this.info = function () {
//     return `${title} by ${author} ${pages} pages, ${
//       read ? 'read' : 'not read yet'
//     }`
//   }
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R', 299, false)

// console.log(theHobbit.info())

// // The Prototype
// function Student(name, grade){
//   this.name = name
//   this.grade = grade
// }

// Student.prototype.sayName = function(){
//   console.log(this.name)
// }

// Student.prototype.goToProm = function(){
//   console.log("Eh.. go to prom?")
// }

// const lance = new Student("lance","college")

// console.log(lance.goToProm())

//Recemmended Method for prototypal inheritance
// Object.create - simply returns a new object with the specified prototype
// and any additional properties you want to add

// function Student() {}

// Student.prototype.sayName = function () {
//   console.log(this.name)
// }

// Student.prototype.SayGrade = function () {
//   console.log(this.grade)
// }

// function EightGrader(name) {
//   this.name = name
//   this.grade = 8
// }

// EightGrader.prototype = Object.create(Student.prototype)

// const carl = new EightGrader('carl')

// carl.sayName()
// carl.SayGrade()

// function Particle() {
//   this.x = 100
//   this.y = 99
// }

// Particle.prototype.show = function () {
//   point(this.x, this.y)
// }

// var p = new Particle()
// var v

// function setup() {
//   createCanvas(600, 300)
//   p = new Particle()
//   v = createVector(3, 4)
// }

// Factory Functions
// const personFactory = (name, age) => {
//   const sayHello = () => 'Hello!'
//   return { name, age, sayHello }
// }

// const jeff = personFactory('jeff', 27)

// console.log(jeff.name)
// console.log(jeff.sayHello())

// const Person = function (name, age) {
//   this.sayHello = () => 'hello!'
//   this.name = name
//   this.age = age
// }

// const janet = new Person('janet', 27)

// console.log(janet.name)
// console.log(janet.sayHello())

// const name = 'lance'
// const color = 'red'
// const number = 34
// const food = 'rice'

// console.log(name, color, number, food)
// console.log({ name, color, number, food })

// Scope and Closure

// let a = 17

// const func = (x) => {
//   let a = x
// }

// func(99)

// console.log(a)

//Private Variables and Functions

// const FactoryFunction = (string) => {
//   const capitalizeString = () => string.toUpperCase()
//   const printString = () => console.log(`-------${capitalizeString()}-------`)
//   return { printString }
// }

// const taco = FactoryFunction('taco')

// taco.printString()

// const counterCreator = () => {
//   let count = 0
//   return () => {
//     console.log(count)
//     count++
//   }
// }

// const counter = counterCreator();

// counter()
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()

//factory functions

// Player = (name, level) => {
//   let health = level * 2
//   const getLevel = () => level
//   const getName = () => name
//   const die = () => {
//     //uh oh
//   }
//   const damage = (x) => {
//     health -= x
//     if (health <= 0) {
//       die()
//     }
//   }

//   const attack = (enemy) => {
//     if (level < enemy.getLevel()) {
//       damage(1)
//       console.log(`${enemy.getName()} has damaged ${name}`)
//     }
//     if (level >= enemy.getLevel()) {
//       enemy.damage(1)
//       console.log(`${name} has damaged ${enemy.getName()}`)
//     }
//   }

//   return { attack, damage, getLevel, getName }
// }

// const jimie = Player('jim', 10)
// const badGuy = Player('jeff', 5)

// jimie.attack(badGuy)
// badGuy.attack(jimie)
// badGuy.damage(10)
// console.log(badGuy.getLevel())
// console.log(jimie.getLevel())
// console.log(jimie.getName())
// jimie.health -= 1000

// inheritance with factories

// const Person = (name) => {
//   const sayName = () => console.log(`my name is ${name}`)
//   return { sayName }
// }

// const Nerd = (name) => {
//   //simply create a person and pull out the sayName function with destructuring assignment systax!
//   const { sayName } = Person(name)
//   const doSomethingNerdy = () => console.log('nerd stuff')
//   return { sayName, doSomethingNerdy }
// }

// const jeff = Nerd('jeff')

// jeff.sayName()
// jeff.doSomethingNerdy()

// The Module Pattern
// const calculator = (() => {
//   const add = (a, b) => a + b
//   const sub = (a, b) => a - b
//   const mul = (a, b) => a * b
//   const div = (a, b) => a / b
//   return { add, sub, mul, div }
// })()
// console.log(calculator.add(5, 5))
// console.log(calculator.sub(5, 5))
// console.log(calculator.mul(5, 5))
// console.log(calculator.div(5, 5))

//   (function() {
//     console.log('hello world')
//   }
// )()

// ;(() => {
//   'use strict'
//   console.log('hello world')
// })()
// //factory function
// const Player = (name, age, gender) => {
//   return { name, age, gender }
// }

// //constructor function
// const PlayerOne = function (name, age, gender) {
//   this.name = name
//   this.age = age
//   this.gender = gender
// }

// // class function
// class PlayerTwo {
//   constructor(name, age, gender) {
//     this.name = name
//     this.age = age
//     this.gender = gender
//   }
// }

// const Lance = Player('lance', 27, 'male')
// const Jess = new PlayerOne('jess', 27, 'female')
// const May = new PlayerTwo("may",27,"female")
// console.log(Lance.name)
// console.log(Jess.name)
// console.log(May.name)

// Property getters and setters
// let user = {
//   name: 'lance',
//   surname: 'valle',
//   fullNames: function () {
//     return `${this.name} ${this.surname}`
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`
//   },

//   set fullName(value) {
//     ;[this.name, this.surname] = value.split(' ')
//   },
// }

// console.log(user.fullName)
// console.log(user.fullNames())

// user.fullName = 'RosaMay Pano'
// console.log(user.fullName)
// console.log(user.name)
// console.log(user.surname)

// for (let key in user)
// console.log(key)

// let user = {
//   name: 'John',
//   surname: 'Smith',
// }

// Object.defineProperty(user, 'fullName', {
//   get() {
//     return `${this.name} ${this.surname}`
//   },

//   set(value) {
//     ;[this.name, this.surname] = value.split(' ')
//   },
// })

// user.fullName = 'Lance Valle'
// for (let i in user) console.log(i)

// console.log(user.name)

// Object.defineProperty({},'prop',{
//   get(){
//     return 1
//   },
//   value : 2
// })

// let user = {
//   get name() {
//     return this._name
//   },

//   set name(value) {
//     if (value.length < 4) {
//       console.log('Name is too short, need at least 4 charactes')
//       return
//     }
//     this._name = value
//   },
// }

// user.name = 'Pete'
// console.log(user.name)
// console.log(user._name)
// user.name = 'fs'
// console.log(user.name)
// console.log(user._name)

// const person = {
//   firstName: 'Lance',
//   lastName: 'Valle',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   },
//   set fullName(value) {
//     ;[this.firstName, this.lastName] = value.split(' ')
//   },
// }

// //getters => access properties
// //setters => change (mutate) them
// console.log(`${person.firstName} ${person.lastName}`)
// person.fullName = 'RosaMay Pano'
// console.log(person.fullName)

// function User(name, birthday) {
//   this.name = name
//   this.birthday = birthday

//   //age is calculated from the current date and birthday
//   Object.defineProperty(this, 'age', {
//     get() {
//       let todayYear = new Date().getFullYear()
//       return todayYear - this.birthday.getFullYear()
//     },
//   })
// }

// let John = new User('John', new Date(1992, 6, 1))

// console.log(John.birthday)
// console.log(John.age)
// console.log(new Date().getFullYear())

//Class Syntax
// class MyClass {
//   constructor(){....}
//   method1(){...}
//   method2(){...}
//   method3(){...}
// }

// class User {
//   constructor(name) {
//     this.name = name
//   }

//   sayHi() {
//     return this.name
//   }
// }

// let user = new User('Jhon')
// console.log(user.sayHi())

//rewriting class user in pure functions

// // 1. Create constructor function
// function User(name) {
//   this.name = name

// }
// // a function prototype has "constructor" property by default,
// // so we dont need to create it

// //2. Add the method to prototype
// User.prototype.sayHi = function(){
//   console.log(this.name)
// }

// //Usage:
// let user = new User("John")
// user.sayHi()

// class User {
//   constructor() {}
// }

// console.log(typeof User)
// console.log(User)

// let User = class {
//   sayHi(){
//     console.log("Hello")
//   }
// }

// new User().sayHi()

// function makeClass (phrase){
//   //declare a class and return it
//   return class{
//     sayHi(){
//       console.log(phrase)
//     }
//   }
// }
// //Create a new Class
// let User = makeClass("hello")
// new User().sayHi()

// class User {
//   constructor(name) {
//     // invokes the setter
//     this.name = name
//   }
//   get name() {
//     return this._name
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log('Name is too short. ')
//       return
//     }
//     this._name = value
//   }
// }

// let user = new User("hon")
// console.log(user.name)

// class User {
//   ['say' + 'hi'](){
//     console.log("Hello")
//   }
// }

// new User().sayhi()

// class User {
//   name = "John";
//   sayHi(){
//     console.log(`Hello, ${this.name}`)
//   }
// }

// new User().sayHi()

// class Rectangle {
//   constructor(height, width) {
//     this.height = height
//     this.width = width
//   }
// }

// const p = new Rectangle()
// class Rectangle {}

// console.log(p)

let Rectangle = class {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}

console.log(Rectangle.name)

Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}

console.log(Rectangle.name)

