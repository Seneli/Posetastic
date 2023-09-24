import styled from 'styled-components';
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";
import {PageTemplate} from "../components";
import {ColorScheme} from "../types/enums";
import ml5 from "ml5";
import {detectPose, classifyPose, calculateAngle} from "../computation/poseDetectior";

declare const p5: any

let video: any;
let poseNet;
let poses: any[] = [];

function modelReady() {
  console.log("MODEL READY BOII");
}

function setup(p5:any) {
  return () => {
    p5.createCanvas(640, 480); //, p5.WEBGL);
    video = p5.createCapture()
    video.size(640, 480);

    poseNet = ml5.poseNet(video, modelReady);
    // This sets up an event that fills the global variable "poses"
    // with an array every time new poses are detected
    poseNet.on("pose", function(results: any[]) {
      poses = results;
      console.log("poses", poses);
    });
    // Hide the video element, and just show the canvas
    video.hide();
  };
}

function draw(p5:any) {
  return () => {
    p5.image(video, 0, 0, 640, 480);

    // We can call both functions to draw all keypoints and the skeletons
    drawKeypoints(p5);
    drawSkeleton(p5);
  };
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints(p5:any) {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i += 1) {
    // For each pose detected, loop through all the keypoints
    const pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j += 1) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      const keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        p5.fill(255, 0, 0);
        p5.noStroke();
        p5.ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

function drawSkeleton(p5:any) {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i += 1) {
    const skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j += 1) {
      const partA = skeleton[j][0];
      const partB = skeleton[j][1];
      p5.stroke(255, 0, 0);
      p5.line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}

function sketch(p5:any) {
  p5.setup = setup(p5);
  p5.draw = draw(p5);
}

const Train = () => (
  <PageTemplate colorScheme={ColorScheme.Pink}>
    <ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>
  </PageTemplate>
);


export default Train;