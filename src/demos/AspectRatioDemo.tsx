import React from 'react';
import styled from 'styled-components';

const MyGrid = styled.div`
    background-color: #666;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 18px;
    padding: 18px;
`;

const Item = styled.div`
    padding-bottom: 100%;
    background-color: white;
`;

const GridDemo: React.FC = () => {
    const counters = [];
    for (let n = 0; n < 60; n++) {
        counters.push(n);
    }
    return (
        <MyGrid>
            {counters.map(counter => (
                <Item key={counter} />
            ))}
        </MyGrid>
    );
};

export default GridDemo;
