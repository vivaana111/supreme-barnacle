function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}
img = "desk.jpeg";

function preload(){
img = loadImage('desk.jpeg');
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Desk", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}