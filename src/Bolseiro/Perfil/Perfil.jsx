import { useState, useEffect } from 'react';
import './perfil.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import Nav from '../Nav/Nav';

const Perfil = () => {

    const [ perfil, setPerfil ] = useState([]);     
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("user");

    const FetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/profile/findUser/${id}`);
            console.log(response);
            setPerfil(response.data);
        }
        catch (error) {
            console.error("Erro na solicitação:", error);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);

    return(
        <div>
            <Nav/>           
                <div id="perfil-container">
                    
                    <img id="perfil-img" src={perfil.profile_picture} alt="perfil" />

                    <div id="perfil-info" className="info">      
                        <div className="info-item">
                            <span className="label">Username</span>
                            {perfil.username}
                        </div>

                        <div className="info-item">
                            <span className="label">Nome completo</span>
                            {perfil.first_name} {perfil.last_name}
                        </div>

                        <div className="info-item">
                            <span className="label">Email</span>
                            {perfil.email}
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Perfil;