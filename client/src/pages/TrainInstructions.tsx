import styled from 'styled-components';
import {PageTemplate} from "../components";
import {ColorScheme} from "../types/enums";
import { useNavigate } from 'react-router-dom';

const TrainInstructions = () => {
    let navigate = useNavigate();

    return (
        <PageTemplate colorScheme={ColorScheme.Blue}>

            <Instructions>
                <Instruction>
                    Hold the pose named at the bottom of the screen for 6 seconds straight
                </Instruction>

                <Instruction>
                    The timer will restart every time you falter!
                </Instruction>

                <Instruction>
                    There are 3 poses so do your best to let go and enjoy!
                </Instruction>
            </Instructions>
            <Button onClick={() => navigate('/train')}>Start Training!</Button>
        </PageTemplate>
    )
};

const Instructions = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Quicksand', sans-serif;
    gap: 30px;
    /* height: 80%; */
    align-items: center;
    padding-bottom: 40px;
`;

const Instruction = styled.div`
    padding: 30px;
    font-family: 'Quicksand', sans-serif;
    border-radius: 20px;
    font-size: 30px;
    width: 80%;
    text-align: center;
    /* border: 1px solid ${(props) => props.theme.colors.technovaPink}; */
    background-color: ${(props) => props.theme.colors.technovaBlueMid};
    filter: drop-shadow(3px 3px 2px ${(props) => props.theme.colors.dropShadow});
    overflow-y: hidden;
`;

const Button = styled.button`
    font-size: 20px;
    font-weight: bold;
    font-family: 'Quicksand', sans-serif;
    color: ${(props) => props.theme.colors.technovaPinkDark};
    border: 3px solid ${(props) => props.theme.colors.technovaPink};
    border-radius: 25px;
    background-color: ${(props) => props.theme.colors.technovaPinkLight};
    padding: 20px 80px;

    transition: ease-in 0.3s;
    &:hover {
        transform: translate(-3px, -3px);
        filter: drop-shadow(3px 3px 2px ${(props) => props.theme.colors.dropShadow});
    }
`;

export default TrainInstructions;