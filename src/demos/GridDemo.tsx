import React from 'react';
import styled from 'styled-components';

const MyGrid = styled.div`
    background-color: #666;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 18px;
    padding: 18px;
`;

const Item = styled.div`
    img {
        width: 100%;
    }
`;

const GridDemo: React.FC = () => {
    const counters = [];
    for (let n = 0; n < 60; n++) {
        counters.push(n);
    }
    return (
        <MyGrid>
            {counters.map(counter => (
                <Item key={counter}>
                    <img src={require('../assets/angel.png')} alt="" />
                </Item>
            ))}
        </MyGrid>
    );
};

export default GridDemo;
