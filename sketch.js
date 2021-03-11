let button1; //play button
let audio1; //nihilism
let audio2; //mac demarco
let reverb; //echo of nihilism
let you; //webcam
let button; //button for button wall
let buttons = []; //button wall necessity
let value = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  audio1 = loadSound('assets/sound1.mp3');
  audio2 = loadSound('assets/sound2.mp3');
  
  //button1 info
  button1 = createButton("play");
  button1.position(windowWidth/2,windowHeight/2);
  button1.mousePressed(toggleSound);

 
  
  //audio1 and audio 2 echo
  reverb = new p5.Reverb();
  audio1.disconnect();
  reverb.process(audio1,1,2);
  audio2.disconnect();
  reverb.process(audio2,2,2);
 
  
  //webcam
  you = createCapture(VIDEO);
  you.hide();
  
}

function draw() {
  
  background(value,0,0,10);
  
     if (mouseIsPressed) {
   image(you,0,0,windowWidth,windowHeight);
       tint(random(0,1000),random(0,500),random(0,600));
       filter(INVERT);
 button1.hide();
 } 
  
  text('do we belong here?',mouseX,mouseY);
  textAlign(CENTER);
  fill(255,0,40);
  
}

function toggleSound() {
  audio1.play();
}

function doubleClicked() {
setTimeout(buttonWall,10000);
}
  
function buttonWall() {

  for (let x=0; x<windowWidth; x+=50){
  for (let y=0; y<windowHeight; y+=20){
  
  buttons[x] = createButton('reflect');
  buttons[x].size(50,20);    
  buttons[x].position(x, y);  
  buttons[x].mousePressed(playSound2);
  
  
    
    }
  }
}

function mouseMoved() {
  
  value = value + random();
  
  if (value > 300) {
    value = 0;
  }
}

function playSound2() {
  audio2.play();
}

function stopSound2() {
  audio2.stop();
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
