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

export {classifyPose, calculateAngle};