import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TeamsCardsContainer } from '../../components/TeamsCardsContainer'
import api from '../../service/api'

import { JoinTeamPopUp } from '../../components/JoinTeamPopUp'

import './styles.css';



function Teams() {

    const USER = JSON.parse(localStorage.getItem('user'))
    const USER_ID = USER.id

    const [teams, setTeams] = useState([])
    const [teamsCreatedByUser, setTeamsCreatedByUser] = useState([])

    const [popupIsVisible, setPopupIsVisible] = useState(false)

    
    function handleDeleteTeam(id) {
        api.delete(`/api/deletarTimes/${id}`)


        let teamElement = teamsCreatedByUser.filter((team) => team.id !== id)
        setTeamsCreatedByUser(teamElement)
    }

    useEffect(() => {

        async function getTeams() {
            let teamsResponse = await api.get(`/api/MyTeams/${USER_ID}`)
            teamsResponse = teamsResponse.data


            const formatedTeams = teamsResponse.map(({pessoa, time}) => {
                let { id, nome, criador } = time

                let createdByUser = criador.id === USER_ID

                return {
                    id,
                    name: nome,
                    creator: criador.nome,
                    creatorId: criador.id,
                    createdByUser
                }
            })

            let filteredTeams = formatedTeams.filter(team => team.creatorId !== USER_ID)
            let filteredTeamsCreatedByUser = formatedTeams.filter(team => team.creatorId === USER_ID)

            setTeams(filteredTeams)
            setTeamsCreatedByUser(filteredTeamsCreatedByUser)
        }

        getTeams()
        
    }, [USER_ID, popupIsVisible])

    return (
        <div className='teams-container'>

            <JoinTeamPopUp popupIsVisible={popupIsVisible} setPopupIsVisible={setPopupIsVisible} />

            <div className='teams-header'>
                <Link className='teams-header-links teams-header-links-active' to="/teams">Times</Link>
                <Link className='teams-header-links' to="/profile">Minha conta</Link>
            </div>

            <TeamsCardsContainer
                title='Todos os times'
                buttonTitle='Entrar em um time existente'
                teams={teams}
                setPopupIsVisible={setPopupIsVisible}
            />

            <TeamsCardsContainer
                title='Criados por mim'
                buttonTitle='Adicionar'
                teams={teamsCreatedByUser}
                deleteTeamFunction={handleDeleteTeam}
            />

        </div>

    )
}

export default Teams;