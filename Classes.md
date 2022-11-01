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
Technically, external code is able to access the name directly by using user.__name.
But there is a widely known convention that properties starting with an underscore "_"
are internal and should not be touched from outside the object