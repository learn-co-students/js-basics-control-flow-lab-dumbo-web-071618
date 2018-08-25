// Write your code in this file!
// Use if and else if statements to return the correct greeting based on the
// distance the passenger desires to travel.
function scuberGreetingForFeet(feet) {
  if (feet < 400) {
    return 'This one is on me!'
  } else if (feet > 2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (feet > 2500) {
    return 'No can do.'
  }
}
// Use a ternary operator to return the correct response based on the desired
// destination of the passenger.
function ternaryCheckCity(city) {
  return city == 'NYC' ? 'Ok, sounds good.' : 'No go.'
}
// Use a switch statement to return a different response based on the
// generosity of the passenger's tip.
function switchOnCharmFromTip(tip) {
  switch (tip) {

    case 'generous':
      return 'Thank you so much.'

    case 'not as generous':
      return 'Thank you.'

    default:
      return 'Bye.'
  }
}
