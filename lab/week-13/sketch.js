var skyHeight;
var landHeight;

function setup() {
    createCanvas(windowWidth, windowHeight);

    skyHeight = 5 * windowHeight/6;
    landHeight =  (windowHeight/6);
  }
  
  function draw() {
    //sky
    noStroke();
    fill(40, 50, 80);
    rect(0, 0, windowWidth, skyHeight);

    //land
    fill(40, 60, 50);
    rect(0, skyHeight, windowWidth, landHeight);

    //moon
    fill(250, 255, 170);
    beginShape();
    vertex(30, 20);
    bezierVertex(80, 0, 80, 75, 30, 75);
    bezierVertex(50, 80, 60, 25, 30, 20);
    endShape();

    //star1
    fill(250, 255, 170);
    noStroke();
    beginShape();
    vertex(940, 60);
    vertex(950, 85);
    vertex(960, 60);
    vertex(985, 50);
    vertex(960, 42);
    vertex(950, 15);
    vertex(940, 42);
    vertex(915, 50);
    endShape();

    //star2
    fill(250, 255, 170);
    noStroke();
    beginShape();
    vertex(140, 160);
    vertex(150, 185);
    vertex(160, 160);
    vertex(185, 150);
    vertex(160, 142);
    vertex(150, 115);
    vertex(140, 142);
    vertex(115, 150);
    endShape();

    //star3
    fill(250, 255, 170);
    noStroke();
    beginShape();
    vertex(240, 130);
    vertex(250, 155);
    vertex(260, 130);
    vertex(285, 120);
    vertex(260, 112);
    vertex(250, 85);
    vertex(240, 112);
    vertex(215, 120);
    endShape();

    //star4
    fill(250, 255, 170);
    noStroke();
    beginShape();
    vertex(440, 110);
    vertex(450, 135);
    vertex(460, 110);
    vertex(485, 100);
    vertex(460, 92);
    vertex(450, 65);
    vertex(440, 92);
    vertex(415, 100);
    endShape();

    //star5
    fill(250, 255, 170);
    noStroke();
    beginShape();
    vertex(740, 140);
    vertex(750, 165);
    vertex(760, 140);
    vertex(785, 130);
    vertex(760, 122);
    vertex(750, 95);
    vertex(740, 122);
    vertex(715, 130);
    endShape();

    //star6
    fill(250, 255, 170);
    noStroke();
    beginShape();
    vertex(1040, 240);
    vertex(1050, 265);
    vertex(1060, 240);
    vertex(1085, 230);
    vertex(1060, 222);
    vertex(1050, 195);
    vertex(1040, 222);
    vertex(1015, 230);
    endShape();

    //star7
    fill(250, 255, 170);
    noStroke();
    beginShape();
    vertex(840, 260);
    vertex(850, 285);
    vertex(860, 260);
    vertex(885, 250);
    vertex(860, 242);
    vertex(850, 215);
    vertex(840, 242);
    vertex(815, 250);
    endShape();

    //star8
    fill(250, 255, 170);
    noStroke();
    beginShape();
    vertex(1340, 100);
    vertex(1350, 125);
    vertex(1360, 100);
    vertex(1385, 90);
    vertex(1360, 82);
    vertex(1350, 55);
    vertex(1340, 82);
    vertex(1315, 90);
    endShape();

    //star9
    fill(250, 255, 170);
    noStroke();
    beginShape();
    vertex(600, 250);
    vertex(610, 275);
    vertex(620, 250);
    vertex(645, 240);
    vertex(620, 232);
    vertex(610, 205);
    vertex(600, 232);
    vertex(575, 240);
    endShape();

    //star10
    fill(250, 255, 170);
    noStroke();
    beginShape();
    vertex(350, 350);
    vertex(360, 375);
    vertex(370, 350);
    vertex(395, 340);
    vertex(370, 332);
    vertex(360, 305);
    vertex(350, 332);
    vertex(325, 340);
    endShape();

    //tree1
    fill(45, 110, 65);
    triangle(130, 515, 90, 640, 170, 640);
    fill(95, 60, 60);
    rect(120, 640, 20, 50);

    //tree2
    fill(45, 110, 65);
    triangle(280, 515, 240, 640, 320, 640);
    fill(95, 60, 60);
    rect(270, 640, 20, 50);

    //tree3
    fill(45, 110, 65);
    triangle(430, 515, 390, 640, 470, 640);
    fill(95, 60, 60);
    rect(420, 640, 20, 50);

    //tree4
    fill(45, 110, 65);
    triangle(580, 515, 540, 640, 620, 640);
    fill(95, 60, 60);
    rect(570, 640, 20, 50);

    //tree5
    fill(45, 110, 65);
    triangle(730, 515, 690, 640, 770, 640);
    fill(95, 60, 60);
    rect(720, 640, 20, 50);

    //tree6
    fill(45, 110, 65);
    triangle(880, 515, 840, 640, 920, 640);
    fill(95, 60, 60);
    rect(870, 640, 20, 50);


    //house
    fill(105, 92, 92);
    quad(1020, 650, 1280, 580, 1280, 730, 1020, 730)

    //window
    fill(185, 140, 140);
    rect(1050, 670, 20, 20);
    rect(1100, 670, 20, 20);
    rect(1150, 670, 20, 20);

    //door
    fill(185, 165, 140);
    rect(1210, 670, 30, 60);
  }