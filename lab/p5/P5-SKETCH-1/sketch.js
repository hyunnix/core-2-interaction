var skyHeight;
var grassHeight;

function setup() {
    createCanvas(windowWidth, windowHeight);

    skyHeight = windowHeight/3;
    grassHeight = 2 * (windowHeight/3);
  }
  
  function draw() {
    //sky
    noStroke();
    fill(85, 235, 245);
    rect(0, 0, windowWidth, skyHeight);

    //grass
    fill(140, 245, 85);
    rect(0, skyHeight, windowWidth, grassHeight);

    //houseroof
    fill(250,255,120);
    triangle(300, 350, 580, 150, 860, 350);
    //housewall
    fill(255,255,225);
    rect(300, 350, 560, 300);

    //window1
    fill(115,80,70);
    rect(350, 400, 100, 100);
    //window
    fill(115,80,70);
    rect(350, 400, 100, 100);
  }