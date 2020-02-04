/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let stringNumbers = document.getElementById("numbers").value;  //on prend l'input
        let arrayNumbers = stringNumbers.split(' ');  //on casse la string de l'input via split et cela se retrouve dans un tableau
        for (i=0;i < arrayNumbers.length; i++) {  //pour chaque élément du tableau (grâce à une boucle FOR), on parseINT
        arrayNumbers[i]=parseInt(arrayNumbers[i]);}
        alert (arrayNumbers.sort((a,b) => a-b)); //on trie dans le tableau via sort et on met dans l'ordre croissant via la fonction (a,b)
    })
})();

