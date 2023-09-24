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
 * @param landmarks: A list of detected landmarks of the person whose pose needs to be classified.
 * @param output_image: A image of the person with the detected pose landmarks drawn.
 * @param display: A boolean value that is if set to true the function displays the resultant image with the pose label 
 *                 written on it and returns nothing. 
 * @returns {
*        outputImage: The image with the detected pose landmarks drawn and pose label written.
*        label: The classified pose label of the person in the output_image.
*  }
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
    
    console.log(leftElbowAngle);

    if (leftElbowAngle === -1 || rightElbowAngle === -1 || leftShoulderAngle === -1 || rightShoulderAngle === -1){
        return "Pose Unidentifiable: Make sure we can see your joints!"
    }

    // Identify the pose
    // Check if the both arms are straight.
    if ((150 < leftElbowAngle && leftElbowAngle < 200) && (150 < rightElbowAngle && rightElbowAngle < 200)){
        if ((80 < leftShoulderAngle && leftShoulderAngle < 110) && (80 < rightShoulderAngle && rightShoulderAngle < 110)) {
            // Check if warrior 2 pose 
            // CHECK IF LEGS R STRAIGHT
            if ((150 < leftKneeAngle && leftKneeAngle < 200) || (150 < rightKneeAngle && rightKneeAngle < 200)){
                // Check if the other leg is bended at the required angle.
                if ((leftKneeAngle > 90 && leftKneeAngle < 120) || (rightKneeAngle > 90 && rightKneeAngle < 120)){
                        // Specify the label of the pose that is Warrior II pose.
                        return 'Warrior II Pose';
                }
            }

            // Check if T pose
            if ((160 < leftKneeAngle && leftKneeAngle < 195) && (160 < rightKneeAngle && rightKneeAngle < 195)) {
                return 'T Pose';
            }
        }                
    }

export {classifyPose, calculateAngle};