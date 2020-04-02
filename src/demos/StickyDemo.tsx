import React from 'react';
import styled from 'styled-components';
import IntroSlide from '../components/IntroSlide';

const Wrapper = styled.div`
    background-color: #666;
    height: 100%;
    padding: 36px;
    overflow: auto;
    > * {
        margin-bottom: 36px;
        :last-child {
            margin-bottom: 0;
        }
    }
`;

const MyAd = styled.div`
    height: 440px;
    position: sticky;
    top: 0;
    > * {
        transform: scale(0.5);
        transform-origin: center top;
        height: 200%;
    }
`;

const MyText = styled.div`
    color: white;
    font-size: 24px;
`;

const StickyDemo: React.FC = () => {
    return (
        <Wrapper>
            <MyText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Bibendum neque egestas congue quisque egestas diam in arcu
                cursus. Eget mauris pharetra et ultrices neque. Amet luctus
                venenatis lectus magna fringilla urna porttitor. Et tortor
                consequat id porta nibh venenatis cras. Eget nunc scelerisque
                viverra mauris. Consectetur purus ut faucibus pulvinar elementum
                integer enim. Sem fringilla ut morbi tincidunt augue interdum.
                Turpis egestas maecenas pharetra convallis. Consectetur lorem
                donec massa sapien faucibus et. Nulla aliquet enim tortor at
                auctor. Elementum curabitur vitae nunc sed velit dignissim
                sodales ut. Mus mauris vitae ultricies leo integer malesuada
                nunc. Interdum velit laoreet id donec ultrices tincidunt.
                Porttitor rhoncus dolor purus non enim praesent elementum
                facilisis. Ultrices gravida dictum fusce ut placerat orci nulla.
                A pellentesque sit amet porttitor. Volutpat consequat mauris
                nunc congue. Nibh ipsum consequat nisl vel.
            </MyText>
            <MyText>
                Nunc lobortis mattis aliquam faucibus purus. Duis tristique
                sollicitudin nibh sit amet commodo nulla facilisi. Mi bibendum
                neque egestas congue quisque. Tempus quam pellentesque nec nam
                aliquam sem et tortor. Blandit cursus risus at ultrices mi
                tempus. Pellentesque diam volutpat commodo sed egestas.
                Malesuada fames ac turpis egestas sed tempus urna et. Enim sit
                amet venenatis urna cursus eget. Ridiculus mus mauris vitae
                ultricies leo. Dignissim enim sit amet venenatis urna cursus
                eget. Fringilla ut morbi tincidunt augue interdum velit euismod
                in. Blandit aliquam etiam erat velit. Aliquam faucibus purus in
                massa tempor nec feugiat. Volutpat consequat mauris nunc congue
                nisi vitae suscipit tellus mauris.
            </MyText>
            <MyAd>
                <IntroSlide />
            </MyAd>
            <MyText>
                Orci porta non pulvinar neque laoreet. Turpis egestas integer
                eget aliquet nibh praesent tristique magna. Platea dictumst
                vestibulum rhoncus est pellentesque. Pellentesque elit
                ullamcorper dignissim cras tincidunt lobortis feugiat. Massa
                tempor nec feugiat nisl pretium fusce id velit ut. Adipiscing
                elit duis tristique sollicitudin. Faucibus scelerisque eleifend
                donec pretium vulputate. Donec et odio pellentesque diam
                volutpat commodo sed egestas. A diam sollicitudin tempor id eu
                nisl nunc mi ipsum. Feugiat vivamus at augue eget arcu dictum
                varius. Magnis dis parturient montes nascetur ridiculus mus.
                Nibh tortor id aliquet lectus proin nibh. Purus ut faucibus
                pulvinar elementum integer enim. Vel risus commodo viverra
                maecenas.
            </MyText>
            <MyText>
                Turpis egestas pretium aenean pharetra magna ac placerat
                vestibulum. Eros in cursus turpis massa tincidunt dui ut ornare
                lectus. Nunc consequat interdum varius sit amet mattis vulputate
                enim. Nulla pharetra diam sit amet nisl suscipit adipiscing.
                Bibendum est ultricies integer quis auctor elit sed vulputate
                mi. Sagittis id consectetur purus ut faucibus pulvinar elementum
                integer. Diam quis enim lobortis scelerisque fermentum dui
                faucibus. Nunc vel risus commodo viverra. Sed libero enim sed
                faucibus turpis. Et tortor at risus viverra adipiscing at in
                tellus. Faucibus purus in massa tempor nec feugiat nisl.
                Sagittis orci a scelerisque purus. Commodo sed egestas egestas
                fringilla. In metus vulputate eu scelerisque felis imperdiet.
                Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
                Ultricies mi quis hendrerit dolor magna eget est lorem ipsum.
                Semper auctor neque vitae tempus quam pellentesque. Nulla
                aliquet enim tortor at. Sodales ut etiam sit amet. At lectus
                urna duis convallis convallis tellus id interdum.
            </MyText>
            <MyText>
                In massa tempor nec feugiat nisl pretium fusce. Fringilla
                phasellus faucibus scelerisque eleifend. Quam lacus suspendisse
                faucibus interdum posuere lorem ipsum dolor. Purus in mollis
                nunc sed. Volutpat sed cras ornare arcu dui. Posuere urna nec
                tincidunt praesent semper feugiat nibh sed. Interdum velit
                laoreet id donec ultrices tincidunt arcu non sodales. Morbi
                tristique senectus et netus et malesuada fames ac turpis. Vitae
                nunc sed velit dignissim sodales ut eu sem integer. Mattis nunc
                sed blandit libero volutpat sed cras. Leo duis ut diam quam
                nulla porttitor massa.
            </MyText>
        </Wrapper>
    );
};

export default StickyDemo;
