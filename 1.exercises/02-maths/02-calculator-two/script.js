/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let premierOperand = parseInt(document.getElementById("op-one").value);
        let secondOperand = parseInt(document.getElementById("op-two").value);
        let result;
        switch (operation) {
            case ("addition"): 
            result = premierOperand + secondOperand;
            break;
            case ("substraction"): 
            result = premierOperand - secondOperand;
            break;
            case ("multiplication"): 
            result = premierOperand * secondOperand; 
            break;
            case ("division"): 
            result = premierOperand / secondOperand; 
            break;
            default: alert ("Opération non autorisée")
        }
        alert(result)
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
