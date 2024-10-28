let mimg;
let mstring = [];
let mWords = [];
let S = 4000; 
let ridx=[];
let ts=0;
let time=0;
function preload() {
  mimg = loadImage("MF doom.png");  
  mstring = loadStrings("MF Doom lyrics.txt"); 
}

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  mimg.resize(S, S);
  mimg.loadPixels();
  imageMode(CENTER);
  textAlign(CENTER);
angleMode(DEGREES);
  mWords = mstring.join(" ").split(" ");
  fill(255);
  for (let idx = 0; idx < mWords.length; idx+=1) {
    ridx.push(random(-30,30));
    
  }

}

function draw() {
  background(0);
  let textIndex = 0;
 
  for (let x = 0; x < S; x += 150) {
    
    for (let y = 0; y < S; y += 150) {
      let index = (x + y * S) * 4;
      let r = mimg.pixels[index];
      
      if (r < 125 && textIndex < mWords.length) {
        push();
        let dynamicSize = 40 + 60* cos(millis()/8 + textIndex * 0.5);
        textSize(dynamicSize);
        translate(x - S / 2 + windowWidth / 2, y - S / 2 + windowHeight / 2);
        rotate(ridx[textIndex]);
        text(mWords[textIndex], 0,0);
        textIndex++;
        pop();
      }
    }
  }
}
