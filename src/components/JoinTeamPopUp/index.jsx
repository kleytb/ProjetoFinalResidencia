import React, { useState } from 'react';

import api from '../../service/api'

import './styles.css';

export function JoinTeamPopUp({ popupIsVisible, setPopupIsVisible }) {

    const [inputValue, setInputValue] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))

    async function handleJoinTeam() {
        await api.post(`/pessoaTime/generateInvite/${inputValue}/${user.id}`)
        setPopupIsVisible(!popupIsVisible)
    }

    return (
        <>
            <div
                className='join-team-container'
                style={{
                    pointerEvents: popupIsVisible ? 'unset' : 'none',
                }}
            >
                <div
                    className='join-team-backdrop'
                    style={{
                        opacity: popupIsVisible ? 1 : 0,
                        pointerEvents: popupIsVisible ? 'unset' : 'none',
                    }}
                    onClick={() => {
                        if (popupIsVisible) {
                            setPopupIsVisible(!popupIsVisible)
                        }
                    }}
                />


                <div
                    className='join-team-popup'
                    style={{
                        opacity: popupIsVisible ? 1 : 0,
                        pointerEvents: popupIsVisible ? 'unset' : 'none',
                    }}
                >

                    <div className="join-team-popup-header">
                        <h1>Entre em um time</h1>
                        <span>Entre em um time já criado e comece a colaborar</span>
                    </div>

                    <div className="join-team-popup-input-container">
                        <strong>Digite o código do time</strong>

                        <div>
                            <input
                                placeholder="Código Ex: SW52aX..."
                                onChange={e => setInputValue(e.target.value)}
                            />

                            <button onClick={handleJoinTeam} >Entrar</button>

                        </div>
                    </div>

                </div>


            </div>


        </>
    );
}