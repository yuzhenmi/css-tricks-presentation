import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexBox } from 'spectacle';

const Wrapper = styled.div`
    flex: auto;
    height: 100%;
    overflow: hidden;
    display: flex;
`;

const DemoWrapper = styled.div`
    flex: auto;
    overflow: auto;
    padding-right: 18px;
`;

const Squisher = styled.div`
    flex: 0 0 auto;
    background-color: #ff5400;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    box-shadow: inset 0 -6px 36px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    transition: 0.1s ease;
    user-select: none;
    cursor: pointer;
    :hover {
        box-shadow: inset 0 -6px 36px rgba(0, 0, 0, 0.45);
    }
    :active {
        box-shadow: inset 0 -6px 36px rgba(0, 0, 0, 0.15);
    }
`;

interface IProps {
    demo: React.ReactNode;
}

const CenteringSlide: React.FC<IProps> = ({ demo }) => {
    const counters = [];
    for (let n = 0; n < 60; n++) {
        counters.push(n);
    }
    const [squishAmount, setSquishAmount] = useState(10);
    return (
        <FlexBox height="100%">
            <Wrapper>
                <DemoWrapper
                    style={squishAmount >= 100 ? { paddingRight: 0 } : {}}
                >
                    {demo}
                </DemoWrapper>
                <Squisher
                    style={{
                        width: `${squishAmount}%`,
                        fontSize: 18 + (120 * squishAmount) / 100,
                    }}
                    onClick={() =>
                        setSquishAmount(Math.min(squishAmount + 10, 100))
                    }
                >
                    {squishAmount < 100 ? 'SQUISH' : 'YOU DID IT!'}
                </Squisher>
            </Wrapper>
        </FlexBox>
    );
};

export default CenteringSlide;
