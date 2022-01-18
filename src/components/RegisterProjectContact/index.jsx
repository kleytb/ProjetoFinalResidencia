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

export function RegisterProjectContact({ popupIsVisible, setPopupIsVisible, projectId, setChangedItem }) {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')

    async function handleRegister() {
        let contact = {
            nome: name,
            papel: role,
            telefone: unformatTelephone(tel),
            email,
            projeto: projectId
        }

        let contactRes = await api.post(`/api/cadastrarContatos`, contact)
        setChangedItem(contactRes.data.id)
        setPopupIsVisible(false)
    }


    function telephoneMask(event) {
        let key = event.nativeEvent.data;
        let inputValue = event.target.value

        if (isNaN(key) || key === " ") {
            let splitedValue = inputValue.split('')
            splitedValue.pop()

            return setTel(splitedValue.join(''))
        }


        if (inputValue.length === 2 && key !== null) {
            return setTel(inputValue + " ")

        } else if (inputValue.length === 8 && key !== null) {
            return setTel(inputValue + "-")
        }

        setTel(inputValue)

    }


    function unformatTelephone(telephone) {
        return telephone.replace(/[-\s]/g, "")
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
                        <h1>Registre um novo contato</h1>
                        <span>Registre um novo contato do projeto</span>
                    </PopupHeader>

                    <Content>
                        <strong>Nome</strong>
                        <input
                            placeholder="Digite o nome"
                            onChange={e => setName(e.target.value)}
                        />

                        <div>

                            <div>
                                <strong>Papel no projeto</strong>
                                <input
                                    placeholder="Digite o papel no projeto"
                                    onChange={e => setRole(e.target.value)}
                                />
                            </div>
                            <div>
                                <strong>Telefone</strong>
                                <input
                                    placeholder="Digite o telefone"
                                    maxLength={13}
                                    value={tel}
                                    onChange={e => telephoneMask(e)}
                                />
                            </div>

                        </div>

                        <strong>E-mail</strong>
                        <input
                            placeholder="Digite o e-mail"
                            onChange={e => setEmail(e.target.value)}
                        />

                        <Button onClick={handleRegister}>Registrar</Button>

                    </Content>

                </Popup>


            </Container>


        </>
    );
}