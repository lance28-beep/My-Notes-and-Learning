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

const Player = (name) => {
  const sayName = () => console.log(`my name is ${name}`)
  return { sayName }
}

const Nerd = (name) => {
  const { sayName } = Player(name)
  const doSomethingNerdy = () => console.log(`${name} does something nerdy`)
  return { sayName, doSomethingNerdy }
}

const lance = Nerd('lance')
lance.sayName()


const Nerd2 = (name) => {
 const prototype = Player(name);
 const doSomethingNerdy = () => console.log(`${name} does something nerdy`)
 return Object.assign({}, prototype, { doSomethingNerdy })
}

const jess = Nerd2('jess')
jess.sayName()