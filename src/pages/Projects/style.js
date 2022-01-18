import styled from 'styled-components';

export const Container = styled.div`


* {
    padding: 0;
    font-family: 'Roboto';
}

body {
    overflow-x: hidden;
}

.NavBarPj{
    position: absolute;
    width: 100%;
}

.projects-container {
    width: 100%;  
    min-height: 10%;
    display: grid;
    flex-direction: row;
    align-items: center;
    place-items: center;  
    max-width: 50%;
    position: absolute;
    margin-top: 2%;
}


.projects-header {
    width: 100vw;
    height: 8vh;

    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.projects-header-links {
    margin: 0 20px;

    font-size: 1.2em;
    font-weight: 400;

    color: #000;
}

.projects-header-links:hover {
    color: #7c7c7c;
}

.projects-header-links-active {
    color: #000;
    font-weight: 700;
} 

.projects-header-links-active:hover {
    color: #000;
}

.projectsCardsContainer{
    width: 60%;
}

.filter{
    
    width: 10%;
    position: absolute;
    height: 100%;
    text-align: center;
    
}
.filtros{
    margin-top: 10rem;
    position: absolute;
    padding: 1rem;
}

.filtros div{
    padding: 1rem;
}

.filtros h1{
    position: absolute;
   font-size: 1.5rem;
   margin-left: 43%;
   margin-top: 2%;
}

/* .addPe{
    position: absolute;
    margin-left: 140%;
    top: 7%;
}

.invite{
    font-size: 1.2rem;
    position: absolute;
    margin-left: 178%;
    width: 30%;
    top: 7.6%;
} */


.headerInf{
  

    .exib{
    font-size: 0.9rem;
    position: absolute;
    width: 95%;
    margin-top: 12rem;
    margin-left: 75%;

    }   

    .ModoDeEx{  
        position: absolute;
        width:1.4%;
        cursor: pointer;
        margin-top: 12rem;
        margin-left: 84%;
    }

    .threeB{
        position: absolute;
        cursor: pointer;
        margin-top: 12rem;
        margin-left: 87%;
    }

}
.searchBarTop{
    position: absolute;
    margin-top: 11.2rem;
    margin-left: 23%;
    width: 49%;
    height: 40px;
    border: none;
    background: #DCDCDC;
    border-radius: 12px;
    font-size: 1.2rem;
}

 .filtr{
    position: absolute;
    top: 30%;
    left: 7%; 
} 

.EOI{
    position: absolute;
    margin-top: 30%;
    margin-left: 33%;
    width: 112%;

}
.Resp{
    position: absolute;
    margin-top: 90%;
    margin-left: 39%;
    
}

.DOF{
    position: relative;
    margin-top: 270%;
    margin-left: 38%;
    width: 110%;
    
}

.Stts{
    position: absolute;
    margin-top: -100%;
    left: 48%;

}

.screentypes{
    position: absolute;
    margin-top: -65%;
    margin-left: 120%;
 
}
   
`