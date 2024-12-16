var text = "Often, Brain, Happiness, Look, Joyful, Wonderful";

var regex = /\b(?!.*[Aa])[a-zA-Z]{6,}\b/g;

var matches = text.match(regex);

console.log(matches);
