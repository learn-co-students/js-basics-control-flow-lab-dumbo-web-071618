// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue >= 2500) {
    return 'No can do.';
  }
  else if (someValue >= 2000) {

    return "I will gladly take your thirty bucks.";

  }
  else if (someValue <= 400) {

    return "This one is on me!";

  }

}


function ternaryCheckCity(value){

  if (value == "NYC") {

    return "Ok, sounds good.";
  } else {

    return "No go.";

  }
  }

function switchOnCharmFromTip(tipValue){

    switch(tipValue){
      case 'generous' :
      return 'Thank you so much.';
      break;
      case 'not as generous' :
      return 'Thank you.';
      break;
      case 'thanks for everything' :
      return 'Bye.';
      break;



    }


}
