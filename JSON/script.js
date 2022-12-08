// async function populate(){
//     const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

// const request = new Request(requestURL);
// const response = await fetch(request);
// const superHeroes = await response.json();

// populateHeader(superHeroes);
// populateHeroes(superHeroes);
// console.log(superHeroes)
// }

// function populateHeader(obj){
//     const header = document.querySelector('header')
//     const myH1 = document.createElement('h1')
//     myH1.textContent = obj.squadName;
//     header.appendChild(myH1)

//     const myPara = document.createElement('p')
//     myPara.textContent = `Hometown: ${obj.homeTown} // Formed:
//     ${obj.formed}`

//     header.appendChild(myPara)
// }

// function populateHeroes(obj) {
//     const section = document.querySelector('section');
//     const heroes = obj.members;

//     for (const hero of heroes) {
//       const myArticle = document.createElement('article');
//       const myH2 = document.createElement('h2');
//       const myPara1 = document.createElement('p');
//       const myPara2 = document.createElement('p');
//       const myPara3 = document.createElement('p');
//       const myList = document.createElement('ul');

//       myH2.textContent = hero.name;
//       myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
//       myPara2.textContent = `Age: ${hero.age}`;
//       myPara3.textContent = 'Superpowers:';

//       const superPowers = hero.powers;
//       for (const power of superPowers) {
//         const listItem = document.createElement('li');
//         listItem.textContent = power;
//         myList.appendChild(listItem);
//       }

//       myArticle.appendChild(myH2);
//       myArticle.appendChild(myPara1);
//       myArticle.appendChild(myPara2);
//       myArticle.appendChild(myPara3);
//       myArticle.appendChild(myList);

//       section.appendChild(myArticle);
//     }
//   }

//   populate();

// JSON.parse()
// const text = '{"name":"John", "age":30,"city":"New York"}'
// const obj = JSON.parse(text);

// console.log(text)

// const textArray = '["Ford","BMW","Audi","Fiat"]'
// const myArr = JSON.parse(textArray)

// for(array of myArr){
//   console.log(array)
// }

// JSON.stringify()

// const obj = {name:"John", age:30, city:"New York"}

// const myJSON = JSON.stringify(obj)

// console.log(myJSON)
// const textArray = '["Ford","BMW","Audi","Fiat"]'
// const arrayJSON = JSON.stringify(textArray)
// console.log(arrayJSON)

// const convertParse = JSON.parse(arrayJSON)
// console.log(convertParse)

// const arr = ["John", "Peter", "Sally", "Jane"];

// console.log(JSON.stringify(arr))
// console.log(arr)

// Storing data:
// const myObj = {name: "John", age: 31, city: "New York"};
// const myJSON = JSON.stringify(myObj);
// console.log(myJSON)

// // Retrieving data:
// let text =   myJSON
// let obj = JSON.parse(text);
// console.log(obj.name)

// var myNumber = 1
// function addOne() { myNumber++ } // define the function
// addOne() // run the function
// console.log(myNumber) // logs out 2

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

// let pizza

// function orderPizza(){
//   console.log('Order Pizza')
//   setTimeout(() => {
// pizza = 'pizza'
//   },100)
//   console.log('pizza war ordered')
// }

// orderPizza()
// console.log( `eat ${pizza}`)

// function orderPizza(callback){
//   setTimeout(() => {
//     const pizza = "pizza"
//     callback(pizza)
//   },2000)
// }

// function pizzaReady(pizza){
//   console.log(`Eat the ${pizza}`)
// }

// orderPizza(pizzaReady)

// console.log(`call Qoli`)

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

// p.then((message) => {
//   console.log(`this is in the then ${message}`)
// }).catch((message) => {
//   console.log(`This is in the cath ${message}`)
// })

// const userLeft = falsec

// Get the toggle button and nav bar container elements
// const toggleButton = document.querySelector('#toggle-nav');
// const nav = document.querySelector('nav');

// // Add an event listener to the toggle button that toggles the "show-nav" class on the nav bar container
// toggleButton.addEventListener('click', () => {
//   nav.classList.toggle('show-nav');
// });

// function getWeather() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("resolve");
//     }, 8000);
//     reject(new Error("reject"));
//   });
// }

// getWeather()
//   .then((resolve) => {
//     console.log(`this resolve ${resolve}`);
//   })
//   .catch((err) => {
//     console.error("this is error " + err);
//   });

// async function getData() {
//   try {
//     //console.loading
//     console.log("loading.....");

//     const responsePromise = new Promise((res, rej) => {
//       fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then((response) => {
//           res(response);
//         })
//         .catch((err) => {
//           rej(err);
//         });
//     });

//     const response = await responsePromise;

//     const data = await response.json();

//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// }

// const data = getData();

// console.log(data);

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("404");
    }, 10000);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 5000);
  });
}

function onSuccess(data) {
  console.log("success: " + data);
}

function onError(errorCode) {
  console.log("error : " + errorCode);
}

function inTheEnd() {
  console.log("finaly we be done yo");
}

fun1().then(fun2).then(onSuccess).catch(onError).finally(inTheEnd);
