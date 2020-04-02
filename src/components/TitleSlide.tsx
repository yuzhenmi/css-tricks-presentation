import React from 'react';
import { Box, FlexBox, Heading, Text } from 'spectacle';

interface IProps {
    ordinal: number;
    title: React.ReactNode;
}

const TitleSlide: React.FC<IProps> = ({ ordinal, title }) => {
    return (
        <FlexBox height="100%">
            <Box>
                <Heading>#{ordinal} Designer says:</Heading>
                <Text style={{ textAlign: 'center' }}>{title}</Text>
            </Box>
        </FlexBox>
    );
};

export default TitleSlide;
