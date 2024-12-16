
var text = "Often, Brain, Happiness, Look, Joyful, Wonderful";


var regex = /\b[^Aa]{6,}\b/g;


var matches = text.match(regex);


console.log(matches);
