/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        class Person {                //creation of a class person with constructor who take 2 properties (firstname and lastname) with also a method named sayHello
            constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
            }
            sayHello() {
            return `Hello, ${this.firstname} ${this.lastname}!`;
            }
        }
        const msg = new Person("Luciano", "Caturano");  // creation of an instance of the class Person
        console.log(msg.sayHello());     // We apply the method SayHello on the instance created
    })
})();
