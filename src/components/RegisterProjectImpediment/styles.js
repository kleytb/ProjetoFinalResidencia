import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 5;
`



export const BackDrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #999999a1;

    opacity: 0;
    pointer-events: none;

    transition: opacity .3s;
`





export const Popup = styled.div`
    background: #fff;
    border-radius: 15px;

    width: 40%;

    display: flex;
    flex-direction: column;

    padding: 2.5rem;
    padding-bottom: 3.5rem;
    transition: opacity .3s;
    z-index: 6;
`



export const PopupHeader = styled.div`
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    padding-bottom: 50px;

    & > h1 {
        color: #000;
        margin-bottom: 10px;
    }
`


export const Content = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > strong {
        margin-bottom: 15px;
        color: #000;
        font-weight: 500;
        font-size: 1.2rem;
    }

    & > input {
        width: 95%;
        outline: none;

        font-size: 1rem;
        color: #000;

        margin-right: 20px;
    }
`


export const Button = styled.button`
    width: 100%;
    margin-top: 50px;

    background: #212121;
    color: #fff;

    border: none;
    border-radius: 5px;

    padding: 20px 45px;
    font-size: 1rem;
    /* font-weight: 500; */
`

