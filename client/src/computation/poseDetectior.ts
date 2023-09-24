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

const classifyPose = (landmarks: any, output_image: any, display: any) => {

}
    
    // # Initialize the label of the pose. It is not known at this stage.
    // label = 'Unknown Pose'

    // # Specify the color (Red) with which the label will be written on the image.
    // color = (0, 0, 255)
    
    // # Calculate the required angles.
    // #----------------------------------------------------------------------------------------------------------------
    
    // # Get the angle between the left shoulder, elbow and wrist points. 
    // left_elbow_angle = calculateAngle(landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value],
    //                                   landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value],
    //                                   landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value])
    
    // # Get the angle between the right shoulder, elbow and wrist points. 
    // right_elbow_angle = calculateAngle(landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value],
    //                                    landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value],
    //                                    landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value])   
    
    // # Get the angle between the left elbow, shoulder and hip points. 
    // left_shoulder_angle = calculateAngle(landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value],
    //                                      landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value],
    //                                      landmarks[mp_pose.PoseLandmark.LEFT_HIP.value])

    // # Get the angle between the right hip, shoulder and elbow points. 
    // right_shoulder_angle = calculateAngle(landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value],
    //                                       landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value],
    //                                       landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value])

    // # Get the angle between the left hip, knee and ankle points. 
    // left_knee_angle = calculateAngle(landmarks[mp_pose.PoseLandmark.LEFT_HIP.value],
    //                                  landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value],
    //                                  landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value])

    // # Get the angle between the right hip, knee and ankle points 
    // right_knee_angle = calculateAngle(landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value],
    //                                   landmarks[mp_pose.PoseLandmark.RIGHT_KNEE.value],
    //                                   landmarks[mp_pose.PoseLandmark.RIGHT_ANKLE.value])
    
    // #----------------------------------------------------------------------------------------------------------------
    // # Check if it is the warrior II pose or the T pose:
    // #   both arms should be straight and shoulders should be at the specific angle.
    // #----------------------------------------------------------------------------------------------------------------
    
    // # Check if the both arms are straight.
    // if (150 < left_elbow_angle < 200) and (150 < right_elbow_angle < 200):

    //     # Check if shoulders are at the required angle.
    //     if (80 < left_shoulder_angle < 110) and (80 < right_shoulder_angle < 110):
    //         #--------------------------------------------------------------------------------------------------------
    //         # Check if it is the warrior II pose.
    //         #--------------------------------------------------------------------------------------------------------
    //         # Check if one leg is straight.
    //         if (150 < left_knee_angle < 200) or (150 < right_knee_angle < 200):
    //             # Check if the other leg is bended at the required angle.
    //             if (left_knee_angle > 90 and left_knee_angle < 120) or (right_knee_angle > 90 and right_knee_angle < 120):
    //                 # Specify the label of the pose that is Warrior II pose.
    //                 label = 'Warrior II Pose' 
                        
    //         #--------------------------------------------------------------------------------------------------------
    //         # Check if it is the T pose.
    //         #--------------------------------------------------------------------------------------------------------
    //         # Check if both legs are straight
    //         if left_knee_angle > 160 and left_knee_angle < 195 and right_knee_angle > 160 and right_knee_angle < 195:
    //             label = 'T Pose'

    // #----------------------------------------------------------------------------------------------------------------
    // # Check if it is the tree pose.
    // #----------------------------------------------------------------------------------------------------------------
    // # Check if one leg is straight
    // if ((150 < left_knee_angle < 200) and (25 < right_knee_angle < 90)) or ((150 < right_knee_angle < 200) and (25 < left_knee_angle < 90)):
    //     label = 'Tree Pose'
    
    // #----------------------------------------------------------------------------------------------------------------
    // # Check if the pose is classified successfully
    // if label != 'Unknown Pose':
        
    //     # Update the color (to green) with which the label will be written on the image.
    //     color = (0,0,255)  
    
    // # Write the label on the output image. 
    // cv2.putText(output_image, label, (10, 30),cv2.FONT_HERSHEY_PLAIN, 2, color, 5)
    
    // # TODO: delete these
    // print(label)
    // print(left_elbow_angle, right_elbow_angle, left_shoulder_angle, right_shoulder_angle, left_knee_angle, right_knee_angle)

    // # Check if the resultant image is specified to be displayed.
    // if display:
    //     # Display the resultant image.
    //     plt.figure(figsize=[10,10])
    //     plt.imshow(output_image[:,:,::-1]);plt.title("Output Image");plt.axis('off');
        
    // else:
    //     # Return the output image and the classified label.
    //     return output_image, label






// image = cv2.imread('./test-cases/tree-pose4.jpg')
// output_image, landmarks = detectPose(image, pose, display=False)
// if landmarks:
//     classifyPose(landmarks, output_image, display=True) 


export {classifyPose, calculateAngle};