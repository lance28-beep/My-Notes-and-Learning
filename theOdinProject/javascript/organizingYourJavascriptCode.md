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
Factory functions simply set up and return the new object when you call the function. 