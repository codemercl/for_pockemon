import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('https://cdn.vox-cdn.com/thumbor/PqAwdNpc7p-5GUCSMxQPehSU-ck=/0x0:1920x1200/1200x800/filters:focal(810x375:1116x681)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg');
    background-size: 100%;
    background-image: 100%;
    background-position: top;
`;

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 1500px;
    gap: 50px;
    justify-content: center;
    height: calc(100vh - 300px);
`;

export const Sidebar = styled.div`
`;

export const Content = styled.div`
    background: rgba(255, 215, 0, 0.5);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    backdrop-filter: blur(20px);
    overflow-y: scroll;
`;