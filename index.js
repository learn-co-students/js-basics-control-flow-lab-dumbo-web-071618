// Write your code in this file!
function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return "This one is on me!"
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks."
  } else if (feet > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  const message = (city === "NYC") ? "Ok, sounds good." : "No go."
  return message;
}

function switchOnCharmFromTip(charm) {
  let message;
  switch (charm){
    case "generous":
      message = "Thank you so much."
      break;
    case "not as generous":
      message = "Thank you."
      break
    default:
      message = "Bye."
  }
  return message;
}
