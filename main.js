/* Mobile Menu */
const menu = document.getElementById("menu")

function transition(menuBar) {
  menuBar.classList.toggle("change");
}

function toggle() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

/* Message Generator */
const quoteButton = document.getElementById("quote-button")
const quote = document.getElementById("strong-quote")

function generateRandomNumber(num) {
  return Math.floor(Math.random() * num)
}

const battleQuotes = {
  shulk: ["Everyone! Let's go!", "Right! Let's do this!", "The enemy's weak, but don't drop your guard!", "Looks like we don't have a choice!", "I'm really feeling it!", "We can definitely do this!", "Let's stay focused!", "Piece of cake!"],
  reyn: ["I hate these things...!", "Now it's Reyn time!", "Man, what a bunch of jokers!", "Let's not lose our heads though!", "Good thing I'm here! No? Anyone?"],
  fiora: ["Let's press on and on and on!", "One hit kill! Or something..."],
  sharla: ["Hey, not so fast!", "My rifle's getting hotter!", "Ouch, thats scorching hot!", "Good job all!", "I could really do with a shower right now."],
  dunban: ["I have no time for small fry!", "Born in a world of strife, Against the odds, We choose to fight! Blossom Dance!", "But we mustn't be careless."],
  melia: ["Take me lightly at your peril.", "Witness my power!", "Show no restraint!", "You must suffer more.", "I see life outside my world is not easy."],
  riki: ["Leave it to Heropon!", "Riki's sidekicks do good!", "Here Riki go!", "Heropon, very cool!", "Everyone did good!"]
}

let chosenQuotes = []

function chooseQuotes() {
  chosenQuotes = [];
  for (let char in battleQuotes) {
    let choice = generateRandomNumber(battleQuotes[char].length);
    switch (char) {
      case 'shulk':
        chosenQuotes.push(`Shulk: "${battleQuotes[char][choice]}"`);
        break;
      case 'reyn':
        chosenQuotes.push(`Reyn: "${battleQuotes[char][choice]}"`);
        break;
      case 'fiora':
        chosenQuotes.push(`Fiora: "${battleQuotes[char][choice]}"`);
        break;
      case 'sharla':
        chosenQuotes.push(`Sharla: "${battleQuotes[char][choice]}"`);
        break;
      case 'dunban':
        chosenQuotes.push(`Dunban: "${battleQuotes[char][choice]}"`);
        break;
      case 'melia':
        chosenQuotes.push(`Melia: "${battleQuotes[char][choice]}"`);
        break;
      case 'riki':
        chosenQuotes.push(`Riki: "${battleQuotes[char][choice]}"`);
        break;
    }
  }
  return chosenQuotes;
}

function formatQuotes(quotes) {
  const formatted = quotes.join("\r\n<br>");
  return formatted;
}

quoteButton.addEventListener("click", () => {
    quote.innerHTML = "";
    quote.innerHTML = formatQuotes(chooseQuotes());
});