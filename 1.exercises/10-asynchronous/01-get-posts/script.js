/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    (() => {
        function test(error, callback) {
          if (error) console.log(error);
          else
            callback.forEach(element => {
              console.log(window.lib.getComments());
            });
        }
        // your code here
        document.getElementById("run").addEventListener("click", () => window.lib.getPosts(test));
      })();
})();
