var bubbles = [];
var SizeW = 600;
var SizeH = 600;
function setup() {

    frameRate(20);
    var cvn = createCanvas(SizeW, SizeH);
    cvn.parent("sketch-holder");
    bubbles[0] = new Bubble(SizeW / 2, SizeH / 2, 12);
    bubbles[1] = new Bubble(SizeW / 3, SizeH / 3, 12);
    for (var i = 2; i < 3; i++) {
        bubbles[i] = new Bubble(SizeW * .8, random(SizeH * (3 / 4)) * .8, random(1, 2));
        
    }


    

}
function updateScreen() {

}

function draw() {
    background(100);
    bubbles[0].render();
   // bubbles[1].render();
    for (var i = 2; i < bubbles.length; i++) {
        bubbles[i].attract(bubbles[0]);
       // bubbles[i].attract(bubbles[1]);
//        for (var j = 2; j < bubbles.length; j++) {
//            if (j !== i) {
//                bubbles[i].attract(bubbles[j]);
//            }
//        }
        
            bubbles[i].render();
           // bubbles[i].rotate();
            
            bubbles[i].update();
    }   
    
    //console.log(bubbles[2].force.x);
            



            if (mouseIsPressed) {
                if(bubbles.length <500){
                bubbles.push(new Bubble(mouseX, mouseY,random(1,3)));
            }
        }
}
//if(bubbles.length>25){
//  bubbles.splice(25);
//}




