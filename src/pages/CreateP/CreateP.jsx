import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Kanban2 from '../../components/Kanban2/kb2'
import Timeline from '../../components/Timeline'
import ProjectInformation from "../../components/ProjectInformation";
import { RegisterProjectContact } from "../../components/RegisterProjectContact";
import { RegisterProjectImpediment } from "../../components/RegisterProjectImpediment";
import { RegisterProjectAttachments } from "../../components/RegisterProjectAttachments";

import { FiX } from 'react-icons/fi'

import pred from "./img/pred.png";
import timer from "./img/time.png";
import pers from './img/pers.png';
import plus from './img/plus.png';
import group from './img/Group.png';
import money from './img/cil_money.png';

import api from '../../service/api'

import {
    Container,
    ProjectDetails,
    NameContainer,
    CompanyContainer,
    DatesContainer,
    ResponsiblesContainer,
    ResponsiblesContent,
    ProductGoalContaier,
    BudgetContaier,
    KanbanContainer,
    InformatioContainer
} from "./style";


export default function ProjetoScreen() {
    const navigation = useNavigate()
    
    const TEAM_ID = localStorage.getItem('teamId')

    const [projectId, setProjectId] = useState(localStorage.getItem('projectId'))

    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [productGoal, setProductGoal] = useState('')
    const [budget, setBudget] = useState('')
    const [real, setReal] = useState('')


    const [contactPopupIsVisible, setContactPopupIsVisible] = useState(false)
    const [impedimentsPopupIsVisible, setImpedimentsPopupIsVisible] = useState(false)
    const [attachmentsPopupIsVisible, setAttachmentsPopupIsVisible] = useState(false)


    const projectRef = useRef(null)
    const incrementsRef = useRef(null)
    const timelineRef = useRef(null)
    const contactsRef = useRef(null)
    const impedimentsRef = useRef(null)
    const attachmentRef = useRef(null)
    const commentRef = useRef(null)

    const [contacts, setContacts] = useState([])
    const [changedContact, setChangedContact] = useState(0)

    const [impediments, setImpediments] = useState([])
    const [changedImpediments, setChangedImpediments] = useState(0)

    const [attachments, setAttachments] = useState([])
    const [changedAttachments, setChangedAttachments] = useState(0)



    async function saveProject() {
        if (name === '' || company === '') return;

        let project = {
            nome: name,
            empresa: company,
            dataInicio: startDate === '' ? null : startDate,
            dataTermino: endDate === '' ? null : endDate,
            productGoal: productGoal === '' ? null : productGoal,
            orcamento: budget === '' ? null : budget,
            saldo: real === '' ? null : real,
            time: Number(TEAM_ID)
        }   

        console.log(TEAM_ID);
        if (projectId === '') {
            let projectResponse = await api.post(`/api/cadastrarProjetos`, project)

            setProjectId(projectResponse.data.id)
            return;
        }

        api.put(`/api/atualizarProjetos/${projectId}`, project)

    }

    const timerRef = useRef(null)

    function debounce(fn, timeout = 300) {
        
        clearTimeout(timerRef.current)

        timerRef.current = setTimeout(() => { fn() }, timeout)
    }

    useEffect(() => {
        debounce(saveProject, 1000)
    }, [name, company, startDate, endDate, productGoal, budget, real])


    
    useEffect(() => {
        if (projectId === '') return;

        async function loadData() {
            let contactsResponse = await api.get(`/api/project/${projectId}`) // buscar contatos

            let newContacts = contactsResponse.data.map(cont => {
                return {
                    ...cont,
                    type: 'contact'
                }
            })

            setContacts(newContacts)
        }

        loadData()
    }, [changedContact])

    useEffect(() => {
        if (projectId === '') return;

        async function loadData() {
            let impedimentsResponse = await api.get(`/api/impedimentosPorProjeto/${projectId}`)

            let newImpediments = impedimentsResponse.data.map(imp => {
                return {
                    ...imp,
                    type: 'impediment'
                }
            })

            setImpediments(newImpediments)
        }

        loadData()
    }, [changedImpediments])

    useEffect(() => {
        if (projectId === '') return;

        async function loadData() {
            let attachmentsResponse = await api.get(`/api/projetoId/${projectId}`)

            let newAttachments = attachmentsResponse.data.map(attach => {
                let type = attach.anexo.includes('http') ? 'link' : 'attachment'
                return {
                    ...attach,
                    type
                }
            })

            setAttachments(newAttachments)
        }

        loadData()
    }, [setChangedAttachments])


    function handleNavigate() {
            
    }


    return (
        <>
            <FiX size={40} onClick={() => navigation('/projects')} style={{position: 'absolute', cursor: 'pointer', top: '40px', right: '40px'}} />

            <Sidebar
                projectRef={projectRef}
                incrementsRef={incrementsRef}
                timelineRef={timelineRef}
                contactsRef={contactsRef}
                impedimentsRef={impedimentsRef}
                attachmentRef={attachmentRef}
                commentRef={commentRef}
            />

            <RegisterProjectContact
                popupIsVisible={contactPopupIsVisible}
                setPopupIsVisible={setContactPopupIsVisible}
                projectId={projectId}
                setChangedItem={setChangedContact}
            />

            <RegisterProjectImpediment
                popupIsVisible={impedimentsPopupIsVisible}
                setPopupIsVisible={setImpedimentsPopupIsVisible}
                projectId={projectId}
                setChangedItem={setChangedImpediments}
            />

            <RegisterProjectAttachments
                popupIsVisible={attachmentsPopupIsVisible}
                setPopupIsVisible={setAttachmentsPopupIsVisible}
                projectId={projectId}
                setChangedItem={setChangedAttachments}
            />

            <Container>
                <ProjectDetails ref={projectRef}>
                    <NameContainer>
                        <span>Detalhe do projeto</span>
                        <input
                            type="text"
                            placeholder="Dê um nome para o projeto"
                            onChange={e => setName(e.target.value)}
                        />
                    </NameContainer>

                    <CompanyContainer>
                        <div>
                            <img src={pred} alt="Ícone de um prédio" />
                            <span>Empresa ou instituição</span>
                        </div>

                        <input
                            type="text"
                            placeholder="Informe a empresa patrocinadora"
                            onChange={e => setCompany(e.target.value)}
                        />
                    </CompanyContainer>

                    <DatesContainer>
                        <div>
                            <img src={timer} alt="Ícone de um relogio" />
                            <input
                                type='text'
                                placeholder="Data de início do projeto"
                                onFocus={e => e.target.type = 'date'}
                                onBlur={e => e.target.type = 'text'}
                                onChange={e => setStartDate(e.target.value)}
                            />
                        </div>

                        <div>
                            <img src={timer} alt="Ícone de um relogio" />
                            <input
                                type='text'
                                placeholder="Data de término do projeto"
                                onFocus={e => e.target.type = 'date'}
                                onBlur={e => e.target.type = 'text'}
                                onChange={e => setEndDate(e.target.value)}
                            />
                        </div>
                    </DatesContainer>

                    <ResponsiblesContainer>

                        <div className="responsibles-label">
                            <img src={pers} alt="Ícone de usuários" />
                            <span>Responsáveis pelo projeto</span>
                        </div>

                        <ResponsiblesContent>

                            <div className="responsibles-inputs">

                                <div className="responsibles-input-container">
                                    <span>Nome</span>
                                    <input type="text" placeholder="Inserir nome" />
                                </div>

                                <div className="responsibles-input-container">
                                    <span>Papel no projeto</span>
                                    <input type="text" />
                                </div>

                                <div className="responsibles-input-container">
                                    <span>Telefone</span>
                                    <input type="text" />
                                </div>

                                <div className="responsibles-input-container">
                                    <span>e-mail</span>
                                    <input type="text" />
                                </div>

                            </div>


                            <div className="add-responsibles">
                                <img src={plus} alt="Ícone de mais" />
                                <span>Adicionar responsável</span>
                            </div>
                        </ResponsiblesContent>

                    </ResponsiblesContainer>


                    <ProductGoalContaier>
                        <div>
                            <img src={group} alt="Ícone de um alvo" />
                            <span>Product Goal</span>
                        </div>

                        <textarea
                            type="text"
                            placeholder="Informe em poucas palavras o objetivo do produto"
                            onChange={e => setProductGoal(e.target.value)}
                        />
                    </ProductGoalContaier>

                    <BudgetContaier>
                        <div>
                            <div>
                                <img src={money} alt="Ícone de dinheiro" />
                                <span>Orçamento</span>
                            </div>

                            <input
                                type="text"
                                placeholder="R$ 300.000,00"
                                onChange={e => setBudget(e.target.value)}
                            />
                        </div>

                        <div>
                            <div>
                                <img src={money} alt="Ícone de dinheiro" />
                                <span>Real</span>
                            </div>

                            <input
                                type="text"
                                placeholder="R$ 150.000,00"
                                onChange={e => setReal(e.target.value)}
                            />
                        </div>

                    </BudgetContaier>

                </ProjectDetails>

                <KanbanContainer ref={incrementsRef}>
                    <div className="kaban-header">
                        <h1>Incrementos</h1>
                    </div>

                    <Kanban2 />
                </KanbanContainer>

                <Timeline reference={timelineRef} />

                <InformatioContainer>

                    <ProjectInformation
                        reference={contactsRef}
                        title='Contatos'
                        setPopupIsVisible={setContactPopupIsVisible}
                        setChangedItem={setChangedContact}
                        data={contacts}
                    />

                    <ProjectInformation
                        reference={impedimentsRef}
                        title='Impedimentos'
                        setPopupIsVisible={setImpedimentsPopupIsVisible}
                        setChangedItem={setChangedImpediments}
                        data={impediments}
                    />
                    <ProjectInformation
                        reference={attachmentRef}
                        title='Anexos'
                        setPopupIsVisible={setAttachmentsPopupIsVisible}
                        setChangedItem={setChangedAttachments}
                        data={attachments}
                    />

                </InformatioContainer>

            </Container>

        </>
    );
}