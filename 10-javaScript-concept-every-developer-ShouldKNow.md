# 10 JavaScript concepts every Developer SHOULD know

- Inheritance
- Prototype vs. _proto_
- Closures
- Constructor vs. Factory
- this
- Arrow Functions
- Event Delegation
- Event Bubbling
- Reference vs. Value
- Higher-Order Functions

## inheritance in Javascript

( Prototypal inheritance tutorial )

**Inheritance** - is mainly used to reduce code duplication.(meaning you dont have to write the same code over and over again.)

_concept of inheritance_

```
const me = {
 talk(){
  return 'talking'
 }
}

const you = {
 talk(){
  return 'talking'
 }
}

console.log(me.talk()) //talking
console.log(you.talk()) //talking

```

> you.talk and me.talk does the same thing

2 problems

- code duplication - we had to write this function twice.
- if there's something wrong with this function and now we have to go fix it let's say we have a bug and we have to update the function we dont just have to do ti in one place we have to do it in every place.

> one way to use this is using inheritance.

```
class Person {
 talk(){
  return 'Talking'
 }
}

const me = new Person()
const you = new Person()

console.log(me.talk()) //Talking
console.log(you.talk()) //Talking
```
