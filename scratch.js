class Person {
 talk(){
  return 'Talking'
 }
}

const me = new Person()
const you = new Person()

console.log(me.talk()) //Talking
console.log(you.talk()) //Talking