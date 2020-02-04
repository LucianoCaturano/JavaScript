/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    document.getElementById("next").addEventListener("click",() => {
        for(i=0;i<gallery.length;i++) {
            let image = document.getElementsByTagName("img");
            image[0].setAttribute("src",gallery[i])
        }
    })
})();


/* let image = document.getElementsByTagName('img'); //I point on the imag tag
image[0].addEventListener("mouseover", () => {          //I list the event on the first node of the img tag with [0] and I say when I have mouseover >2things : set that modifie content of an attribute and get that return the value of the new attribute
    image[0].setAttribute("src", image[0].getAttribute("data-hover"));*/