const fs = require("fs");
const path = require("path");

// Ämnet som AI ska skriva en artikel om
const topic = process.argv.slice(2).join(" ");

// Läs instruktionerna från prompt.txt
const promptPath = path.join(__dirname, "prompt.txt");
const promptTemplate = fs.readFileSync(promptPath, "utf8");

// Ersätt {{TOPIC}} med det valda ämnet
const prompt = promptTemplate.replace("{{TOPIC}}", topic);

// Visa den färdiga instruktionen
console.log(prompt);
