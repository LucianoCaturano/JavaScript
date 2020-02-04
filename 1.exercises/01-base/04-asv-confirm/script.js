/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    let age = prompt("Votre âge?");
    let sexe = prompt("Votre genre?");
    let ville = prompt("Votre ville?");
    let confirmation = confirm (`Ces informations sont-elles exactes : ${age}/${sexe}/${ville}?`);
    

    if (confirmation === false) {
        let age = prompt("Votre âge?");
        let sexe = prompt("Votre genre?");
        let ville = prompt("Votre ville?");
        let confirmation = confirm (`Ces informations sont-elles exactes : ${age}/${sexe}/${ville}?`);
    } else {alert ("Merci")}
})();
