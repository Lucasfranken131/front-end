import React from "react";
import { Route, Routes , BrowserRouter } from "react-router-dom";

import Home from "./Bolseiro/Home/Home";
import Cadastro from "./Bolseiro/Cadastro/Cadastro";
import Login from "./Bolseiro/Login/Login";
import Perfil from './Bolseiro/Perfil/Perfil';
import Livro from './Bolseiro/Livro/Livro';
import Pesquisa from './Bolseiro/Pesquisa/Pesquisa';

function AppRoutes(){
   return(
    <div>
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element = { <Cadastro/> }  path="/cadastro" />
                    <Route element = { <Login/> }  path="/login" />
                    <Route element = { <Home/> }  path="/home" exact />
                    <Route element = { <Perfil/> } path="/perfil" />
                    <Route element = { <Livro/> } path="/livro" />
                    <Route element = { <Pesquisa/> } path="/search" />
                </Routes>
            </BrowserRouter>
        </div>
    </div>
   )
}

export default AppRoutes;