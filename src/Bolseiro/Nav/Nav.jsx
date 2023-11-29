import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

import './Nav.css';
import Lupa from './lupa.png';

const Nav = () => {

    const navigate = useNavigate();

    const HandleClick = (search) => {
        try {
            navigate(`/search?name=${search}`);
            window.location.reload(true);
        }
        catch (error) {
            console.log("Erro de requisição: ",error)
        }
    }

    const sendHome = () => {
        navigate("/")
    }

    return(
        <div className="Nav-bar">
            <div id="home" onClick={() => sendHome()}>Bolseiro</div>
            <input type="text" id="search-bar" placeholder="Pesquise o livro que quiser"/>
            <button id="search-button">
                <img src={Lupa} onClick={() => HandleClick(document.getElementById('search-bar').value)} alt="lupa" id="lupa"/>
            </button>
        </div>
    )
}

export default Nav;