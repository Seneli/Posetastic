let mobilenet;
let camera;
let label = "";

//need to catch Model not ready error
function modelReadyOrNah() {
  console.log("Model ready");
  mobilenet.predict(catchError);
}
function catchError(error, res) {
  if (error) {
    console.error(error);
  } else {
    console.log(res);
    label = res[0].className;
    // let prob = res[0].probability;
    fill(0);
    textSize(56);
    text(label, 13, height - 100);
    //double check model
    mobilenet.predict(catchError);
    // createP(name);
    // createP(prob);
  }
}
function setup() {
  createCanvas(640, 480);
  camera = createCapture(VIDEO);
  //   camera.hide();
  background(0);
  mobilenet = ml5.imageClassifier("MobileNet", camera, modelReadyOrNah);
}

//draw video onto the canvas
function draw() {
  image(camera, 0, 0);
}
