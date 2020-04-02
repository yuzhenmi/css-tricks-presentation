import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Presentation from './Presentation';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        > div > div > div > div > div > div {
            overflow: hidden;
        }
    }
    * {
        box-sizing: border-box;
    }
`;

const Wrapper = styled.div``;

function App() {
    return (
        <Wrapper>
            <GlobalStyles />
            <Presentation />
        </Wrapper>
    );
}

export default App;
