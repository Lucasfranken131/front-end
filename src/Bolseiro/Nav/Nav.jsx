import './Nav.css';
import Lupa from './lupa.png';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function Nav() {



    return(
        <div className="Nav-bar">
            <input type="text" id="search-bar" placeholder="Pesquise o livro que quiser"/>
            <button id="search-button">
                <img src={Lupa} alt="lupa" id="lupa"/>
            </button>
        </div>
    )
}

export default Nav;