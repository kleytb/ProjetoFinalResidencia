import styled from 'styled-components';

export const ContainerLis = styled.div`

.projects-card {
  width: 60vw;
  height: 80px;
  margin: -11rem;
  background: #ffffff;
  display: flex;
  cursor: pointer;
  border-bottom: solid rgba(0, 0, 0, 0.1); 

margin-left: 50%;
margin-top: 28%;
}

.card-name-container {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  margin-top: 3%;
  padding: 1rem;
}

.card-spanC, .card-spanE, .card-spanN {
  padding: 10px 10px;
  color: #070707;
}

.card-spanE{
  width: 128%;
  margin-top: 10%;
  margin-left: -69%;
}

.card-spanC{
  display:none;
}

.card-spanN{
  margin-Top: -9%;
}

.card-title{
  font-Size: 1.4rem;
  margin-top: -3%;
  margin-left: 2%;
}
.card-titleC, .card-titleB {
  padding-left: 10px;
  font-size: 1.3rem;
  width: 40%;
}

.card-titleB{
  margin-left: -69%;
  margin-top: -7%;
  width: 142%;
}

.card-titleC{
 display: none;
}
.card-creator-container {
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.card-bookmark-container {
  width: 10%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  
}

.card-bookmark {
  font-size: 2.3rem;
  position: absolute;
  margin-top: -8%;
  margin-left: -5%;
  color: #3FC154;
  
}

.card-bookmark:hover {
  color: #338841;
}

.card-flag-container{
  width: 10%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.8%;

  
}

.card-flag{
  font-size: 2.3rem;
  position: absolute;
  color: red;
  margin-top: -13%;
  margin-left: -3%;
}

.card-flag:hover{
  color: rgb(211, 0, 0);
}
`