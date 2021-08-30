var bg,bg2,music,form,system,code,security; ;
var score=0;

function preload(){

    bg=loadImage("bg1.jpg");
    bg2=loadImage("ted1.PNG");
    music=loadSound("tdmusic.mp3",false);
}



function setup() {
    
    createCanvas(windowWidth,windowHeight);
 
    system = new System()
    security = new Security()
  
    // bg1=createSprite(windowWidth,windowWidth);
    // bg1.addAnimation("bg1Img");
    // bg1.scale=2;

}


function draw(){
background(bg);

clues();
security.display();
textSize(25);
textFont("algerian")
fill("black");
text("Score: " + score, 650, 65);

if(score === 4) {
  clear();
  background(bg2);
   music.play();


drawSprites()

}
}
