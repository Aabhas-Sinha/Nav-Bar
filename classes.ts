class Person{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    display(){
        console.log(this.name);
    }
}

var person = new Person("aabhas");

person.display();

import {z} from './main';