import React from 'react';
import styled from 'styled-components';

const MyFlexbox = styled.div`
    height: 100%;
    background-color: #666;
    display: flex;
`;

const MyBox1 = styled.div`
    flex: 0 0 auto;
    width: 200px;
    background-color: #ffd300;
`;

const MyBox2 = styled.div`
    flex: auto;
    background-color: #00bd00;
`;

const FlexboxDemo: React.FC = () => {
    return (
        <MyFlexbox>
            <MyBox1 />
            <MyBox2 />
        </MyFlexbox>
    );
};

export default FlexboxDemo;
