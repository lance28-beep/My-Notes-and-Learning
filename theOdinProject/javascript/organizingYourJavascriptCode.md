Object literal

```
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function(){
    return "alert"
  }
}
```

2 ways to get information out of an object

```
// dot notation
myObject.property // 'Value!'

// bracket notation
myObject["obnoxious property"] // [Function]

```

Object as a Design pattern.
simplest ways you can begin to organize your code is by simply grouping things into objects

Object Constructors

// prototype is just a shared object.

// Factory Functions And The Module Pattern
Factory functions - simply set up and return the new object when you call the function.

// Scope and Closure
Scope - is the term that refers to where things like variables and functions can be used in your code.

---
Scope - variable access
The concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope
Context - this


//Private Variables and Functions

Factories are simply plain old JavaScript functions that return objects for us to use in our code.
Using factories is a powerful way to organize and contain the code you’re writing