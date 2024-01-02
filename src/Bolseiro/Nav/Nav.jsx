import { useNavigate } from "react-router-dom";
import './Nav.css';
import Lupa from './lupa.png';
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import axios from 'axios';

const Nav = () => {

    const navigate = useNavigate();
    const [ perfil, setPerfil ] = useState([]);
    const id = Cookies.get("id")
    const storedUserId = parseInt(Cookies.get("id")); // Parse the value as an integer
    console.log(storedUserId);

    const FetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/profile/findUser/${storedUserId}`);
            console.log(response);
            setPerfil(response.data);

        } catch (error) {
            console.error("Erro na solicitação:", error);
        }
    };

    useEffect(() => {
        FetchData();
    }, []);

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
        Cookies.remove("id");
        navigate("/")
    }

    return(
        <div className="Nav-bar">
            <div id="home" onClick={() => navigate("/home")}>Bolseiro</div>
            <input type="text" id="search-bar" placeholder="Pesquise o livro que quiser"/>
            <button id="search-button">
                <img src={Lupa} onClick={() => HandleClick(document.getElementById('search-bar').value)} alt="lupa" id="lupa"/>
            </button>
            <div onClick={() => navigate(`/perfil?user=${perfil.id_user}`)}>
                <img src={perfil.profile_picture} id="profile-picture" alt="profile" />
            </div>
            <div onClick={() => sendHome()} id="sair"><button>Sair</button></div>
        </div>
    )
}

export default Nav;