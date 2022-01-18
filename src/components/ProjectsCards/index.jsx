import React from "react";
import { MdBookmark, MdFlag } from "react-icons/md";
import { useNavigate } from "react-router-dom";


import { Container } from "./Themes/styleCard";
import { ContainerLis } from './Themes/styleList';

export function ProjectsCard({
  name,
  creator,
  bookmark = false,
  flag = false,
  brand,
  exib, 
  setExib,
  id
}) {

  const navigation = useNavigate()

  function handleNavigate() {
    localStorage.setItem('projectId', id)
    navigation('/project')
  }

  return (

    
    <>
       {exib === 'card' ? (<Container onClick={handleNavigate}>
        <div className="projects-card">
          <div className="card-name-container">
            <span className="card-spanN">Nome do Projeto</span>
            <strong className="card-title" style={{marginTop: '5px'}}>{name}</strong>
          </div>
    
          <div className="card-creator-container">
            <span className="card-spanC">Responsáveis</span>
            <strong className="card-titleC">{creator}</strong>
          </div>
          <div className="card-creator-container">
            <span className="card-spanE">Empresa ou instituição</span>
            <strong className="card-titleB">{brand}</strong>
          </div>
    
          <div className="card-flag-container">
            {flag ? <MdFlag className="card-flag" /> : null}
          </div>
          <div className="card-bookmark-container">
            {bookmark ? <MdBookmark className="card-bookmark" /> : null}
          </div>
        </div>
        </Container>) : 

        (<ContainerLis onClick={handleNavigate}>
        <div className="projects-card">
          <div className="card-name-container">
            <span className="card-spanN">Nome do Projeto</span>
            <strong className="card-title" style={{marginTop: '5px'}}>{name}</strong>
          </div>
    
          <div className="card-creator-container">
            <span className="card-spanC">Responsáveis</span>
            <strong className="card-titleC">{creator}</strong>
          </div>
          <div className="card-creator-container">
            <span className="card-spanE"style={{marginTop: '-5px'}}>Empresa ou instituição</span>
            <strong className="card-titleB" style={{marginTop: '5px'}}>{brand}</strong>
          </div>
    
          <div className="card-flag-container">
            {flag ? <MdFlag className="card-flag" /> : null}
          </div>
          <div className="card-bookmark-container">
            {bookmark ? <MdBookmark className="card-bookmark" /> : null}
          </div>
        </div>
        </ContainerLis>
        )}
    </>

  );
}

