import React from 'react';
import styled from 'styled-components';

const MyBox = styled.div`
    height: 100%;
    background-color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MyText = styled.div`
    max-width: 600px;
    font-size: 60px;
    color: white;
    text-align: center;
`;

const CenteringDemo: React.FC = () => {
    return (
        <MyBox>
            <MyText>
                Designer said I need to be centered. How am I doing? Do I pass?
            </MyText>
        </MyBox>
    );
};

export default CenteringDemo;
