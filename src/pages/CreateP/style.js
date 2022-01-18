import styled from 'styled-components';


export const Container = styled.div`
    width: 88vw;
    margin-left: 12vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* position: fixed; */
    padding-bottom: 250px;
`

export const ProjectDetails = styled.div`
    width: 90%;
    height: 90vh;

    /* background-color: #000; */
`

export const NameContainer = styled.div`
    width: 50%;
    /* height: 20%; */
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    & > span {
        color: #8E8E8E;
        font-size: 1.3rem;
        /* margin-bottom: 5px; */
    }

    & > input {
        border: none;
        font-size: 2.1rem;
        font-weight: 500;
        outline: none;
        padding-left: 0;
    }

    & > input::placeholder {
        color: #DADADA
    }
`

export const CompanyContainer = styled.div`
    width: 50%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
        display: flex;
        align-items: center;
    }

    & > div > span {
        margin-left: 10px;
        color: #959595;
        font-weight: 500;
    }

    & > input {
        margin-top: 5px;
        border: none;
        outline: none;
        /* padding-left: 0; */
        font-size: 1.2rem;
    }

    & > input::placeholder {
        color: #DADADA
    }
`

export const DatesContainer = styled.div`
    width: 35%;
    margin-top: 20px;

    display: flex;
    justify-content: space-between;

    & > div {
        display: flex;
        align-items: center;
        width: 45%;
    }

    & > div > input {
        outline: none;
        border: none;
        width: 100%;
        font-size: 1rem;
        font-weight: 500;

    }
`

export const ResponsiblesContainer = styled.div`
    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;

    & > .responsibles-label {
        width: 100%;
        display: flex;
        align-items: center;
    }

    & > .responsibles-label > span {
        margin-left: 10px;
        color: #959595;
        font-weight: 500;
    }

    
`

export const ResponsiblesContent = styled.div`
    margin-left: 35px;
    width: 100%;
    

    & > .responsibles-inputs {
        display: flex;
        width: 100%;
        
    }

    & .responsibles-input-container {

        &:nth-child(1) {
            width: 40%;
        }

        width: 20%;
        display: flex;
        flex-direction: column;

    }

    & .responsibles-input-container > span {
        margin-top: 10px;
        color: #656565;
        font-size: .9rem;
    }

    & .responsibles-input-container > input {
        width: 100%;

        border: none;
        outline: none;
        border-bottom: 2px solid #F0F0F0;
        padding-top: 15px;
        padding-left: 0;
        padding-bottom: 10px;

        /* font-weight: 500; */
        font-size: 1rem;
    }

    & > .add-responsibles {
        margin-top: 20px;
        
        display: flex;
        align-items: center;
    }

    & > .add-responsibles > img {
        cursor: pointer;
    }

    & > .add-responsibles > span {
        margin-left: 10px;
        color: #959595;
        cursor: pointer;
    }
    
`

export const ProductGoalContaier = styled.div`
    margin-top: 60px;
    
    & > div {
        display: flex;
        align-items: center;
    }

    & > div > span {
        margin-left: 10px;
        color: #959595;
        font-weight: 500;
    }

    & > textarea {
        width: 100%;
        height: 100px;
        padding: 20px;

        font-size: 1rem;

        background: rgba(245, 245, 245, 0.3);
        border: none;
        outline: none;
    }
`

export const BudgetContaier = styled.div`
    display: flex;
    margin-top: 50px;

    & > div:nth-child(2) {
        margin-left: 20px;
    }

    & > div > div {
        display: flex;
        align-items: center;
    }

    & > div > div > span {
        margin-left: 10px;
        color: #959595;
        font-weight: 500;
    }

    & > div > input {
        padding: 10px;
        margin-top: 10px;

        font-size: 1rem;
        font-weight: 500;

        border: none;
        outline: none;
    }
`

export const KanbanContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .kaban-header {
        width: 100%;
    }
`

export const InformatioContainer = styled.div`
    width: 90%;
    margin-top: 50px;
`

