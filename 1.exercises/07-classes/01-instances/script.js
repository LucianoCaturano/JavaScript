/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let instance1 = new Cat("Skitty",9);
        let instance2 = new Cat("Pixel",6);
        console.log(instance1);
        console.log(instance2);
        // I have a class with a constructor. To create a instance of this class, i use the word new in front of the name of the class and i put in the argument the informationq
    })
})();
