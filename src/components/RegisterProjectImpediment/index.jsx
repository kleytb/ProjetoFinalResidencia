import React, { useState } from 'react';

import api from '../../service/api'

import {
    Container,
    BackDrop,
    Popup,
    PopupHeader,
    Content,
    Button
} from './styles';

export function RegisterProjectImpediment({ popupIsVisible, setPopupIsVisible, projectId, setChangedItem }) {

    const [name, setName] = useState('')

    async function handleRegister() {

        let impediment = {
            nome: name,
            projeto: projectId
        }

        let impedimentRes = await api.post(`/api/cadastrarImpedimentos`, impediment)

        setChangedItem(impedimentRes.data.id)
        setPopupIsVisible(false)
    }

    return (
        <>
            <Container
                style={{
                    pointerEvents: popupIsVisible ? 'unset' : 'none',
                }}
            >
                <BackDrop
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


                <Popup
                    style={{
                        opacity: popupIsVisible ? 1 : 0,
                        pointerEvents: popupIsVisible ? 'unset' : 'none',
                    }}
                >

                    <PopupHeader>
                        <h1>Registre um novo impedimento</h1>
                        <span>Registre um novo impedimento do projeto</span>
                    </PopupHeader>

                    <Content>
                        <strong>Nome</strong>
                        <input
                            placeholder="Digite o nome do impedimento"
                            onChange={e => setName(e.target.value)}
                        />

                        <Button onClick={handleRegister}>Registrar</Button>

                    </Content>

                </Popup>


            </Container>


        </>
    );
}