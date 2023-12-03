import { useState, useEffect } from 'react';
import axios from 'axios';

import Nav from '../Nav/Nav';

const Perfil = () => {

    const [ perfil, setPerfil ] = useState([])

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

    return(
        <div>
            <Nav/>           
            <div id="quadro">

                <img width="100" height="100" src={perfil.profile_picture} alt="perfil"></img>

                <div class="info">      
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

                <div class="grupo-campos">
                    <div hidden={true}>
                        <label for="Sobrenome">Nome:</label>
                        <input type="text" id="Nome"/>
                    </div>

                    <div hidden={true}>
                        <label for="Sobrenome">Sobrenome:</label>
                        <input type="text" id="nome"/>
                    </div>

                    <div hidden={true}>
                        <label for="senha">Gênero:</label>
                        <input type="password" id="senha" />
                    </div>

                    <button type="submit" hidden={true}>Editar</button>
                </div>
            </div>
        </div>
    )
}
export default Perfil;