import React from 'react';
import { Box, FlexBox, Text } from 'spectacle';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Top = styled.div`
    height: 50%;
    background-color: #ff5400;
    padding: 12px 84px;
`;

const Bottom = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: white;
`;

interface IProps {}

const IntroSlide: React.FC<IProps> = () => {
    return (
        <FlexBox height="100%">
            <Wrapper>
                <Top>
                    <Text
                        color="white"
                        style={{ fontWeight: 400, fontSize: 64 }}
                    >
                        <u>
                            <b>Never</b> <i>disappoint</i>
                        </u>{' '}
                        a designer again with these{' '}
                        <span style={{ fontSize: '1.15em' }}>
                            <b>9</b> simple
                        </span>{' '}
                        CSS tricks!
                    </Text>
                    <Text
                        color="white"
                        style={{
                            fontWeight: 400,
                            textAlign: 'right',
                            fontSize: 42,
                            position: 'relative',
                        }}
                    >
                        (Warning: #2 will give your resume wings)
                        <img
                            src={require('../assets/angel.png')}
                            alt=""
                            style={{
                                position: 'absolute',
                                top: -36,
                                right: 50,
                                height: 60,
                            }}
                        />
                        <img
                            src={require('../assets/wing.png')}
                            alt=""
                            style={{
                                position: 'absolute',
                                top: -36,
                                right: 108,
                                height: 60,
                            }}
                        />
                        <img
                            src={require('../assets/wing.png')}
                            alt=""
                            style={{
                                transform: 'scale(-1, 1)',
                                position: 'absolute',
                                top: -36,
                                right: -4,
                                height: 60,
                            }}
                        />
                    </Text>
                </Top>
                <Bottom>
                    <Box>
                        <Text
                            color="#444"
                            style={{
                                fontSize: 42,
                                textAlign: 'right',
                            }}
                        >
                            A ResQ Lunch & Learn
                        </Text>
                        <Text
                            color="#444"
                            style={{
                                fontSize: 26,
                                textAlign: 'right',
                            }}
                        >
                            Presented By Hans Yu
                        </Text>
                    </Box>
                </Bottom>
            </Wrapper>
        </FlexBox>
    );
};

export default IntroSlide;
