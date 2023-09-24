// import math
// import cv2
// import numpy as np
// from time import time
// import mediapipe as mp
// import matplotlib.pyplot as plt
// from IPython.display import HTML

// # Initializing mediapipe pose class.
// mp_pose = mp.solutions.pose
// # Setting up the Pose function.
// pose = mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5)
// # Initializing mediapipe drawing class, useful for annotation.
// mp_drawing = mp.solutions.drawing_utils 

/**
 * 
 * @param image: The input image with a prominent person whose pose landmarks needs to be detected.
 * @param pose: The pose setup function required to perform the pose detection. 
 * @param display: A boolean value that is if set to true the function displays the original input image, the resultant image, 
 *                 and the pose landmarks in 3D plot and returns nothing. 
 * @returns {
 *        outputImage: The input image with the detected pose landmarks drawn.
 *        landmarks: A list of detected landmarks converted into their original scale
 *  }
 */
const detectPose = (image:any, pose: any, display:boolean=true) => {

}
    // # Create a copy of the input image.
    // output_image = image.copy()
    
    // # Convert the image from BGR into RGB format.
    // imageRGB = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    
    // # Perform the Pose Detection.
    // results = pose.process(imageRGB)
    
    // # Retrieve the height and width of the input image.
    // height, width, _ = image.shape
    
    // # Initialize a list to store the detected landmarks.
    // landmarks = []
    
    // # Check if any landmarks are detected.
    // if results.pose_landmarks:    
    //     # Draw Pose landmarks on the output image.
    //     mp_drawing.draw_landmarks(image=output_image, landmark_list=results.pose_landmarks,
    //                               connections=mp_pose.POSE_CONNECTIONS)
        
    //     # Iterate over the detected landmarks.
    //     for landmark in results.pose_landmarks.landmark:            
    //         # Append the landmark into the list.
    //         landmarks.append((int(landmark.x * width), int(landmark.y * height),
    //                               (landmark.z * width)))
    
    // # Check if the original input image and the resultant image are specified to be displayed.
    // if display:    
    //     # Display the original input image and the resultant image.
    //     plt.figure(figsize=[22,22])
    //     plt.subplot(121);plt.imshow(image[:,:,::-1]);plt.title("Original Image");plt.axis('off');
    //     plt.subplot(122);plt.imshow(output_image[:,:,::-1]);plt.title("Output Image");plt.axis('off');
        
    //     # Also Plot the Pose landmarks in 3D.
    //     mp_drawing.plot_landmarks(results.pose_world_landmarks, mp_pose.POSE_CONNECTIONS)
        
    // # Otherwise
    // else:        
    //     # Return the output image and the found landmarks.
    //     return output_image, landmarks
    
/**
 * 
 * @param landmark1: The first landmark containing the x,y and z coordinates.
 * @param landmark2: The second landmark containing the x,y and z coordinates.
 * @param landmark3: The third landmark containing the x,y and z coordinates.
 * @returns angle: The calculated angle between the three landmarks.
 */
const calculateAngle = (landmark1: any, landmark2: any, landmark3: any) => {

}

    // # Get the required landmarks coordinates.
    // x1, y1, _ = landmark1
    // x2, y2, _ = landmark2
    // x3, y3, _ = landmark3

    // # Calculate the angle between the three points
    // angle = math.degrees(math.atan2(y3 - y2, x3 - x2) - math.atan2(y1 - y2, x1 - x2))
    
    // # Check if the angle is less than zero.
    // if angle < 0:
    //     # Add 360 to the found angle.
    //     angle += 360
    
    // if angle > 200:
    //     angle = 360 - angle;

    // # Return the calculated angle.
    // return angle

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


export {detectPose, classifyPose, calculateAngle};