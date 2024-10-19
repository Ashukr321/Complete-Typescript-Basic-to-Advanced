// // console.log("generic in typescript");

// // // Generic

// // function logerString(arg:string){
// //   console.log(arg);
// // }

// // logerString('1');

// // function logerNumber(arg:number){
// //   console.log(arg);
// // }
// // logerNumber(2);

// // function show<T>(arg:T){
// //   console.log(arg);
// // }
// // show([1,2]);

// interface HasAge{
//   age:number;
// }

// function getOldest<T  extends HasAge>(people:T[]):T{
//   return people.sort((a,b)=>b.age-a.age)[0];
// }

// // console.log(getOldest([{age:21},{age:49}]).age)

// //create the interface
// interface Players{
//   name:string;
//   age:number;
// }
// const players:Players[] = [{name:"ashutosh",age:21},{name:"amit",age:22}];

// const person = getOldest(players)  ;



// interface IPost{
//   id: number;
//   title:string;
//   description:string;
// }

// const fetchData = async<resultType> (path: string) :Promise<resultType> => {
//   const response = await fetch(`http://example.com${path}`);
//   return response.json();
// };

// (async () => {
//   const post = await fetchData<IPost[]>("/posts");
//   post[0].id
// })();
