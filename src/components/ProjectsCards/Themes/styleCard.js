import styled from 'styled-components';

export const Container = styled.div`

.projects-card {
  width: 120%;
  height: 21vh;
  margin: -12rem;
  background: #ffffff;
  display: flex;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow:
  0px 1.7px 36.7px rgba(0, 0, 0, 0.014),
  0px 3.8px 31.9px rgba(0, 0, 0, 0.021),
  0px 6.6px 19px rgba(0, 0, 0, 0.025),
  0px 10.9px 10.5px rgba(0, 0, 0, 0.028),
  0px 19.5px 22.6px rgba(0, 0, 0, 0.028),
  0px 48px 187px rgba(0, 0, 0, 0.02)
;

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
  position: absolute;
  width: 10%;
  margin-top: 7.5%;
  margin-left: -62.7%;
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
  margin-top: 5%;
}

.card-titleC{
  position: absolute;
  margin-top:12%;
  margin-left: -62.7%;
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
  margin-top: -18%;
  margin-left: -5%;
  color: rgb(255, 217, 0);
  
}

.card-bookmark:hover {
  color: #e7c400;
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
  margin-top: -23%;
  margin-left: -3%;
}

.card-flag:hover{
  color: rgb(211, 0, 0);
}
`