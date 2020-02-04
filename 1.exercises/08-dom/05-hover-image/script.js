/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let image = document.getElementsByTagName('img'); //I point on the imag tag
    image[0].addEventListener("mouseover", () => {          //I list the event on the first node of the img tag with [0] and I say when I have mouseover >2things : set that modifie content of an attribute and get that return the value of the new attribute
        image[0].setAttribute("src", image[0].getAttribute("data-hover"));
    });
})();