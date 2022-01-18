import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;

    & + & {
        margin-top: 50px;
    }
    
    & > div {
        margin-top: 20px;

        width: 100%;
        min-height: 250px;
        background: rgba(241, 234, 228, 0.5);
    }
`

export const Content = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 60px;
`

export const Footer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 10px;

    & > div {
        height: 100%;

        display: flex;
        align-items: center;
        color: #ABABAB;

        padding-left: 10px;
        cursor: pointer;
    }
`