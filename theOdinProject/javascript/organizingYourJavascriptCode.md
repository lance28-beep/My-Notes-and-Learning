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