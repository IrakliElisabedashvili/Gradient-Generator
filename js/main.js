// Generate Function
function generateGradient(){
    let hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];


function populate(p){
    for(let i=0; i < 6; i++){
        let n = Math.round(Math.random() * 14);
        let c = hexValues[n];
        p += c;
    }
    return p;
}


let firstnewColor = populate("#");
let secondnewColor = populate("#");
let thirdnewColor = populate("#");
let angle = Math.round(Math.random() * 100);

let gradient = "linear-gradient(" + angle + "deg, " + firstnewColor + ", " + secondnewColor + ", " + thirdnewColor + ")";

document.getElementById("container").style.background = gradient;
document.getElementById("output").innerHTML = gradient;
document.getElementById("output").style.cssText = "display:block; transition: 1.2s ease-in-out;";

document.onload = generateGradient();

}
// Generate Function


// Copy Gradient Code Function
function Copytext() {
    let range = document.createRange();
    range.selectNode(document.getElementById("output"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    document.getElementById("output").style.backgroundColor= 'green';
  }
  
// Copy Gradient Code Function