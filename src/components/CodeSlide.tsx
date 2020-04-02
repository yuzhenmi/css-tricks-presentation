import React from 'react';

import { CodePane } from 'spectacle';

interface IProps {
    source: string;
}

const CodeSlide: React.FC<IProps> = ({ source }) => {
    return (
        <CodePane language="ts" autoFillHeight>
            {source}
        </CodePane>
    );
};

export default CodeSlide;
