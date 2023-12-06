import './login.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';

function Login(){

    const navigate = useNavigate();

    const login = async (username, password) => {
        try {
            await axios.get(`http://localhost:3000/profile/login?username=${username}&password=${password}`)
            .then(res => {
                const response = res.data;
                const user = res.data[0];
                const userId = user.id_user;
                console.log("Usuário: ", user);
                console.log("userId:", userId);
                const now = new Date();
                const expirationTime = new Date(now.getTime() + 60 * 60 * 1000);
                console.log(Cookies.set("id", userId, { expires: expirationTime }));
                console.log(response);
                navigate(`/home`);
            })
            .catch(error => {
                console.log("Não foi possível se Logar.", error);
            });
        } catch (error) {
            console.log("Deu erro aqui:", error)
        }
    };

    return (
        <div>
            <div className="Nav-bar">
                <div id="home" onClick={() => navigate("/")}>Bolseiro</div>
            </div>
            <div className='background'>  
                <div className="login">
                    <h2>Login</h2>
                    <input type="text" id="username" placeholder='Username' required  />         
                    <input type="password" id="password" placeholder='Senha' required/>      
                    <input type="submit" onClick={() => login(document.getElementById('username').value, document.getElementById('password').value)}/>
                    <div onClick={() => navigate("/cadastro")} id='onclick-div'>Não possui uma conta? <u>Criar conta</u></div>
                </div>
            </div>
        </div>
    )
}
export default Login;