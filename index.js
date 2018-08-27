// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let instructions
  switch(true) {
    case someValue <= 400:
      instructions = 'This one is on me!';
      break;
    case someValue > 2000 && someValue < 2500:
      instructions = 'I will gladly take your thirty bucks.';
      break;
    case someValue > 2500:
      instructions = 'No can do.';
      break;
  }
  return instructions
}

function ternaryCheckCity(city) {
  return city == 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(tip) {
  let instructions
  switch(true) {
    case tip === 'generous':
      instructions = 'Thank you so much.';
      break;
    case tip === 'not as generous':
      instructions = 'Thank you.';
      break;
    default:
      instructions = 'Bye.';
      break;
  }
  return instructions
}
