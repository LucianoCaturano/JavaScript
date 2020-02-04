/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
let i = 0;
let text = document.getElementById("demo")
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < text.length) {
    text.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}
})();
