import React from 'react'

import { Container, Content } from './sb.js'

import Group from './img/Group.png'
import anex from './img/anex.png'
import chat from './img/chat.png'
import flag from './img/flag.png'
import kabn from './img/kanban.png'
import pers from './img/pers.png'
import timel from './img/timeline.png'

function Sidebar({projectRef, incrementsRef, timelineRef, contactsRef, impedimentsRef, attachmentRef, commentRef}) {
    
    function scrollTo(ref) {
        
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        })
    }
    
    return (
        <Container>

            <Content>
                <div>
                    <img src={Group} alt='Ícone de alerta' onClick={() => scrollTo(projectRef)} />
                </div>

                <p onClick={() => scrollTo(projectRef)} >Projeto</p>
            </Content>

            <Content>
                <div>
                    <img src={kabn} alt='Ícone de incrementos' onClick={() => scrollTo(incrementsRef)} />
                </div>

                <p onClick={() => scrollTo(incrementsRef)} >Incrementos</p>
            </Content>

            <Content>
                <div>
                    <img src={timel} alt='Ícone de linha do tempo' onClick={() => scrollTo(timelineRef)} />
                </div>

                <p onClick={() => scrollTo(timelineRef)} >Linha do tempo</p>
            </Content>

            <Content>
                <div>
                    <img src={pers} alt='Ícone de contato' onClick={() => scrollTo(contactsRef)} />
                </div>

                <p onClick={() => scrollTo(contactsRef)} >Contatos</p>

            </Content>

            <Content>
                <div>
                    <img src={flag} alt='Ícone de impedimentos' onClick={() => scrollTo(impedimentsRef)} />
                </div>

                <p onClick={() => scrollTo(impedimentsRef)} >Impedimentos</p>
            </Content>

            <Content>
                <div>
                    <img src={anex} alt='Ìcone de anexo' onClick={() => scrollTo(attachmentRef)} />
                </div>

                <p onClick={() => scrollTo(attachmentRef)} >Anexos</p>
            </Content>

            <Content>
                <div>
                    <img src={chat} alt='Ìcone de comentarios' onClick={() => scrollTo(commentRef)} />
                </div>

                <p onClick={() => scrollTo(commentRef)} >Comentários</p>
            </Content>


        </Container>
    )
}

export default Sidebar
