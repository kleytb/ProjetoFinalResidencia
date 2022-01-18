import styled from 'styled-components';

export const Container = styled.div`
    width: 12vw;
    height: 100vh;
    position: fixed;
    background-color: #212121;
    z-index: 4;
`

export const Content = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    align-items: center;
    color: #fff;

    & > div {
        width: 40%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > div > img {
        cursor: pointer;
    }

    & > p {
        cursor: pointer;
    }

`
