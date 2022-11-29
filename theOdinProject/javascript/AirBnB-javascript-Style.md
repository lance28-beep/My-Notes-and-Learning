# Airbnb JavaScript Style Guide()
# Types
- Primitives: When you access a primitive type you work directly on its value.
* string
* number
* boolean
* null
* undefined
* symbol
* big int
```
const foo = 1;
let bar = foo;
bar = 9;
console.log(foo,bar) // => 1,9
```