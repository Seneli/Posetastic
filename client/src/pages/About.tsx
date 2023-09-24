import styled from 'styled-components';
import { PageTemplate } from "../components";
import { ColorScheme } from "../types/enums";
import star from "../assets/star.svg";

const About = () => (
  <PageTemplate colorScheme={ColorScheme.Blue}>
    <Title>About Posetastic</Title>
    <Section>
      <Subheading>How It Works 📸🧘‍♀️</Subheading>
      <AboutText>
        Posetastic will guide you through various yoga poses designed to help you unwind, relax, and take a break from stress. We utilize your device's camera to provide real-time feedback and pose detection.
      </AboutText>
    </Section>
    <Section>
      <Subheading>Why Yoga? 🌿</Subheading>
      <AboutText>
        Yoga is more than just physical exercise; it's a holistic practice that harmonizes the mind, body, and soul. 
      </AboutText>
    </Section>
    <StarImage src={star} alt="star" />
  </PageTemplate>
);


const Title = styled.h1`
  font-size: 43px;
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: 'Urbanist', sans-serif;

`;

const Section = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Subheading = styled.h2`
  font-size: 30px;
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: 'Quicksand', sans-serif;
`;

const AboutText = styled.p`
  font-size: 28px;
  margin-bottom: 0px;
  margin-left: 50px;
  margin-right: 50px;
  font-family: 'Quicksand', sans-serif;
`;

const StarImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100px;
`;

export default About;
