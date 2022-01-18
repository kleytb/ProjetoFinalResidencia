import React, {useRef} from "react";

import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/index";

import Saly from "./images/Saly-10.png";
import MF from "./images/Media Background.png";
import Sg from "./images/Media Object.png";
import saly1 from "./images/Saly-1.png";
import saly13 from "./images/Saly-13.png";
import eli from "./images/Ellipse 2.png";
import MF2 from "./images/Media Background2.png";
import bwg from "./images/lady.png";
import lge from "./images/Logo.png";
import lgt from "./images/t2m logo 1.png";

import "./style.css";

function Home() {

  const part1 = useRef()
  const part2 = useRef()

  return (
    <>
      <Navbar
        part1={part1}
        part2={part2}
      />
      <div className="c1">
        <div className="Tcab">
          <div className="t1">
            <h1 style={{fontSize: '4rem'}}>Acompanhe equipes com agilidade</h1>
          </div>

          <div className="t2">
            <p style={{fontSize: '2rem'}}>
              Acompanhe portfólios de sua organização através de indicadores de
              performance
            </p>
          </div>

          <div className="bt1">
            <Link to="/register">
              <button>Criar conta grátis</button>
            </Link>
          </div>
        </div>

        <div className="ft1">
          <img className="pcb" src={Saly} alt="" />
        </div>

        <div className="fl">
          <img className="bg2" src={Sg} alt="" />
        </div>
        <div className="ft2" ref={part1}>

          <img className="bg" src={MF} alt="" />
        </div>

        <div className="sl1">
          <img className="sl" src={saly1} alt="" />
        </div>

        <div className="list">
          <h1>
            <strong>Acompanhe entregáveis da sua equipe</strong>
          </h1>
          <p>
            Gerencie os incrementos de sua equipe ágil através de um quadro
            Kanban personalizado e veja os indicadores de desempenho da equipe
          </p>

          <ul>
            <li>
              <strong>
                {" "}
                Informações visuais de indicadores de desempenho{" "}
              </strong>
            </li>
            <li>
              <strong> Metas de cada projeto do portifólio</strong>
            </li>
            <li>
              <strong> Sinalizadores macro de impedimentos</strong>
            </li>
          </ul>
        </div>

        <div className="br">
          <img className="bg2" src={Sg} alt="" />
        </div>
        <div className="mf2" >
          <img className="bg" src={MF2} alt="" />
        </div>

        <div className="el">
          <img className="bol" src={eli} alt="" />
        </div>

        <div className="sl13">
          <img className="sl" src={saly13} alt="" />
        </div>

        <div className="list2">
          <h1>
            <strong>Comunique-se com os integrantes do seu time</strong>
          </h1>
          <p>
            Visualize e entre em contato com todos que fazem parte do seu time
            de forma rápida
          </p>

          <ul>
            <li>
              <strong> Integrantes dos projetos da sua equime ágil </strong>
            </li>
            <li>
              <strong> Informações de contato de cada mebro do seu time</strong>
            </li>
            <li>
              <strong>Busca rápida de membros da organização</strong>
            </li>
          </ul>
        </div>

        <div className="fteri">
          <img src={bwg} alt="" ref={part2} />
        </div>

        <div className="ftert">
          <div className="lg">
            <a href="#">
              <img className="lge" src={lge} alt="" />
            </a>
            <h1 className="b">|</h1>
            <a href="https://www.t2mlab.com/" target="_blank">
              <img className="lgt" src={lgt} alt="" />
            </a>
          </div>
        </div>

        <div className="Text">
          <h1 className="st">
            A t2m – Test to Market Ltda. é uma empresa brasileira, com mais de
            19 anos de existência, cuja missão é contribuir para a construção de
            software com qualidade.
          </h1>

          <p className="fu">
            Buscamos cumprir nossa missão, atuando junto a nossos clientes, em
            diversos níveis de intensidade, mas sempre com o comprometimento que
            assegura que nosso trabalho será efetuado com a qualidade que a
            nossa experiência e conhecimento garantem.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
