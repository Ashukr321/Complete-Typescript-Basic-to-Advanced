console.log("clasess in the tyepscrit");

class Coder {
  // onstructor to initialize the member variables
  constructor(
    public userName: string,
    readonly music: string,
    private age: number, // access within the class only
    public lang?: string
  ) {
    this.userName = userName;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge(){
    return ` hi i am ${this.age}`;
  }
}

class webDev extends Coder{
  constructor(public computer:string,userName:string,music:string,age:number){
    super(userName,music,age)
    this.computer = computer;
  }
}

// we have heard about the data modifiers and access modifiers
const  Dave = new Coder("Coder","core",21);
console.log(Dave.getAge());