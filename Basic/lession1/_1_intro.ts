

console.log("hello");
const num1:string = '2';
console.log(num1);

// 1 number 
const age:number = 21;
console.log(age);

// 2 . string 
const user:{name:string,age:21}={
  name:"Ashutosh",
  age:21
}

console.log(user.name);

// 3 boolean
const isBoolean:boolean = true;
console.log(isBoolean);

// undefined
const data:undefined= undefined;
console.log(data);
//4  bigint 
const bigData:bigint= 34n;
console.log(bigData);

// 5 symbol
const symbolData : symbol = Symbol("unique identifier");
console.log(symbolData);

// 6 void 
const userInfo :void =undefined;
console.log(userInfo);

// 7  null
const nullData:null = null;
console.log(nullData);