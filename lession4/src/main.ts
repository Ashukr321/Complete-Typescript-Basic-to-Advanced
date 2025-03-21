interface userAboutType {
  hobbies: string[];
}
interface userType {
  name: string;
  age: number;
  about?: userAboutType;
}

const user = {
  name: "Ashutosh kumar",
  age: 21,
  about: {
    hobbies: ["reading", "swimming"],
  },
};

console.log(user);

// chapter 4
// function  in the javascript

// function expression  in the javascript
const userinfo = function (a: number, b: number): number {
  return a + b;
};
console.log(userinfo(23, 5));

// function declration  in the typecript
function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(23, 5));

// Arrow functiions
const division = (a: number, b: number): number => {
  return a / b;
};
console.log(division(23, 5));

//  array two ways to defined the type of the array
let numbers: number[] = [1, 2, 4, 4, 5];
console.log(numbers);

let names: Array<string> = ["this", "is", "Ashutosh", "kumar"];
console.log(names);

interface userInformationsType {
  firstName: string;
  lastName: string;
  age: number;
}

// Arrows function
const displayUserInfo = (userInfo: userInformationsType): void => {
  console.log(userInfo.firstName, userInfo.lastName, userInfo.age);
};

displayUserInfo({ firstName: "Ashutosh ", lastName: "Kumar", age: 21 });
