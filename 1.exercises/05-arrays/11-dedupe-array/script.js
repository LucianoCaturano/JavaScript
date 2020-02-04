/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click",() => {
        const uniqueSet = new Set(fruits);
        const backToArray = [...uniqueSet];
        console.log(backToArray)
    })
})();

/* This exercice has been done with the help of the site : "https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c" who says :
1. Using Set
Let me start first by explaining what Set is:
Set is a new data object introduced in ES6. Because Set only lets you store unique values. When you pass in an array, it will remove any duplicate values.
Okay, let’s go back to our code and break down what’s happening. There are 2 things going on:
First, we are creating a new Setby passing an array. Because Setonly allows unique values, all duplicates will be removed.
Now the duplicates are gone, we’re going to convert it back to an array by using the spread operator ...
*/