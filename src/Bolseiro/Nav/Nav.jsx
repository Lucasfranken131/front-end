import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

import './Nav.css';
import Lupa from './lupa.png';

function Nav() {

    const [search, setSearch] = useState();

    const SearchBook = async (search) => {
        HandleClick(search);
        try{
            await axios.get(`http://localhost:3000/book/findName?name=${search}`)
            .then(res => {
                const response = res.data;
                console.log("Livro:", search);
                setSearch(response);
                console.log("Dados recebidos: ", response);
            });
        }
        catch(error) {
            console.log("Erro na requisição: ",error);
        }

    }

    function HandleClick(search) {
        useNavigate(`/home`);
    }

    return(
        <div className="Nav-bar">
            <input type="text" id="search-bar" placeholder="Pesquise o livro que quiser"/>
            <button id="search-button">
                <img src={Lupa} onClick={() => HandleClick(document.getElementById('search-bar').value)} alt="lupa" id="lupa"/>
            </button>
        </div>
    )
}

export default Nav;