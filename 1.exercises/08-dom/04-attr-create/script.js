/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let source = document.getElementById("source"); //I point on element with source ID
    let pathAttribut = source.getAttribute("data-image"); // getAttribute() method on source return the content of the attribut passed on parameters
    // I search in "source" and i want take value of an attribute
    let createImage = document.createElement("img");
    // We create the img tag in the document. Now, we'll modifie the content of this image. We put the value of pathAttribute inside. SetAttribute take 2 parameters, name of attribut and his value
    createImage.setAttribute("src",pathAttribut);
    let insideTarget = document.getElementById("target").appendChild(createImage) //We put on the id target and with appendChild, we append a child, here the child is the img with her value
    source.remove();
})();

