import React, { useState, useEffect, useDispatch } from "react";

import { ProjectsCardsContainer } from "../../components/ProjectsCardContainer";
import ProjetosNavbar from "../../components/ProjetosNavbar";
import { GiHamburgerMenu } from "react-icons/gi";

import { FiFilter, FiSearch } from "react-icons/fi";

import api from "../../service/api";
import SideBarProj from "../../components/SideBarProjetos/index";

import { Container } from "./style";

import ModoDeEx from "./img/ModoDeEx.png";

  function Projetos() {

  const teamId = localStorage.getItem('teamId')


  const Project = JSON.parse(localStorage.getItem('projeto'))

  const [project, setProject] = useState([])

  const [exibicao, setExibicao] = useState("list");
  const [busca, setBusca] = useState("");

  const [time, setTime] = useState('')
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])

  const projetosFiltrados = project.filter((projects) => projects.nome.toLowerCase().includes(busca.toLowerCase()) );


  useEffect(() => {
    async function getData() {
      let teamResponse = await api.get(`/api/timesPorId/${teamId}`);
      setTime(teamResponse.data)
      
      let projectsResponse = await api.get(`/api/projetos/time/${teamId}`);

      setProjects(projectsResponse.data)
      setFilteredProjects(projectsResponse.data)
    }

    getData()

  }, [])



  return (
    <>
      <ProjetosNavbar />
      <SideBarProj />
      <Container>
        <div className="projects-container">
          <ProjectsCardsContainer
            title={time.nome}
            teamId={time.id}
            buttonTitle="Cadastrar Projeto"
            projects={filteredProjects}
            exib={exibicao}
            setExib={setExibicao}
          />
        </div>

        <div className="headerInf">
          <input
            className="searchBarTop"
            type="text"
            id="projetos"
            placeholder="Pesquisar projetos, responsáveis, empresas..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <strong className="exib"> Modo de exibição </strong>

          <img
            className="ModoDeEx"
            src={ModoDeEx}
            onClick={() => setExibicao("card")}
          />

          <GiHamburgerMenu
            className="threeB"
            onClick={() => setExibicao("list")}
          />
        </div>
      </Container>
    </>
  );
}
export default Projetos;
