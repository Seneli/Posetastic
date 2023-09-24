import {useState, useEffect} from "react";
import styled from 'styled-components';
import { ReactP5Wrapper } from "react-p5-wrapper";
import {PageTemplate} from "../components";
import {ColorScheme} from "../types/enums";
import ml5 from "ml5";
import {classifyPose} from "../computation/poseDetectior";
import { useNavigate } from 'react-router-dom';

import standStraight from "../static/poses/stand_straight.png";
import treePose from "../static/poses/tree_pose.png";
import warriorPose from "../static/poses/warrior_pose.png";

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
    });
    // Hide the video element, and just show the canvas
    video.hide();
  };
}

function draw(p5:any) {
  return () => {
    p5.image(video, 0, 0, 640, 480);

    // We can call both functions to draw all keypoints and the skeletons
    drawSkeleton(p5);
    drawKeypoints(p5);
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
        p5.fill(189, 66, 85);
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
      p5.stroke(243, 120, 138);
      p5.line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
      p5.strokeWeight(3);
    }
  }
}

function sketch(p5:any) {
  p5.setup = setup(p5);
  p5.draw = draw(p5);
}

const Train = () => {
  const desiredPoses = ["Stand Straight", "Tree Pose", 'Warrior II'];
  const [poseNum, setPoseNum] = useState<number>(0);
  const [pose, setPose] = useState<string>('Unknown Pose');
  const [count, setCount] = useState(0);
  const [done, setDone] = useState<boolean>(false);

  let navigate = useNavigate();
  
    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            if (poses[0]){
              const currentPose = classifyPose(poses[0]?.pose);
              if (currentPose === desiredPoses[poseNum]){
                setCount(count + 1);
                if (count === 6 && poseNum === desiredPoses.length - 2 ){
                  setDone(true)
                } else if (count === 6) {
                  setPoseNum(poseNum + 1);
                }
              } else {
                setCount(0);
              }

              setPose(currentPose);
            }
        }, 1000);
  
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);

  return(
    <PageTemplate colorScheme={ColorScheme.Pink}>
      {done ? 
        <>
          <Title>🎉 Congratulations! 🎉</Title>
          <Text><b>You successfully completed your poses! </b></Text> 
          <Button onClick={() => navigate('/')}>Return to the Home Page</Button>
        </>
      : 
        <>
            <VideoWrapper><ReactP5Wrapper sketch={sketch}></ReactP5Wrapper></VideoWrapper>
            
            <Text><b>DESIRED POSE:</b> {desiredPoses[poseNum]}</Text>
            <Text><b>DETECTED POSE:</b> {pose}</Text>
            <Text><b>Timer:</b> {count}</Text>
        </>
      }
  </PageTemplate>
  )
};

const VideoWrapper = styled.div`
  border: 2px solid ${(props) => props.theme.colors.technovaPinkDark};
  border-radius: 25px;
  overflow: hidden;
  height: 480px;
`;

const Title = styled.h1`
    font-size: 65px;
`;

const Text = styled.p`
  font-size: 20px;
  margin: 15px;
  /* padding: 20px 80px; */
`;

const Button = styled.button`
    font-size: 30px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.technovaBlueDark};
    border: 3px solid ${(props) => props.theme.colors.technovaBlue};
    border-radius: 25px;
    background-color: ${(props) => props.theme.colors.technovaBlueLight};
    padding: 20px 80px;

    transition: ease-in 0.3s;
    &:hover {
        transform: translate(-3px, -3px);
        filter: drop-shadow(3px 3px 2px ${(props) => props.theme.colors.dropShadow});
    }
`;

export default Train;