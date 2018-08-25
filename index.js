// Write your code in this file!
function scuberGreetingForFeet(someValue) {
   if (someValue <= 400) {
     return'This one is on me!'
   }else if (someValue >= 2000 && someValue <= 2500){
     return 'I will gladly take your thirty bucks.'
   }else  {
     return 'No can do.'
   }
}

function ternaryCheckCity(city) {
 let response
  city === "NYC" ? response = "Ok, sounds good." : response = "No go."
 return response
}

function switchOnCharmFromTip(tip){
  switch (tip){
  case 'generous':
    return "Thank you so much."
  case "not as generous":
    return "Thank you."
  case "thanks for everything":
    return "Bye."
  }
}
