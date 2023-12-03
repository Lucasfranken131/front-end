import { useNavigate } from "react-router-dom";
import './Nav.css';
import Lupa from './lupa.png';
import { useState, useEffect } from "react";
import axios from 'axios';

const Nav = () => {

    const navigate = useNavigate();
    const [ perfil, setPerfil ] = useState([]); 

    const FetchData = async () => {
        await axios.get(`http://localhost:3000/profile/findUser/1`)
        .then(res => {
            const response = res.data;
            setPerfil(response); 
        });
    }

    useEffect(() => {
        FetchData();
    }, [])

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

            <div onClick={() => navigate(`/perfil?username=${perfil.username}`)}><img src={perfil.profile_picture} id="profile-picture"/></div>
        </div>
    )
}

export default Nav;