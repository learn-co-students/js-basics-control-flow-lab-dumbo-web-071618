// Write your code in this file!


function scuberGreetingForFeet(num) {
  if (num <= 400){
    return 'This one is on me!';
  }
  else if (num > 2500){
    return 'No can do.';
  }
  else if (num > 2000){
    return 'I will gladly take your thirty bucks.';
  }
 }

function ternaryCheckCity(city){
   return (city === "NYC" ? "Ok, sounds good." : "No go.");
}

let tip ;

function switchOnCharmFromTip(tip) {
  switch(tip) {
       case 'generous':
        return 'Thank you so much.';
        break;
       case 'not as generous':
        return 'Thank you.';
        break;
       case 'thanks for everything':
        return 'Bye.';
        break;
      }
    }
