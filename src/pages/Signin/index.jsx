import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

import Swal from "sweetalert2";

import api from "../../service/api";

import Logo from "../Home/images/Logo.png";



export default function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      let response = await api.post('/api/login', {
        email,
        senha: password
      })

      let user = response.data
      localStorage.setItem('user', JSON.stringify(user))

      navigation('/teams')

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dados incorretos',
      });
    }

  };

  return (
    <div className="telaLogin">
      <form className="form" onSubmit={submitHandler}>
        <center>
          <div className="imagePlacer">
            <Link to="/">
              <img clasName="imageHeader" src={Logo} alt=""></img>
            </Link>
          </div>
        </center>
        <div>
          <h1 className="topText">Login</h1>
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

          <button className="primary" type="submit">
            Entrar
          </button>
        </div>
        <div>

          <div className="bottomText">
            Novo usuário? <Link to="/register">Crie sua conta</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
