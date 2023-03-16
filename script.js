var startMyDay = function() {
    return "Time for coffee and stretching!";
};
console.log(startMyDay());

var favoriteCookie = function(cookie) {
    return `My favorite cookie is ${cookie}`;
};
console.log(favoriteCookie());
console.log(favoriteCookie("peanutbutter"));

var introduce = function(name, occupation) {
    return `What is your ${name} and ${occupation}?`;
};
console.log(introduce());

var hydrationFeedback = function() {
    var numGlasses = Number(
        prompt("How many glasses of water did you have today?")
    );
    if (numGlasses >= 8) {
        console.log("Nicely done!");
    } else if (numGlasses < 8) {
        console.log("Not bad, but do better!");
    }
};
hydrationFeedback();