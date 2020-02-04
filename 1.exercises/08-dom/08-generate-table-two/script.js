/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("target").innerHTML = createTable();

function createTable () {
    let x = document.createElement("TABLE");  //I create the element tag <table>
    x.setAttribute("id","myTable");           //With setAttribute, I initialize the attribut content of x with "id" and "myTable"
    document.body.appendChild(x);             //I "hang" x, TABLE, on the document. I make him a child of body document.
    
    for (let i = 0; i<10; i++) {
    let y = document.createElement("TR");     //I create the element tag <TR>
    y.setAttribute("id","myTr");
    document.getElementById("myTable").appendChild(y); //I add TR in my TABLE. Therefore, I use getElementById for to be in my table and i make y a child of myTable node.

    let z = document.createElement("TD");
    let t = document.createTextNode("Cell");     // To create the content inside TD
    z.appendChild(t);                            // because t is a childnode of z
    document.getElementById("myTr").appendChild(z) // We make z a childnode of myTR  (TABLE > TR > TD > Cell)
    }
}
})();