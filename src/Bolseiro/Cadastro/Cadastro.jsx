import "./cadastro.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useState } from "react";

const Cadastro = () => {

  const [ isName, setIsName ] = useState(true);
  const [ isLastName, setIsLastName ] = useState(true);
  const [ isUsername, setIsUsername ] = useState(true);
  const [ isEmail, setIsEmail ] = useState(true);
  const [ isPassword, setIsPassword ] = useState(true);
  const [contentName, setContentName ] = useState(" ")
  const [contentLastName, setContentLastName ] = useState(" ")
  const [contentUsername, setContentUsername ] = useState(" ")
  const [contentEmail, setContentEmail] = useState(" ") 
  const [contentPassword, setContentPassword] = useState(" ")

  const navigate = useNavigate();

  const registrar = async (firstName, lastName, username, email, password) => {
      
      try {
        const post_data = {
          profile_picture: "https://christopherscottedwards.com/wp-content/uploads/2018/07/Generic-Profile.jpg",
          first_name: firstName,
          last_name: lastName,
          username: username,
          email: email,
          password: password,
          isAdmin: false
        };
        
        await axios.post('http://localhost:3000/profile/createUser', post_data)
        .then(res => {
          console.log(res);
          const user = res.data;
          const userId = user.id_user;
          const now = new Date();
          const expirationTime = new Date(now.getTime() + 60 * 60 * 1000);
          console.log(Cookies.set("id", userId, { expires: expirationTime }));
          navigate(`/home`);
        });
      }
      catch(error) {
        console.log(error);
      };
  }
    
    const validateFormData = (firstName, lastName, username, email, password) => {
        const errors = [];
      
        // Validate first name
        if (!firstName.trim()) {
          setContentName("Falta colocar o nome!")
          setIsName(false);
          return false;
        }
        else if (firstName.trim()) {
          setContentName(" ");
          setIsName(true);
        }

        if (!lastName.trim()) {
          setContentLastName("Falta colocar o sobrenome!")
          setIsLastName(false);
          return false;
        }
        else if (lastName.trim()) {
          setContentLastName(" ");
          setIsLastName(true);
        }

        // Validate username
        if (!username.trim()) {
          setContentUsername("Falta colocar o Username!");
          setIsUsername(false);
          return false;
        }
        else if (username.trim()) {
          setContentUsername(" ");
          setIsLastName(true);
        }

        else if (!/[a-zA-Z0-9_-]+/.test(username)) {
          alert('Username pode conter apenas letras, números, hífens e underline!');
          return false;
        }
        // Validate email
        if (!email.trim()) {
          setContentEmail("Falta colocar o e-mail!")
          setIsEmail(false);
          return false;
        }
        else if (email.trim()) {
          setContentEmail(" ");
          setIsEmail(true);
        }

        else if (!/\b[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,}\b/.test(email)) {
          alert('Por favor, insira um e-mail válido!');
          return false;
        }

        // Validate password
        if (password.length < 8 || password.length > 16) {
          setContentPassword("Falta colocar a senha! (entre 8 e 16 caracteres)");
          setIsPassword(false);
          return false;
        }
        else if (password.trim()) {
          setContentPassword(" ");
          setIsPassword(true);
        }

        if (errors.length > 0) {
          const errorDivs = document.querySelectorAll('.error');
          for (let i = 0; i < errorDivs.length; i++) {
            errorDivs[i].textContent = errors[i];
          }
          console.log("Retornou false: ",errors)
          return false;
        } 
        else {
          registrar(firstName, lastName, username, email, password);
          console.log("Retornou true: ",errors);
          navigate("/home");
          return true;
        }
      }
    return(
        <div>
          <div className="Nav-bar">
            <div id="home" onClick={() => navigate("/")}>Bolseiro</div>
          </div>
          <div className="background">
          <div className="cadastro">
              <h2>Cadastro</h2>
              <input type="text" id="first_name" placeholder="Nome" required/>
              {contentName}
              <input type="text" id="last_name" placeholder="Sobrenome" required/>
              {contentLastName}
              <input type="text" id="username" placeholder="Username" required/>
              {contentUsername}
              <input type="text" id="email" placeholder="seuemail@hotmail.com" required/>
              {contentEmail}
              <input type="password" minLength="8" maxLength="16" id="password" placeholder="senha" required/>
              {contentPassword}
              <input id="submit"type="submit" onClick={() => validateFormData(document.getElementById('first_name').value, document.getElementById('last_name').value, document.getElementById('username').value, document.getElementById('email').value, document.getElementById('password').value)} />
              <div onClick={() => navigate("/login")} id='onclick-div'>Já possui uma conta? <u>Entrar</u></div>
          </div>
          </div>
        </div>
    );
} 
export default Cadastro;