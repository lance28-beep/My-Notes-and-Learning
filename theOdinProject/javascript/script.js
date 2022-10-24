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

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = false
  this.info = function () {
    return `${title} by ${author} ${pages} pages, ${
      read ? 'read' : 'not read yet'
    }`
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R', 299, false)

console.log(theHobbit.info())
