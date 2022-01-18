import React, { useState } from 'react';

import Dropzone from 'react-dropzone';

import api from '../../service/api'

import {
    Container,
    BackDrop,
    Popup,
    PopupHeader,
    Content,
    Button,
    InputFileContainer,
    InputFile
} from './styles';

export function RegisterProjectAttachments({ popupIsVisible, setPopupIsVisible, projectId, setChangedItem }) {

    const [name, setName] = useState('')
    const [link, setLink] = useState('')
   

    async function handleRegister() {
        if (name === '' || link === '') return

        await api.post(`/api/link/${projectId}?name=${name}&link=${link}`)

        setChangedItem(Math.floor(Math.random() * (10000 - 0)) + 0)
        setPopupIsVisible(false)
    }

    async function uploadFile(file) {

        let fileName = name !== '' ? name : file[0].name.split('.')[0]

        let data = new FormData();
        data.append('file', file[0])

        await api.post(`/api/file/${projectId}?name=${fileName}`, data)

        setChangedItem(Math.floor(Math.random() * (10000 - 0)) + 0)
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
                        <h1>Registre um novo anexo</h1>
                        <span>Registre um novo anexo do projeto</span>
                    </PopupHeader>

                    <Content>
                        <strong>Nome</strong>
                        <input
                            placeholder="Digite o nome do anexo"
                            onChange={e => setName(e.target.value)}
                            style={{ marginBottom: '40px' }}
                        />

                        <strong>Digite um link</strong>
                        <input
                            placeholder="https://www..."
                            onChange={e => setLink(e.target.value)}
                        />

                        <Button 
                        onClick={handleRegister}
                        disabled={name === '' || link === ''}
                        style={{cursor: name === '' || link === '' ? 'not-allowed' : 'pointer'}}
                        >
                            Registrar
                            </Button>

                        <InputFileContainer>
                            <h2>Ou</h2>

                            <Dropzone onDropAccepted={(file) => uploadFile(file)}>

                                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                                    <InputFile
                                        id="profile-dropzone"
                                        {...getRootProps()}
                                        isDragActive={isDragActive}
                                        isDragReject={isDragReject}
                                    >
                                        <span>Enive um arquivo</span>
                                        <input {...getInputProps()} />
                                    </InputFile>
                                )}
                            </Dropzone>

                        </InputFileContainer>


                    </Content>

                </Popup>


            </Container>


        </>
    );
}