/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let int2=new Intl.DateTimeFormat("fr-FR", {hour12: false, weekday: "long", year:"numeric", month:"long", weekday:"long", day:"numeric", hour: "2-digit", minute: "2-digit", second:"2-digit"});
    let dt=new Date();
    document.getElementById("target").innerHTML = (int2.format(dt));
})();
