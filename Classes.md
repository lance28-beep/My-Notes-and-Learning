```
//factory function
const Player = (name, age, gender) => {
  return { name, age, gender }
}

//object constructor
const PlayerOne = function (name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
}

// class function
class PlayerTwo {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }
}

const Lance = Player('lance', 27, 'male')
const Jess = new PlayerOne('jess', 27, 'female')
const May = new PlayerTwo("may",27,"female")
console.log(Lance.name)
console.log(Jess.name)
console.log(May.name)
```

## Property getters and setters

- There are two kinds of object properties.
- The first kind is <em>data properties</em>. We already know how to work with them
- all properties that we've been using until now were data properties.
- The second type of property is something new. It's an <em>accessor property</em>.
- They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

### Getters and Setters

- Accessor properties are represented by "getter" and "setter" methods.In an object literal they are denoted by get and set:

```
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};
```

the getter works when obj.propName is read, the setter - when it is assigned.
for instance, we have a user object with name and surname:

```
let user = {
 name:"John",
 surname:"smith"
}
```

Now we want to add a fullName property, that should be "John Smith". ofcourse, we dont want to copy-paste existing information, so we can implement it as an accessor:

## Accessor Descriptors

- Descriptors for accessor properties are different from those for data properties.
- For accessor properties, there is no value or writable, but instead there are get and set functions.
  That is, an accessor descriptor may have:

* get - a function without arguments, that works when a property is read.
* set - a function with one argument, that is called when the property is set.
* enumerable - same as for data properties.
* configurable - same as for data properties.

## Smarter getters/setters

- Getters/ Setters can be used as wrapper over "real" property values to gain more
  control over operations with them.
- For instance, if we want to forbid too short names for user, we can have a setter
  name adn keep the value in a separate property \_name:

```
let user = {
  get name() {
    return this._name
  },

  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short, need at least 4 charactes')
      return
    }
    this._name = value
  },
}

user.name = 'Pete'
console.log(user.name)

user.name = 'fsfsdfdsfdsf'
console.log(user.name)
```

so, the name is stored in _name property, and the access is done via getter and setter.
Technically, external code is able to access the name directly by using user.\_\_name.
But there is a widely known convention that properties starting with an underscore "_"
are internal and should not be touched from outside the object

## Using for compatibility

One of the great uses of accessors is that they allow to take control over a "regular" data property at any moment by replacing it with a getter and a setter and tweak its behavior.

```
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
```

## Class basic syntax

"In object-oriented programming, a class is an extensible program-template for creating objects,
providing initial values for state(member variables) and implementing of behavior(member functions or methods)"

- In practice, we often need to create many objects of the same kind, like users, or goods or whatever.
- As we already know from the chapter Constructor, operator "new",<code> new function </code> can help with that.
- But in modern JavaScript, there's a more advanced "class" construct, that introduces great new features which are useful for object-oriented programming.

## The "Class" Syntax

```
class MyClass {
  constructor(){....}
  method1(){...}
  method2(){...}
  method3(){...}
}
```

- the use of <code> new MyClass() </code> is to create a new object with all listed methods.
- the <code>constructor()</code> method is called automatically by <code>new</code>, so we can initialize the object there.

```
class User {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    return this.name
  }
}

let user = new User('Jhon')
console.log(user.sayHi())
```

When new User("John") is called:

- a new object is created
- the constructor runs with the given argument and assigns it to this.name.
  > then we call object methods, such as user.sayHi()

## What is a class?

- So what exactly is a class? That's not an entirely new language-level entity, as one
  might think.
- Lets unveil any magic and see what a class really is.That'll help in understanding many complex aspects.

```
class User {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    return this.name
  }
}

let user = new User('Jhon')
console.log(user.sayHi())
```

- What <code>class User {...}</code> construct really does is:

* create a function named <code>User</code>, that becomes the result of the class declaration. The
  function code is taken from the <code>constructor</code> method (assumed empty if we dont write such method)
* Stores class methods, such as <code>sayHi, in User.prototype.</code>

- After <code>new User</code> object is created, when we call its method, its taken from the prototype,
  just as described in the chapter <code>F.prototype</code>.so the object has access to class methods.

## Not just a syntactic sugar

- Sometimes people say that <code>class</code> is a "syntactic sugar" (syntax that is designed to make things easier to read, but doesnt introduce anything new), because we could actually declare the same thing without using the <code>class</code> keyword at all.

```
//rewriting class user in pure functions

// 1. Create constructor function
function User(name) {
  this.name = name

}
// a function prototype has "constructor" property by default,
// so we dont need to create it

//2. Add the method to prototype
User.prototype.sayHi = function(){
  console.log(this.name)
}

//Usage:
let user = new User("John")
user.sayHi()
```

The result of this definition about the same. So, there are indeed reasons why <code>class</code> can be
considered a syntactic sugar to define a constructor together with its prototype methods.

Still, there are important differences.

1. First, a function created by <code>class</code> is labelled by a special internal property
   `[[IsClassConstructor]]:true`.So its not entirely the same as creating it manually.

- The language checks for that property in a variety of places. For example, unlike a regular function, it must be called with <code>new:</code>.

```
class User {
  constructor() {}
}

console.log(typeof User)
console.log(User)
```

Also, a string representation of a class constructor in most Javascript engines starts with the "class.."

