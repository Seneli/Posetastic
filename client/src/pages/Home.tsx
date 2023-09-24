import styled from 'styled-components';
import {PageTemplate} from "../components";
import { useNavigate } from 'react-router-dom';
import {ColorScheme} from "../types/enums";
import star from "../assets/star.svg";

const Home = () => {
    let navigate = useNavigate();
    
    return (
        <PageTemplate colorScheme={ColorScheme.Green}>
           <img className = "star" src={star} alt="star"></img>
            <Title>Welcome to Posetastic!</Title>
            <Text>Click the following buttons to learn more</Text>
            <ButtonFlex>
                <Button onClick={() => navigate('/instructions')}>Train with us!</Button>
                <Button onClick={() => navigate('/about')}>About us</Button>
            </ButtonFlex>
        </PageTemplate>
    )
};

const Title = styled.h1`
    font-size: 70px;
`;

const Text = styled.p`
    font-size: 30px;
    padding-bottom: 40px;
`;

const ButtonFlex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
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

export default Home;