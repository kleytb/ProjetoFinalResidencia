import styled from 'styled-components'


export const Container = styled.div`


* {
    z-index: 999;
}
.filter{
    
    width: 20%;
    position: absolute;
    height: 100%;
    text-align: flex-end;
    justify-content: flex-end;
    
}


.headF{
    display: flex;
    margin-left: -12%;
    align-items: center;
}

.conteudo{
    font-size: 1rem;
}

.headF img{
    width: 7%;
    margin-right: 5%;
}



.filtros{
    width: 92%;
    margin-top: 10rem;
    position: absolute;
    padding: 1rem;
    flex-direction: column;
    margin-left: 10%;
 
}

.filtros div{
    padding: 1rem;
}

.EOI{
    cursor: pointer;
    align-items: center;
    color: #333;
}

.Resp{
    align-items: center;
    margin-top: 5%;  
    cursor: pointer;
    color: #333;
}

.DOF{
    align-items: center;
    margin-top: 5%; 
    cursor: pointer;
    color: #333;
}

.Stts{
    align-items: center;
    margin-top: 5%;
    cursor: pointer;
    color: #333;
}

.empresas, .Responsaveis, .DataDeTermino, .Status {
    list-style: none;
    margin-top: 2%;
    color: #333;
    display: none;
}


`