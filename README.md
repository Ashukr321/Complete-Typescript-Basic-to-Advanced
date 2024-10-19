
![ts-logo-512.png](Resources/ts-logo-512.png)


# Complete Typescript 🚀

- [Typescript 🔗](https://www.typescriptlang.org/)
## Quick Reference 🚀🧑‍💻
- [TypeScriptNotesForProfessionals.pdf](Resources%2FTypeScriptNotesForProfessionals.pdf)- []()
- [TypeScript Classes.pdf](Resources%2Ftypescript-cheat-sheets%2Fpdfs%2FTypeScript%20Classes.pdf)
- [TypeScript Control Flow Analysis.pdf](Resources%2Ftypescript-cheat-sheets%2Fpdfs%2FTypeScript%20Control%20Flow%20Analysis.pdf)
- [TypeScript Interfaces.pdf](Resources%2Ftypescript-cheat-sheets%2Fpdfs%2FTypeScript%20Interfaces.pdf)
- [TypeScript Types.pdf](Resources%2Ftypescript-cheat-sheets%2Fpdfs%2FTypeScript%20Types.pdf)


## Why we use Typescript ❓
* TypeScript was first introduced in 2012 by Microsoft.
* TypeScript helps catch errors early in the development process
* TypeScript is particularly useful for large-scale applications
* TypeScript is fully compatible with existing JavaScript code

## Installation 
### To install  globally on your Local system 

    npm install -g typescript

### tsc 
* tsc stands for TypeScript Compiler
* tsc is used to compile TypeScript code into JavaScript code
* tsc is the command-line interface for the TypeScript compiler
*   tsc is used to compile a single file or adirectory of files
>

    tsc filename.ts --watch

## tsc --init
* tsc --init is a command that initializes a new TypeScript project by creating a tsconfig.json

>
    tsc --init
>   
    {
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true,
        "outDir": "build"
    },
    "include": ["src/**/*"]
    }

>
## 1. All Primitive Data Types in TypeScript ⭐
1. Number
>
    let age: number = 30;
    let price: number = 19.99;
2. String
>
    let name: string = "John Doe";
3. Boolean
>
    let isActive: boolean = true;
4. Null
> 
    let nullValue: null = null;
5. Undefined

> 
    let undefinedValue: undefined = undefined;
6.  BigInt
>   
    let bigIntValue: bigint = 12345678901234567890n;
7. Symbol :  Symbol() created by this function 
* Unique Identifiers
* Preventing Name Collisions
* Private Properties

> 
    let symbolValue: symbol = Symbol("unique identifier");
8.   Void
>
    let voidValue: void = undefined;




## 2. 🧑‍💻Type Alias 🚀

* Type aliases cannot be extended or implemented by classes
### 1.Basic Type Alias
>
    type Color = 'red' | 'green' | 'blue';
    let color: Color = 'red';


* Type aliases in TypeScript allow you to create custom names for complex types, making your code more readable and maintainable.

### 2.Custom Object Type Alias:
>
    type Person = {
        name: string;
        age: number;
    };

    let person: Person = {
        name: "Alice",
        age: 25,
    };

### 3.Union Type Alias

>

    type Result = number | string;

    let value1: Result = 42;
    let value2: Result = "Success";
### 4.Function Type Alias
>
    type Calculator = (a: number, b: number) => number;

    const add: Calculator = (x, y) => x + y;

### 5.Combining Type Aliases
>

    type Point = {
        x: number;
        y: number;
    };

    type Color = {
        color: string;
    };

    type ColoredPoint = Point & Color;

    let coloredPoint: ColoredPoint = {
        x: 10,
        y: 20,
        color: "red",
    };


## 3 . Interfaces
* Interface Defined the bluePrint of the object 

        interface Person {
            name: string;            // Required property
            age: number;             // Required property
            email?: string;         // Optional property
            readonly id: number;    // Read-only property
        }

* If two interface have same name then will merge it 

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

## 4 Unions  
* union type allows you to define a variable that can hold multiple types
* ( | ) This operator is use 

        type Status = "active" | "inactive" | "pending";


## 5 Generic 🚀
* Generic is a type that can work with any data type
* Generic is use to create reusable function or class

        function identity<T>(arg: T): T {
            return arg;
        }

        // Usage
        const num = identity<number>(42); // num is of type number
        const str = identity<string>("Hello"); // str is of type string

* Generic syntax in arrow function 

        // Generic arrow function

        const identity = <T>(arg: T): T => {
            return arg;
        };

        // Using the generic arrow function
        const num = identity<number>(42); // num is of type number
        const str = identity<string>("Hello"); // str is of type string

        console.log(num); // Outputs: 42
        console.log(str); // Outputs: Hello

        
## Authors

- [@Ashutosh kumar](https://github.com/Ashukr321)



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://modern-portfolio-phi-rouge.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ashutosh-kumar-7ba1a6211/)
[![instagram](https://img.shields.io/badge/instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ashukr321/)


## 🚀 About Me
I'm ASHUTOSH KUMAR FULLSTACK DEVELOPER 

I specialize in creating modern and responsive web applications. With a strong passion for FULLSTACK development, I bring creative solutions to life through code and design. Additionally, I am a winner 🏆 of the GDG Patna WEB Hackathon


## Acknowledgements

 * Ashutosh kumar for creating and maintaining this repository.

