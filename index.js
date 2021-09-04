function scuberGreetingForFeet(someValue) {
  let result
  if (someValue <= 400) {
    result = "This one is on me!"
  }
  else if (someValue > 2000 && someValue < 2500) {
    result = "I will gladly take your thirty bucks."
  }
  else if (someValue > 2500) {
    result = "No can do."
  }
  return result
}

function ternaryCheckCity(city) {
let ternaryCheckCity;

return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
switch(tip) {
  case "generous":
    return "Thank you so much."
    break;
  case "not as generous":
    return "Thank you."
    break;
  default:
    return "Bye."
}


} 




// describe('switchOnCharmFromTip()', function () {
//  it('should return "Thank you so much." if the tip is generous', function () {
//    expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//  });

//  it('should return "Thank you." if the tip is not as generous', function () {
//    expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//  });

//  it('should return "Bye." if anything else', function () {
//    expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//  });

//let ingredients;
//switch (order) {
//    case 'cheeseburger':
//        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
//        break;
//    case 'hamburger':
//        ingredients = 'bun, burger, lettuce, tomato, onion';
//        break;
//    case 'malted':
//        ingredients = 'milk, ice cream, malted milk powder';
//        break;
//    default:
//       console.log("Sorry, that's not on the menu right now.");
//        break;
//}