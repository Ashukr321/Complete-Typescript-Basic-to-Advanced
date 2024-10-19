console.log("Welcome to Learn about Interface ")

interface greet{
  name:string;
  age:number
}
const greet:greet={
  name:"Ashutosh",
  age:21
}

console.log(greet.age);


interface Book {
  name:string;
  price:number;
}
interface Book {
  size:number
}

const book:Book ={
  name:"harry-potter",
  price:2324,
  size:44,
}

console.log(book);


type id = number| string;
const Id:id= 33;
console.log(Id);