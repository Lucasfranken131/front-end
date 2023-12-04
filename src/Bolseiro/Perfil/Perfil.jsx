import { useState, useEffect } from 'react';
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
            <div id="quadro">

                <img width="100" height="100" src={perfil.profile_picture} alt="perfil"></img>

                <div className="info">      
                    <div>
                        {perfil.username}
                    </div>

                    <div>
                        {perfil.first_name} {perfil.last_name}
                    </div>

                    <div>
                        {perfil.email}
                    </div>
                </div>

                <div className="grupo-campos">
                    <div hidden={true}>
                        Nome:
                        <input type="text" id="Nome"/>
                    </div>

                    <div hidden={true}>
                        Sobrenome:
                        <input type="text" id="nome"/>
                    </div>

                    <div hidden={true}>
                        Gênero:
                        <input type="password" id="senha" />
                    </div>

                    <button type="submit" hidden={true}>Editar</button>
                </div>
            </div>
        </div>
    )
}
export default Perfil;