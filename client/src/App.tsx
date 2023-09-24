import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Theme from './Theme';
import {
  Home,
  TrainInstructions,
  Train,
  About
} from './pages';

const App = () => (
  <Theme>
    <GlobalStyle />
    <Router>
      <PageWrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/instructions" element={<TrainInstructions />} />
          <Route path='/train' element={<Train />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </PageWrapper>
    </Router>
  </Theme>
);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", "Source Sans Pro", sans-serif;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

export default App;