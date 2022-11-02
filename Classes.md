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


* Class methods are non-enumerable. A class definition sets <code> enumerable</code> flag to <code>false</code> for all methods in the "prototype".
* That good, because if we for .. in over an object, we usually dont want its class methods.
* Classes always use strict. All code inside the class construct is automatically in strict mode.
Besides, class syntax brings many other features that well explore later.