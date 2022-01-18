import React, { useEffect, useState } from "react";
import { ProjectsCard } from "../ProjectsCards";
import { Link, useNavigate } from 'react-router-dom';
import addPe from '../../pages/Projects/img/addPe.png'

import "./cards.css";
import api from "../../service/api";

export function ProjectsCardsContainer({ title, buttonTitle, projects, exib, setExib, teamId }) {

  const [invitation, setInvitation] = useState('')

  const navigation = useNavigate()

  function handleNavigate() {
    localStorage.setItem('projectId', '')
    navigation('/projects')
  }


useEffect(() => {
  async function getInvitation() {
    let invitationRes = await api.get(`/api/generateInvite/${teamId}`)
    setInvitation(invitationRes.data)
  }

  getInvitation()

})

  return (

    <div className="projects-cards-container">
      <div className="projects-content-header">
        <img className='addPe' src={addPe} />
        <p className='invite'>{invitation === '' ? 'Convidar pessoas' : invitation} </p>
        <h1>{title}</h1>
        <Link to="/project">
          <button onClick={handleNavigate}>{buttonTitle}</button>
        </Link>
      </div>

      {projects.map(
        ({ id, nome, criador, bookmark, empresa, time, flag }) => {


          return (
            <ProjectsCard
              id={id}
              key={id}
              name={nome}
              creator={time.criador.nome}
              bookmark={true}
              brand={empresa}
              team={time}
              flag={true}
              exib={exib}
              setExib={setExib}
            />
          )
        }
      )}
    </div>


  );
}
