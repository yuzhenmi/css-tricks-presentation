import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    background-color: #666;
    padding: 36px;
    overflow: auto;
`;

const MyText = styled.div`
    color: white;
    font-size: 24px;
    margin-bottom: 36px;
`;

const MyButton = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 6px 36px rgba(255, 255, 255, 0.85);
    transition: 0.1s ease;
    :hover {
        box-shadow: 0 9px 48px rgba(255, 255, 255, 0.85);
    }
    :active {
        box-shadow: 0 12px 72px rgba(255, 255, 255, 0.85);
    }
`;

const RelativeOffsetDemo2: React.FC = () => {
    const counters = [];
    for (let n = 0; n < 60; n++) {
        counters.push(n);
    }
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
            <MyButton />
        </Wrapper>
    );
};

export default RelativeOffsetDemo2;
