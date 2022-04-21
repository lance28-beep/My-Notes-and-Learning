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

- **Delegate Prototype** - shared methods.

```
const proto = {
  sayName: function () {
    console.log(`my name is ${this.name}`)
  }
}

const george = Object.create(proto)
george.name = 'george'
george.sayName()

```

- **Cloning / Concatenation** - Greate for default state, mixins.

```
// mixin style
const proto = {
  sayName: function () {
    console.log(`my name is ${this.name}`)
  }
}

const george = Object.assign({},proto, { name: 'george' })
george.sayName()
```

- Anything can emit backbone events

```
const foo = Object.assign({
  attrn: {},
  sent: function (name, value) {
    this.attrn[name] = value
    this.trigger('change', {
      name,
      value,
    })
  },
  get:function(name,value){
    return this.attrn[name]
  }
}, Backbone.Events)
```

- **Functional inheritance** - Great for encapsulation / privacy. Functional mixins

## Function prototypes not object prototypes.

**can replace :**

- - Constructors
- - Init Functions
- - super()

## Use Factory Functions

- like constructors, but you dont need `new` or `this`.
- mix and match all three types of prototypes.
- use `.call()` and `apply.()` to swap out source prototypes at instantiation time.

[continue with the blog...]

## Delegation / Differential Inheritance

- a delegate prototype is an object that serves as a base for another object.
- Method delegation can preserve memory resources because you only need one copy of each method to be shared by all instances.

**class inheritance**

```
// class inheritance
class Greeter {
  constructor(name) {
    this.name = name || 'world'
  }
  sayHello() {
    return `Hello ${this.name}`
  }
}

const george = new Greeter('george')
const msg = george.sayHello()

console.log(msg)
```

- due to many problems associated with class inheritance, and the temptation to extend classes, I dont recommend this technique.

**constructor functions**

```
//Constructor functions
function Greeter(name) {
  this.name = name || 'world'
}

Greeter.prototype.sayHello = function () {
  return `Hello ${this.name}`
}

const george = new Greeter('george')
let georgeMsg = george.sayHello()
console.log(georgeMsg)
```

**Factory Function**

```
const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName  = () => name;
  const die = () => {
    // uh oh
  };
  const damage = x => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return {attack, damage, getLevel, getName};
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);
```

## The module Pattern

- Modules are actually very similar to factory functions.the main difference is how they're created.

```
const calculator = (() => {
  const add = (a, b) => a + b
  const subtract = (a, b) => a - b
  const multiply = (a, b) => a * b
  const div = (a, b) => a / b
  return { add, subtract, multiply, div }
})()


console.log(calculator.add(1, 2))
console.log(calculator.multiply(1, 2))
console.log(calculator.div(1, 2))
console.log(calculator.subtract(1, 2))

```

- the concepts are exactly the same as the factory function.
- instead of creating a factory that we can use over and over again to create multiple objects, the module pattern wraps the factory in an `IIFE `(Immediately Invoked Function Expression).

## An Introduction to IIFEs - Immediately Invoked Function Expressions.

```
(() => {
  //logic here
})();
```

- the primary reason to use an IIFE is to obtain data privacy.
- Because JavaScript `var` scopes variables to their containing function, any variables declared within the IIFE cannot be accessed by the outside world.
- runs as soon as it is defined.

## JavaScript Module Pattern Basics

- the module pattern is one of the most common design patterns used in javascript and for good reason.
- the module pattern is easy to use and creates encapsulation.
- modules are commonly used as singleton style objects where only one instance exist.
- the module pattern is great for services and testing/TTD.

> Creating a Moduele

- First we start using anonymouse closure.
- - `Anonymous Closures` are just functions that wrap our code and create an enclosed scope around it.
- - Closures help keep any state or privacy withing that function.
- - Closures are one of the best and most powerful features of Javascript.

```
(function() {
  'use strict'
  //Your Code here
  // All function and variables are scoped to this function.
})()
```

