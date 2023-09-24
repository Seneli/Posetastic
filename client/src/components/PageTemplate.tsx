import { ReactNode, useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import {ColorScheme} from "../types/enums";

interface PageTemplateProps {
    colorScheme: ColorScheme;
    children: ReactNode;
}

const PageTemplate = ({colorScheme, children}: PageTemplateProps) => {
    const themeContext = useTheme();
    let background: string = "";
    let border: string = "";

    switch(colorScheme) {
        case ColorScheme.Pink:
            background = themeContext.colors.technovaPinkLight;
            border = themeContext.colors.technovaPink;
            break;
        case ColorScheme.Blue:
            background = themeContext.colors.technovaBlueLight;
            border = themeContext.colors.technovaBlue;
            break;
        case ColorScheme.Green:
            background = themeContext.colors.technovaGreenLight;
            border = themeContext.colors.technovaGreen;
            break;
        default:
            background = themeContext.colors.technovaGreenLight;
            border = themeContext.colors.technovaGreen;
            break;
    }

    return (
        <PageBody>
            <CenterDiv background={background} border={border}>{children}</CenterDiv>
        </PageBody>
    )
}

const PageBody = styled.div`
    display: flex;
    flex-direction: column;
    background-color: "#fff";
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const CenterDiv = styled.div<{ background: string; border: string }>`
    width: 80%;
    height: 80%;
    max-width: 860px;
    max-height: 700px;
    min-width: 650px;
    min-height: 600px;
    border-radius: 50px;
    filter: drop-shadow(5px 5px 2px ${(props) => props.theme.colors.dropShadow});
    background-color: ${props => props.background};
    border: 2px solid ${props => props.border}; //#479d6583;
    padding: 2em;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;
`;


export default PageTemplate;