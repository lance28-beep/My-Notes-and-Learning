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

function Particle() {
  this.x = 100
  this.y = 99
}

Particle.prototype.show = function () {
  point(this.x, this.y)
}

var p = new Particle()
var v

function setup() {
  createCanvas(600, 300)
  p = new Particle()
  v = createVector(3, 4)
}

