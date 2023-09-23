import styled from 'styled-components';
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";
import {PageTemplate} from "../components";
import {ColorScheme} from "../types/enums";

declare const p5: any

function setup(p5:any) {
  return () => {
    p5.createCanvas(600, 400, p5.WEBGL);
    p5.createCapture();
  };
}

function draw(p5:any) {
  return () => {
    // p5.background(250);
    // p5.normalMaterial();
    // p5.push();
    // p5.rotateZ(p5.frameCount * 0.01);
    // p5.rotateX(p5.frameCount * 0.01);
    // p5.rotateY(p5.frameCount * 0.01);
    // p5.plane(100);
    // p5.pop();
  };
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