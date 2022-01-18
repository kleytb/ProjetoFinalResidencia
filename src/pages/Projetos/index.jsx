import React, {useState, useEffect} from 'react';


import { ProjectCardsContainer, ProjectsCardsContainer } from '../../components/ProjectsCardContainer';
import ProjetosNavbar from '../../components/ProjetosNavbar';

import api from '../../service/api'

import './styles.css';


const CREATE_BY_ME = [
    {
        time: 'Residência Serratec',
        nome: 'Escritório Ágil',
        criador: 'Gabriel Martins e Paulo Vitor',
        createdByMe: true,
        empresa: 't2m'
    },
    {
        time: 'Skill',
        nome: 't2m',
        criador: 'Kley Taboada',
        createdByMe: true,
        empresa: 't2m'
    },
    {
        time: 'Residência Serratec',
        nome: 'Treinamentos',
        criador: 'José Teles',
        createdByMe: true,
        empresa: 't2m'
    },
]



function Projetos() {

    const [projetos, setProjetos] = useState([])
    //const [projetosCreatedByMe, setProjetosTemasCreatedByMe] = useState([])


    useEffect(() => {

        async function getProjetos() {
            let response = await api.get('/api/projetos')
            console.log(response.data);
    
            setProjetos(response.data)
        }
    
        getProjetos()
    }, [])

    return (
        <>
            <ProjetosNavbar />
            <div className='projects-container'>

                

                <ProjectsCardsContainer
                    title='Todos os Projetos'
                    buttonTitle='Cadastrar Projeto'
                    teams={projetos}
                />

                <ProjectsCardsContainer
                title='Criados por mim'
                buttonTitle='Adicionar'
                teams={CREATE_BY_ME}
                />


                
            </div>
        </>
    )
}

export default Projetos;