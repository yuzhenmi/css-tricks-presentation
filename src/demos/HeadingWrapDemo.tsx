import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    background-color: #666;
    padding: 36px;
`;

const MyHeading = styled.div`
    color: white;
    font-size: 28px;
`;

const MyTextSegment = styled.span`
    display: inline-block;
`;

const HeadingWrapDemo: React.FC = () => {
    return (
        <Wrapper>
            <MyHeading>
                <MyTextSegment>
                    Here is a long text that wraps exactly here,&nbsp;
                </MyTextSegment>
                <MyTextSegment>
                    but only when there is not enough space.
                </MyTextSegment>
            </MyHeading>
        </Wrapper>
    );
};

export default HeadingWrapDemo;
