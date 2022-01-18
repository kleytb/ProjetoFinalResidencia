import styled from "styled-components";

export const Container = styled.div`
    width: 99%;
    height: 70px;
    background: #fff;

    margin-top: 10px;

    display: flex;
`

export const ImageContainer = styled.div`
    width: 5%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        object-fit: contain;
        height: 50%;
    }
`

export const InformationContainer = styled.div`
    width: ${props => props.type === 'attachment' ? '80%' : '90%'};

    height: 100%;

    display: flex;
`

export const Information = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & > span {
        color: #656565;
    }

    & > strong {
        font-size: 0.95rem;
    }

    &:nth-child(1) {
        width: ${props => props.type === 'link' ? '20%' : '40%'};
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
        width: 20%;
    }

    &:nth-child(2) {
        visibility: ${props => props.type === 'contact' || props.type === 'link' ? 'unset' : 'hidden'};
        
        & > span {
            visibility: ${props => props.type === 'link' ? 'hidden' : 'unset'}; 
        }

        & > strong {
            color: ${props => props.type === 'link' ? '#898EFF' : '#656565'};
        }
    }


    &:nth-child(3) {
        visibility: ${props => props.type === 'contact' ? 'unset' : 'hidden'}
    }

    &:nth-child(4) {
        visibility: ${props => props.type === 'attachment' || props.type === 'link' ? 'hidden' : 'unset' }
    }


`

export const IconsContaner = styled.div`
    width: ${props => props.type === 'attachment' ? '15%' : '5%'};;
    height: 100%;

    display: flex;
    justify-content: ${props => props.type === 'attachment' ? 'space-evenly' : 'center'};
    align-items: center;

    & > .trash-icon,
    & > .download-icon {
        color: #6F6F6F;
        cursor: pointer;
    }

    & > .trash-icon:hover {
        color: #ad0d0d
    }

    & > .download-icon:hover {
        color: #04ba56;
    }
`
