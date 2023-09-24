const calculateAngle = (landmark1: any, landmark2: any, landmark3: any) => {
    if (landmark1.confidence < 0.2 || landmark2.confidence < 0.2 || landmark3.confidence < 0.2) {
        return -1;
    }
    const x1 = landmark1.x;
    const x2 = landmark2.x;
    const x3 = landmark3.x;
    const y1 = landmark1.y;
    const y2 = landmark2.y;
    const y3 = landmark3.y;
     
    let angle = ((Math.atan2(y3-y2, x3-x2) - Math.atan2(y1-y2,x1-x2)) * 180) / Math.PI;

    if (angle < 0) {
        angle += 360
    }
    if (angle > 200) {
        angle = 360 - angle;
    }
    return angle;
}


/**
 * 
 * @param pose 
 * @returns The classified pose label of the person in the output_image.
*/

const classifyPose = (pose: any) => {
    // Calculate the required angles 
    // console.log(pose);
    
    const leftElbowAngle = calculateAngle(pose.leftShoulder, pose.leftElbow, pose.leftWrist);
    const rightElbowAngle = calculateAngle(pose.rightShoulder, pose.rightElbow, pose.rightWrist);
    const leftShoulderAngle = calculateAngle(pose.leftElbow, pose.leftShoulder, pose.leftHip);
    const rightShoulderAngle = calculateAngle(pose.rightHip, pose.rightShoulder, pose.rightElbow);
    const leftKneeAngle = calculateAngle(pose.leftHip, pose.leftKnee, pose.leftAnkle);
    const rightKneeAngle = calculateAngle(pose.rightHip, pose.rightKnee, pose.rightAnkle);
    
    console.log("LEFT ELBOW", leftElbowAngle);
    console.log("right ELBOW", rightElbowAngle);
    // console.log("LEFT SHOULDER", leftShoulderAngle);
    // console.log("right SHOULDER", rightShoulderAngle);
    console.log("LEFT KNEE", leftKneeAngle);
    console.log("right KNEE", rightKneeAngle);

    if (leftElbowAngle === -1 || rightElbowAngle === -1 || leftShoulderAngle === -1 || rightShoulderAngle === -1){
        return "Pose Unidentifiable: Make sure we can see your joints!"
    }

    // Identify the pose
    // Check if the both arms are straight.

    if (150 < leftElbowAngle && leftElbowAngle < 200 && 150 < rightElbowAngle && rightElbowAngle < 200){
        // Check if warrior 2 pose 
        // CHECK IF LEGS R STRAIGHT
        if ((150 < leftKneeAngle && leftKneeAngle < 200) || (150 < rightKneeAngle && rightKneeAngle < 200)){
            // Check if the other leg is bended at the required angle.
            if ((leftKneeAngle > 90 && leftKneeAngle < 150) || (rightKneeAngle > 90 && rightKneeAngle < 150)){
                    // Specify the label of the pose that is Warrior II pose.
                    return 'Warrior II' ;
            }

            // Check if T pose
            if ((160 < leftKneeAngle && leftKneeAngle < 195) && (160 < rightKneeAngle && rightKneeAngle < 195)) {
                return 'T Pose';
            }
        }                
    }
    
    //Check if one leg is straight and one leg is bent (tree pose)
    if (((150 < leftKneeAngle && leftKneeAngle < 200) && (25 < rightKneeAngle && rightKneeAngle < 90)) || ((150 < rightKneeAngle && rightKneeAngle < 200) && (25 < leftKneeAngle && leftKneeAngle < 90))){
        return 'Tree Pose';               
    }

    if ((150 < leftKneeAngle && leftKneeAngle < 200) || (150 < rightKneeAngle && rightKneeAngle < 200)){
        return "legs str8";
    }

    return 'Unknown Pose';
}

export {classifyPose, calculateAngle};