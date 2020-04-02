import React from 'react';
// @ts-ignore
import raw from 'raw.macro';
import { Deck, Slide } from 'spectacle';
import TitleSlide from './components/TitleSlide';
import SquisherSlide from './components/SquisherSlide';
import CodeSlide from './components/CodeSlide';
import IntroSlide from './components/IntroSlide';
import EndSlide from './components/EndSlide';
import GridDemo from './demos/GridDemo';
import FlexboxDemo from './demos/FlexboxDemo';
import CenteringDemo from './demos/CenteringDemo';
import StickyDemo from './demos/StickyDemo';
import TransformFailureDemo from './demos/TransformFailureDemo';
import TransformDemo from './demos/TransformDemo';
import AspectRatioDemo from './demos/AspectRatioDemo';
import RelativeOffsetDemo from './demos/RelativeOffsetDemo';
import RelativeOffsetDemo2 from './demos/RelativeOffsetDemo2';
import HeadingWrapDemo from './demos/HeadingWrapDemo';

const THEME = {
    colors: {
        primary: '#ff5400',
        secondary: '#ff5400',
        tertiary: 'white',
        quaternary: 'green',
        quinary: 'blue',
    },
};

const Presentation: React.FC = () => {
    return (
        <Deck theme={THEME}>
            <Slide>
                <IntroSlide />
            </Slide>
            <Slide>
                <TitleSlide
                    ordinal={1}
                    title="I need a responsive grid that fits the screen width."
                />
            </Slide>
            <Slide>
                <SquisherSlide demo={<GridDemo />} />
            </Slide>
            <Slide>
                <CodeSlide source={raw('./demos/GridDemo.tsx')} />
            </Slide>
            <Slide>
                <TitleSlide
                    ordinal={2}
                    title="I need 2 boxes, one is 200px wide, the other fills the rest."
                />
            </Slide>
            <Slide>
                <SquisherSlide demo={<FlexboxDemo />} />
            </Slide>
            <Slide>
                <CodeSlide source={raw('./demos/FlexboxDemo.tsx')} />
            </Slide>
            <Slide>
                <TitleSlide
                    ordinal={3}
                    title="I need this text centered, horizontally and vertically."
                />
            </Slide>
            <Slide>
                <SquisherSlide demo={<CenteringDemo />} />
            </Slide>
            <Slide>
                <CodeSlide source={raw('./demos/CenteringDemo.tsx')} />
            </Slide>
            <Slide>
                <TitleSlide
                    ordinal={4}
                    title="I need this ad to stick at the top when the customer scrolls down."
                />
            </Slide>
            <Slide>
                <SquisherSlide demo={<StickyDemo />} />
            </Slide>
            <Slide>
                <CodeSlide source={raw('./demos/StickyDemo.tsx')} />
            </Slide>
            <Slide>
                <TitleSlide
                    ordinal={5}
                    title="I need 200 balls to bounce up and down, smoothly."
                />
            </Slide>
            <Slide>
                <SquisherSlide demo={<TransformFailureDemo />} />
            </Slide>
            <Slide>
                <CodeSlide source={raw('./demos/TransformFailureDemo.tsx')} />
            </Slide>
            <Slide>
                <SquisherSlide demo={<TransformDemo />} />
            </Slide>
            <Slide>
                <CodeSlide source={raw('./demos/TransformDemo.tsx')} />
            </Slide>
            <Slide>
                <TitleSlide
                    ordinal={6}
                    title="I need everything in the grid to have a fixed aspect ratio."
                />
            </Slide>
            <Slide>
                <SquisherSlide demo={<AspectRatioDemo />} />
            </Slide>
            <Slide>
                <CodeSlide source={raw('./demos/AspectRatioDemo.tsx')} />
            </Slide>
            <Slide>
                <TitleSlide
                    ordinal={7}
                    title="I need a divider with fixed margins above and below, and a label in the middle."
                />
            </Slide>
            <Slide>
                <SquisherSlide demo={<RelativeOffsetDemo />} />
            </Slide>
            <Slide>
                <CodeSlide source={raw('./demos/RelativeOffsetDemo.tsx')} />
            </Slide>
            <Slide>
                <TitleSlide
                    ordinal={8}
                    title="I need a button fixed to the middle of the screen."
                />
            </Slide>
            <Slide>
                <SquisherSlide demo={<RelativeOffsetDemo2 />} />
            </Slide>
            <Slide>
                <CodeSlide source={raw('./demos/RelativeOffsetDemo2.tsx')} />
            </Slide>
            <Slide>
                <TitleSlide
                    ordinal={9}
                    title={
                        <>
                            <span style={{ display: 'inline-block' }}>
                                I need this long text to wrap exactly right
                                here,
                            </span>
                            <span style={{ display: 'inline-block' }}>
                                can you do that for me?
                            </span>
                        </>
                    }
                />
            </Slide>
            <Slide>
                <SquisherSlide demo={<HeadingWrapDemo />} />
            </Slide>
            <Slide>
                <CodeSlide source={raw('./demos/HeadingWrapDemo.tsx')} />
            </Slide>
            <Slide>
                <EndSlide />
            </Slide>
        </Deck>
    );
};

export default Presentation;
