import React from 'react';
import { FiTrash2 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

import './styles.css';

export function TeamsCard({name, creator, hasTrash = false, id, handleDeleteTeam}) {
    const navigation = useNavigate()

    function handleTeamCardClick() {
        localStorage.setItem('teamId', id)
        navigation('/projects')
    }

    return (
        <div className='teams-card'>
            <div className='card-name-container' onClick={handleTeamCardClick}>
                <span className='card-span'>Nome do time</span>
                <strong className='card-title'>{name}</strong>
            </div>

            <div className='card-creator-container' onClick={handleTeamCardClick}>
                <span className='card-span' >Criado por</span>
                <strong className='card-title'>{creator}</strong>
            </div>

            <div className='card-trash-container'>
                {
                    hasTrash 
                    ? <FiTrash2 className='card-trash' onClick={() => handleDeleteTeam(id)}/>
                    : null
                }
            </div>

        </div>
    )
}