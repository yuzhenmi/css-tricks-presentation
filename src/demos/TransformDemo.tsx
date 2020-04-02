import React from 'react';
import styled, { keyframes } from 'styled-components';

const MyBox = styled.div`
    height: 100%;
    background-color: #666;
    position: relative;
`;

const bounce = keyframes`
  0% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }

  50% {
    transform: translateY(calc(-90vh + 64px));
    animation-timing-function: ease-in;
  }

  100% {
    transform: translateY(0);
  }
`;

const Ball = styled.div`
    flex: 0 0 auto;
    width: 4%;
    margin-left: 0.5%;
    border-radius: 50%;
    box-shadow: inset -12px -12px 12px rgba(0, 0, 0, 0.25);
    position: absolute;
    bottom: 0;
    animation-name: ${bounce};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    :after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;

const COLOURS = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];

const TransformDemo: React.FC = () => {
    const counters = [];
    for (let n = 0; n < 200; n++) {
        counters.push(n);
    }
    return (
        <MyBox>
            {counters.map(counter => (
                <Ball
                    key={counter}
                    style={{
                        backgroundColor: COLOURS[counter % COLOURS.length],
                        left: `${5 * (counter % 20)}%`,
                        animationDelay: `${Math.random() + 2}s`,
                    }}
                />
            ))}
        </MyBox>
    );
};

export default TransformDemo;