- this pattern is well know as a `immediately invoked functions expression` or **IIFE**
- the function is evaluated then immediately invoked.
- its also a good practice to run your dangerous parts in javascript.

> Exporting our module

- next we will want to export our module.
- this basically assigns the module to a variable that we can use to call modules methods

```
let myModule = (function () {
  'use strict'
})()
```

- next lets create a public method for our module to call.
- To expose this method to code outside our module we return an `Object`
  with the methods defined.

```
let myModule = (function () {
  'use strict'

  return {
    publicMethod:function(){
      console.log('publicMethod')
    }
  }
})()

myModule.publicMethod()
```

> Private methods & properties

- javascript does not have a private keyword by default but using closures we can create private methods and private state.

```
var myModule = (function () {
  'use strict'

  const _privateProperty = 'Hello World'
  function _privateMethod() {
    console.log(_privateProperty)
  }

  return {
    publicMethod: function () {
      _privateMethod()
    }
  }
})();

myModule.publicMethod();//outputs 'hello world'
console.log(myModule._privateProperty)//is undefined protected by the module closure.
myModule._privateMethod()//is undefined protected by the module closure.
```

- because our private properties are not returned they are not available outside of out module.
- only our public method has given us access to our private methods.
- this gives us ability to create private state and encapsulation within our code.

- you may have noticed the `_` before our private methods and properties.
- because javascript does not have a private keyword its common to prefix private properties with an underscore.

> Revealing Module Pattern.

- the revealing module pattern is one of the most popular ways of creating modules.
- using the return statement we can return a object literal that reveals only the methods or properties we want to be publicly available.

```
var myModule = (function () {
  'use strict'

  var _privateProperty = 'Hello World'
  var publicProperty = 'I am a public property'

  function _privateMethod() {
    console.log(_privateProperty)
  }

  function publicMethod() {
    _privateMethod()
  }

  return { publicMethod, publicProperty }
})()

myModule.publicMethod()
console.log(myModule.publicProperty)
console.log(myModule._privateProperty)
myModule._privateMethod()
```

- the benefit to the revealing module pattern is that we can look at the bottom of our modules and quickly see what is publicly available for use.
- The module pattern is not a silver bullet for adding code re-usability to your javaScript.
- using the module pattern with prototypal inheritance or es6 classes can give you a wide range of design patterns with varying pros and cons.

## Module Pattern in Javascript.

- a module is a construct somewhat similar to a singleton class.
- it has only one instance and exposes its members, but it doesn't have any kind of internal state.
  > Defining a module
- module is created as an IIFE(immediately invoked function expression) with a function inside:

```
const someModule = (function(){})()
```

- Everything within the body of said function is bound to that module and can be seen by each other.
- Modules emulates public and private methods by creating mentioned earlier scope and exposing only those things that are declared.
- - Private methods or functions are members of given entity than can be seen only within said entity.
- - Public ones can be accessed from the outside of given entity.
- let us try and create a module with a private function inside.

```
const Formatter = (function () {
  const log = (message) =>
    console.log(`[${new Date().toISOString()}] ${message}`)
})()
```

- as you can see, there is a simple log function that will log received message.How to execute it?
  `Formatter.log`.?

```
Formatter.log("Hello");
```

- can you guess what is produces?`Uncaught TypeError: Cannot read property 'log' of undefined`
  .Why is that?because our module doesnt return anything, so it is actually `undefined`, even though the code inside will execute.

```
const Formatter = (function () {
  console.log('start')
  const log = (message) =>
    console.log(`[${new Date().toISOString()}] ${message}`)
})()
```

- this will log `start`, because this function has been fired, and as you know , functions doesnt have to always return something.
- so, now we know that accessing a module is actually accessing whatever it returns.

- the `log` function can be treated as a private one. it can be accessed from within the module and other functions inside can execute it.

```
const Formatter = (function(){
  const log = (message) => console.log(`[${new Date().toISOString()}] ${message}`)

  const makeUpperCase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  }
  // return {makeUpperCase}
})()

console.log(Formatter.makeUpperCase("hello world"))
```
