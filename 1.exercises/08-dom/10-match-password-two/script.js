/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
            password1 = document.getElementById("pass-one").value; 
            password2 = document.getElementById("pass-two").value; 
    
            // If password not entered 
            if (password1 == '') 
                alert ("Please enter Password"); 
                
            // If confirm password not entered 
            else if (password2 == '') 
                alert ("Please enter confirm password"); 
                
            // If Not same return False.     
            else if (password1 != password2) { 
                document.getElementById('pass-one').style.borderColor = 'red';
                document.getElementById('pass-two').style.borderColor = 'red'; 
                let element = document.getElementsById("field");                 // PROBLEM
                element.classList.add("error");
                
            } 
    
            // If same return True. 
            else{ 
                alert("Password Match: Welcome!") 
                
            
        } 
    })
})();