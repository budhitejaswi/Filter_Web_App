nose_X = 0;
nose_Y = 0;
left_eye_X = 0;
left_eye_Y = 0;
right_eye_X = 0;
right_eye_Y =0;

function preload(){
    nose_img=loadImage("https://i.postimg.cc/VvJ9knjW/nose-1.png");
    left_eye_img=loadImage("https://i.postimg.cc/QCvQ9CmG/right-ear-1.png");
    right_eye_img =loadImage("https://i.postimg.cc/fL2jsB0b/left-ear-1.png");
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
    image(nose_img,nose_X,nose_Y,45,45);
    image(left_eye_img,left_eye_X,left_eye_Y,50,50);
    image(right_eye_img,right_eye_X,right_eye_Y,50,50);
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
        nose_X=results[0].pose.nose.x -22;
        nose_Y=results[0].pose.nose.y -30;
        console.log("nose x= " + nose_X);
        console.log("nose y= " + nose_Y);
        left_eye_X=results[0].pose.leftEye.x-15;
        left_eye_Y=results[0].pose.leftEye.y-80;
        right_eye_X=results[0].pose.rightEye.x-40;
        right_eye_Y=results[0].pose.rightEye.y-80;
    }
}

function next_html() {
    window.location="mustache.html";
}