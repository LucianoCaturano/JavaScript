/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let newArray=[];   // I create an empty array
        for (let i=1;i<11;i++) {
            newArray[i]= Math.floor(Math.random() * 101);
            document.getElementById(`n-${i}`).innerHTML = newArray[i];
            // I create a For loop who, between 0 to 10, print in the console a integer random number between 1 and 100. (utilisation littéraux de gabarits)
        }
        document.getElementById("min").innerHTML = Math.min(newArray);
        document.getElementById("max").innerHTML = Math.max(newArray);
        document.getElementById("sum").innerHTML = Math.max(newArray);
        document.getElementById("average").innerHTML = Math.max(newArray);
        
    })
})();
