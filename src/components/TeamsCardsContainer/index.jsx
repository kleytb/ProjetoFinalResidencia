import React from 'react';
import { TeamsCard } from '../TeamsCard'

import './styles.css';

export function TeamsCardsContainer({ title, buttonTitle, teams, deleteTeamFunction, setPopupIsVisible }) {
 
    return (
        <div className='teams-cards-container'>

            <div className='teams-content-header'>
                <h1>{title}</h1>
                <button onClick={ setPopupIsVisible ? () => {setPopupIsVisible(true)} : () => {} }>{buttonTitle}</button>
            </div>

            {
                teams.map(({ id, name, creator, createdByUser }) => (
                    <TeamsCard
                        key={id}
                        id={id}
                        name={name}
                        creator={creator}
                        hasTrash={createdByUser}
                        handleDeleteTeam={deleteTeamFunction}
                    />
                ))
            }

        </div>
    )
}