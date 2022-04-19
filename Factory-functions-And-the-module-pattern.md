## Factory Functions and the Module Pattern

### What's wrong with constructors?

- Object constructors are one of about a million ways to start organizing your code
- they fairly common in the wild and are a fundamental building block of the javascript language.

however..

- there are many people who argue agains using constructors at all.
- their arguments boil down to the fact that if you aren't careful, it can be easy to introduce bugs into your code when using constructors.
- One of the biggest issues with the constructors is that while they look just like regular functions, they do not behave like regular functions at all.
- if you try to use a constructor functions without the `new` keyword,your program will not word expected, but it won't produce error messages that are easy to trace.
- the main takeaway is that while constructors aren't nececessarily evil, they aren't the only way and they may not be the best way either.

## Factory function

`factory function` pattern is similar to constructors, but instead of using new to create an object, factory functions simply set up and return the new object when you call the function.

```
const personFactory = (name, age) => {
  const sayHello = () => console.log(`hello my name is ${name}`)
  return { name, age, sayHello }
}

const jeff = personFactory('jeff', 30)

console.log(jeff.name)
jeff.sayHello()

```

here is the same thing created using the constructor pattern

```
const Person = function (name, age) {
  this.name = name
  this.age = age
  this.sayHello = function () {
    console.log(`hello my name is ${this.name}`)
  }
}

const lance = new Person('lance', 30)

console.log(lance.name)
lance.sayHello()

```

**note**<br>
**Object Shorthand**

`return {name: name, age: age, sayHello: sayHello};`

condense to:

`return {name, age, sayHello};`

## Scope and Closure

Scope - is the term that refers to where things like variables and functions can be used in your code.

## Private Variables and Functions

```
const FactoryFunction = string => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction('taco');

printString(); // ERROR!!
capitalizeString(); // ERROR!!
taco.capitalizeString(); // ERROR!!
taco.printString(); // this prints "----TACO----"
```

- the big deal here is that even though we cant access the `capitalizeString()` function, `printSting()` can.that is **closure.**

- the concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope.

- In the context of factory functions, closures allow us to create private variables and functions. Private functions are functions that are used in the workings of our objects that are not intended to be used elsewhere in our program.

- In other words, even though our objects might only do one or two things, we are free to split our functions up as much as we want ( allowing for cleaner, easier wat to read code) and only export the functions that the rest of the program is going to use.

- The concept of private functions is very useful and should be used as often as is possible.

- For every bit of functionality that you need for your program, there are likely to be several supporting functions that do not need to be used in your program as a whole.

- tucking these away and making them inaccessible makes your code easier to refactor, easier to test, and easier to reason about for you and anyone else that wants to use your objects.

## Back to Factory Functions.

**Factory Functions**

- Factories are simply plain old javascript functions that return objects for us to use in our code.
- Using Factories is a powerful way to organize and contain the code you're writing.

```
const Player = (name, level) => {
 let health = level * 2
 const getLevel = () => level
 const getName = () => name
 const die = () => {
   console.log(`${name} died`)
 }

 const damage = (amount) => {
   health -= amount
   if (health <= 0) {
     die()
   }
 }

 const attack = (enemy) => {
   if (level < enemy.getLevel()) {
     damage(1)
     console.log(`${name} attacked ${enemy.getName()}`)
   }
   if (level >= enemy.getLevel()) {
     enemy.damage(1)
     console.log(`${name} attacked ${enemy.getName()}`)
   }
 }

 return { attack, damage, getLevel, getName }
}

const jimie = Player('jimie', 10);
const jimie2 = Player('jimie2', 10);
jimie.attack(jimie2);

```

## Inheritance with Factories

```
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return {sayName};
}

const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const {sayName} = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return {sayName, doSomethingNerdy};
}

const jeff = Nerd('jeff');

jeff.sayName(); //my name is jeff
jeff.doSomethingNerdy(); // nerd stuff
```

this pattern is great because it allows you to pick and choose which functions you want to include in your new object.

if you want to go ahead and lump all of another object, you can certainly do that as well with `Object.assign`.

```
const Nerd2 = (name) => {
 const prototype = Player(name);
 const doSomethingNerdy = () => console.log(`${name} does something nerdy`)
 return Object.assign({}, prototype, { doSomethingNerdy })
}

const jess = Nerd2('jess')
jess.sayName()
```

## **3 Different Kinds of Prototypal Inheritance : ES6+ Edition**
