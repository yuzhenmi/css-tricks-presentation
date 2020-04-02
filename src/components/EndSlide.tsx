import React from 'react';
import { FlexBox, Text, Box } from 'spectacle';

interface IProps {}

const EndSlide: React.FC<IProps> = () => {
    return (
        <FlexBox height="100%">
            <Box>
                <Text style={{ textAlign: 'center' }}>
                    This is the end of the presentation, thank you!
                </Text>
                <Text style={{ textAlign: 'center', fontSize: 26 }}>
                    <span>
                        This presentation was built in React with spectacle
                    </span>
                    <br />
                    <span>
                        (
                        <a
                            href="https://github.com/FormidableLabs/spectacle"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'inherit' }}
                        >
                            https://github.com/FormidableLabs/spectacle
                        </a>
                        )
                    </span>
                </Text>
            </Box>
        </FlexBox>
    );
};

export default EndSlide;
