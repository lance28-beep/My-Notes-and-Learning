//object literal
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  'obnoxious property': function () {
    return 'alert'
  },
}

console.log(myObject.property)
console.log(myObject['property'])
