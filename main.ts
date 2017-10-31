var a: string;
var b: number[];
var e: Object;

e = {

};
b = [1,2,3];
a = "hello";
console.log(a,b);

function Hello(name: string): string{
    console.log(`Hello ${name}`);
    return name;
}

var Name: string = Hello("aabhas");

export const z = ()=>(console.log("imported"));

function decorate(label: string){
    return function(target, key){
        Object.defineProperty(target, key,{
            configurable: true,
            get : function(){
                return "Hello";
            }
        })
    }
}

class A{
    @decorate('Yo')
    name: string;
    constructor(Name: string){
        this.name = Name;
    }
    display(){
        console.log(this.name)
    }
}

var out = new A('ram');
out.display();