import React from "react";
import { Container } from "./style";
import { FiChevronDown, FiFilter, FiChevronUp } from "react-icons/fi";
import filtrosmbl from "../../pages/Projects/img/filter.png";

function index() {
  return (
    <Container>
      <div className="filter">
        <div className="filtros">
          <div className="headF">
            <img src={filtrosmbl} className="smbl" />
            <h1>Filtros</h1>
          </div>
          <div className="conteudo">
            <div className="EOI" >
              <FiChevronDown />
              <strong>Empresa ou Instituição</strong>
              <div className="empresas">
                <li>Teste1</li>
                <li>Teste2</li>
                <li>Teste3</li>
              </div>
            </div>

            <div className="Resp">
              <FiChevronDown />
              <strong>Responsável</strong>
              <div className="Responsaveis">
                <li>Teste1</li>
                <li>Teste2</li>
                <li>Teste3</li>
                <li>Teste4</li>
              </div>
            </div>

            <div className="DOF">
              <FiChevronDown />

              <strong>Data de término</strong>
              <div className="DataDeTermino">
                <li>Teste3</li>
                <li>Teste3</li>
                <li>Teste3</li>
                <li>Teste3</li>
                <li>Teste3</li>
              </div>
            </div>

            <div className="Stts">
              <FiChevronDown />
              <strong>Status</strong>
              <div className="Status">
                <li>Teste3</li>
                <li>Teste3</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default index;
