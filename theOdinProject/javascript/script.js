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

const playerOne = {
  name: 'tim',
  marker: 'X',
}

const playerTwo = {
  name: 'jenn',
  marker: 'O',
}

function printName(player) {
  console.log(player.name)
}

printName('lance')
console.log(playerOne.name)
console.log(playerTwo.name)

function gameOver(winningPlayer){
  console.log("Congratulations")
  console.log(winningPlayer + ' is the winner')
}

gameOver("lance")