- Class methods are non-enumerable. A class definition sets <code> enumerable</code> flag to <code>false</code> for all methods in the "prototype".
- That good, because if we for .. in over an object, we usually dont want its class methods.
- Classes always <code>use strict</code>. All code inside the class construct is automatically in strict mode.
  Besides, class syntax brings many other features that well explore later.

## Class Expressiong

- Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.

```
let User = class {
  sayHi(){
    console.log("Hello")
  }
}

new User().sayHi()
```

Similar to Named function Expressions, class expressions may have a name.
if a class expression has a name, it's visible inside the class only:

We can even make classes dynamically "on-deman", like this:

```
function makeClass (phrase){
  //declare a class and return it
  return class{
    sayHi(){
      console.log(phrase)
    }
  }
}
//Create a new Class
let User = makeClass("hello")
new User().sayHi()
```

## Getters / Setters

- Just like literal objects, classes may include getters/setters, computed properties etc.

```
class User {
  constructor(name) {
    // invokes the setter
    this.name = name
  }
  get name() {
    return this._name
  }

  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short. ')
      return
    }
    this._name = value
  }
}

let user = new User("hon")
console.log(user.name)
```

## Computed names [...]

- Here's an example with a computed method name using brackets [...]

```
class User {
  ['say' + 'hi'](){
    console.log("Hello")
  }
}

new User().sayhi()
```

- such features are easy to remember, as they resemble that of literal objects.

## Class Fields

Previously, our classes only had methods
"Class fields" is a syntax that allows to add any properties
For instance, let's add <i>name</i> property to <code>class User</code>

```
class User {
  name = "John";
  sayHi(){
    console.log(`Hello, ${this.name}`)
  }
}

new User().sayHi()
```

So, we just write <i>"="</i> in the declaration, and that's it.
The important difference of class fields is that they are set on individual objects, not
<code>User.prototype</code>

## Classes

- Classes are a template for creating objects. They encapsulate data with code to work on that data.
  Classes in JS are built on prototypes but also have some syntax and semantic that are not shared with
  ES5 class-like semantics

## Defining Classes

- Classes are in fact "special functions", and just as you can define function expression and function declaration, the class syntax has two components: class expression and class declarations.

### Class Declarations

- One way to define class is using a class declaration. To declare a class, you use the "class" keyword with the name of the class ("Rectangle here").

```
class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}
```

### Hosting

- An important difference between function declarations and class declarations is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed.code like the following wil throw a referenceError.

```
const p = new Rectangle()
class Rectangle {}

console.log(p)
```

- this occurs because while the class is hoisted its values are not initialized.

### Class expressions

- A class expression is another way to define a class.Class expressions can be named or unnamed.The name given
  to a named class expression is local to the class's body. However, it can be accessed via the name property.

```
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
```

> Note: Class expressions must be declared before they can be used(they are subject to the same hoisting restrictions as described in the class declaration)

## Class body and method definitions

- The body of a class is the part that is in curly brackets {}. this where you define class members, such as methods or constructor.

### Strict mode

- the body of a class is executed in strict mode, ie. code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for the future version of ECMAScript.

### Constructor

- the constructor method is a special method for creating and initializing an object created with a class. there can only be one special method with the name "constructor" in a class. A syntaxError will be thrown if the class contains more than one occurence of a constructor method.
- A constructor can use the super keyword to call the constructor of the super class.

### Static initialization blocks

- Class static initialization blocks allow flexible initialization of class static properties including the evaluation of statements during initialization, and granting access to private scope.

### prototype methods.

```
class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
  // getter
  get area() {
    return this.calcArea()
  }

  //method
  calcArea() {
    return this.height * this.width
  }
}

const square = new Rectangle(10, 10)

console.log(square.area)
```

## Generator Methods

```
class Polygon {
  constructor(...sides) {
    this.sides = sides
  }
  // Method
  *getSides() {
    for (const side of this.sides) {
      yield side
    }
  }
}

const pentagon = new Polygon(1, 2, 3, 4, 5)
console.log([...pentagon.getSides()])
```
# Static methods and properties
- the static keyword defines a static method or property for a class. Static members (properties and methods)
are called without instantiating their class and cannot be called through a class instance, whereas static properties are useful for caches, fixed-configuration, or any other data you dont need to be replicated across instances.
```
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  static displayName = 'Point'

  static distance(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)

p1.displayName // undefined
p1.distance // undefined
p2.displayName // undefined
p2.distance // undefined

console.log(Point.displayName)
console.log(Point.distance(p1, p2))
```
Static - a method or property that belongs to a class and not any one objects
```
class Square {
  constructor(_width) {
    this.width = _width
    this.height = _width
  }

  static equals(a, b) {
    return a.width * a.height === b.width * b.height
  }
}

let square1 = new Square(8)
let square2 = new Square(8)
console.log(square1)
console.log(square2)
console.log(Square.equals(square1, square2))
```
### Binding 'this' with prototype and static methods
- when a static or prototype method is called without a value of 'this', such as by assigning the method to a variable and then calling it,the 'this' value will be undefined inside the method. This behavior will be the same even if the 'use strict' directive isn't present,because code within the class body's syntactic boundary is always executed in strict mode.
```
class Animal {
  speak() {
    return this
  }

  static eat() {
    return this
  }
}

const obj = new Animal()
console.log(obj.speak())
const speak = obj.speak
console.log(speak())

console.log(Animal.eat())
const eat = Animal.eat
eat()
```
