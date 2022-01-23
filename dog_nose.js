nose_X = 0;
nose_Y = 0;

function preload(){
    nose_img=loadImage("https://i.postimg.cc/cHQnFWQw/nose-2.png");
}

function setup() {

    canvas = createCanvas(300,300)
    canvas.center();

    video = createCapture(VIDEO);
    video.size(299,299)
    video.hide();

    poseNet= ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0 ,0 , 300,300) ;
    image(nose_img,nose_X,nose_Y,80,80);
}

function take_snapshot(){

    save('myFilterImage.png')
}

function modelLoaded() {
    console.log("poseNet is intialized :)")
}

function gotPoses(results) {
    if(results.length >0) {
        console.log(results);
        nose_X=results[0].pose.nose.x -40;
        nose_Y=results[0].pose.nose.y -30;
        console.log("nose x= " + nose_X);
        console.log("nose y= " + nose_Y);
    }
}

function next_html() {
    window.location="lipstick.html";
}