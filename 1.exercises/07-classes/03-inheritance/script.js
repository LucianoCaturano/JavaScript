/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal {           //creation of class Cat from class Animal. Class Cat must have 2 properties (name and greeting) but the property greeting is static (sort of constant) therefore it's not declared in the constructor.
        
        constructor(name,_greeting) {         //the constructor take the property "name". With super we called the constructor of the mother class
            super(Animal);
            this.name = name;
            this._greeting = "Aloha";    //attempt to make static >>> FAILED!!!! https://www.accelebrate.com/blog/javascript-es2015-classes-and-properties-part-2-of-2
        }
    }

    class Dog extends Animal {
        
        constructor(name,_greeting) {
            super(Animal);
            this.name = name;
            this._greeting = "Good Morning";
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        const wouf = new Dog("Dali");
        console.log(wouf.sayHello());
        const miaou = new Cat("Lilo");
        console.log(miaou.sayHello());
    });
})();
