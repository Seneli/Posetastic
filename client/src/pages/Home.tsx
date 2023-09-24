import styled from 'styled-components';
import {PageTemplate} from "../components";
import { useNavigate } from 'react-router-dom';
import {ColorScheme} from "../types/enums";
import yoga from "../assets/yoga.svg";

const Home = () => {
    let navigate = useNavigate();
    
    return (
        <PageTemplate colorScheme={ColorScheme.Green}>
           <Image src={yoga} alt="yoga"></Image>
            <Title>Welcome to Posetastic!</Title>
            <Text>Click the buttons to learn more!</Text>
            <ButtonFlex>
                <Button onClick={() => navigate('/instructions')}>Start</Button>
                <Button onClick={() => navigate('/about')}>About us</Button>
            </ButtonFlex>
        </PageTemplate>
    )
};
const Image = styled.img`
    padding-top: 30px`
;

const Title = styled.h1`
    font-size: 80px;
    font-family: 'Urbanist', sans-serif;
    margin-bottom: 30px;

    @media (max-width: 1000px) {
        font-size: 60px;
    }
`;

const Text = styled.p`
    margin: 0;
    padding-bottom: 50px;
    font-size: 35px;
    font-family: 'Quicksand', sans-serif;
`;

const ButtonFlex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
`;

const Button = styled.button`
    font-size: 20px;
    font-family: 'Quicksand', sans-serif;
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



export default Home;