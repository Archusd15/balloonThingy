var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
 input = createInput();
 input.position(5,150)
 heading = createElement("h1","enter any alphabet")
 heading.position(5,20);
 textAlign(CENTER);
 textSize(50)
 textFont("IMPACT")
}

function draw() {
var value = input.value()
switch(value){
  case "a":
  console.log("vowel");
  break;
  case "e":
    console.log("vowel");
    break;
    case "i":
      console.log("vowel");
      break;
      case "o":
        console.log("vowel");
   break;
  case "u":
  console.log("vowel");
  break;
    default:
      console.log("Enter any carecter")
}
  
}

