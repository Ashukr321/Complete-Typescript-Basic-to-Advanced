console.log("Object  data types in typescript")


type AboutType ={
  hobbies:string[]
}
interface userType{
  age:number,
  name:string,
  about?:AboutType // optional
}


const user:userType={
  age:21,
  name :"Ashutosh",
  about:{
    hobbies: ["Coding","Reading"],
  }
}
console.log(user)