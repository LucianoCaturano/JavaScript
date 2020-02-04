/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.querySelectorAll(".target").forEach(i => {i.innerHTML = "owned"})      
    //The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors. (MDN Doc)
    //To change each sentence, i need a loop, therefore I use Foreach (it's forEach on nodeList) and apply innerHTML
})();
