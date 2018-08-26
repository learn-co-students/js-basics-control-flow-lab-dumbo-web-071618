// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let phrase;

  if (feet <= 400) {
    phrase = "This one is on me!";
  }
  else if (feet > 2000 && feet < 2500) {
    phrase = "I will gladly take your thirty bucks.";
  }
  else if (feet > 2500) {
    phrase = "No can do.";
  }
  return phrase;
}

function ternaryCheckCity (city) {
  let phrase;
  city === "NYC"? phrase = "Ok, sounds good." : phrase = "No go."
  return phrase;
}

function switchOnCharmFromTip (tip) {
  let phrase;
    switch (tip) {
      case "generous":
        phrase = "Thank you so much.";
        break;
      case "not as generous":
        phrase = "Thank you.";
        break;
      default:
        phrase = "Bye.";
}
  return phrase;
}
