import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../service/api";

import Logo from "../Home/images/Logo.png";
import chevron from "../../images/chevron.png";
import gestor from "../../images/gestor.png";
import integrante from "../../images/integrante.png";
import responsavel from "../../images/responsavel.png";

import "./style.css";

export default function RegisterScreen(props) {
  const navigation = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState();
  const [roles, setRoles] = useState([]);

  function handleSetRole(role) {
    setRole(role)
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'As senhas não são iguais!',
    });

    if (password.length < 5) return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Senha muito curta!',
    });

    if (role === undefined) return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Escolha um cargo no Escritório Ágil',
    });

    let user = await api.post("/api/cadastrarPessoas", {
      nome: name,
      email,
      senha: password,
      funcao: role.id
    });

    localStorage.setItem('user', JSON.stringify(user.data))

    navigation("/teams");

  };

  useEffect(() => {

    async function getRoles() {
      let roles = await api.get('/api/funcoes')

      setRoles(roles.data);
    }

    getRoles()
  }, []);

  return (
    <div className="telaLogin">
      <div className="pageCenter">
        <form className="form" onSubmit={submitHandler}>
          <center>
            <div className="imagePlacer">
              <Link to="/">
                <img clasName="imageHeader" src={Logo} alt="" Link="/"></img>
              </Link>
            </div>
          </center>
          <div>
            <h1 className="topText">Faça sua conta</h1>
          </div>

          <div>
            <input
              type="text"
              id="name"
              placeholder="Nome"
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>

          <div className="seletorFuncao">
            <div
              className="seletorButton"
              onClick={() => {
                document
                  .querySelector(".seletorFuncao")
                  .classList.toggle("active");
              }}
            >
              <img src={chevron} alt="" width="15px"></img>
              <span>Função no escritório ágil {role ? `(${role.funcao})` : null} </span>
            </div>

            <div className="seletorOptions">
              {
                roles.map(role => {

                  let roleImage = {
                    gestor,
                    responsavel,
                    integrante
                  }

                  let NormalizedRoleName = role.funcao.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase()

                  return (

                    <div className="seletorOption" key={role.id} onClick={() => handleSetRole(role)}>
                      <img src={roleImage[NormalizedRoleName]} alt=" "></img>
                      <div>
                        <span className="titulo">{role.funcao}</span>
                        <span>{role.descricao}</span>
                      </div>
                    </div>

                  )
                })
              }

            </div>
          </div>
          <div>
            <button onClick={submitHandler} className="primary" type="submit">
              Cadastre-se
            </button>
          </div>
          <div>
            <div className="bottomText">
              Já possui uma conta? <Link to="/signin">Faça Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
