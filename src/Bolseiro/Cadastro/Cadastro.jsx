import "./cadastro.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

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
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("password", password);
        });
      }
      catch(error) {
        console.log(error);
      };
    }

    function validateFormData(firstName, lastName, username, email, password) {
        const errors = [];
      
        // Validate first name
        if (!firstName.trim()) {
          errors.push('First name is required');
        }
      
        // Validate last name
        if (!lastName.trim()) {
          errors.push('Last name is required');
        }
      
        // Validate username
        if (!username.trim()) {
          errors.push('Username is required');
        } else if (!/[a-zA-Z0-9_-]+/.test(username)) {
          errors.push('Username can only contain letters, numbers, hyphens, and underscores');
        }
      
        // Validate email
        if (!email.trim()) {
          errors.push('Email is required');
        } else if (!/\b[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,}\b/.test(email)) {
          errors.push('Please enter a valid email address');
        }
      
        // Validate password
        if (password.length < 8 || password.length > 16) {
          errors.push('Password must be between 8 and 16 characters long');
        }
      
        if (errors.length > 0) {
          const errorDivs = document.querySelectorAll('.error');
          for (let i = 0; i < errorDivs.length; i++) {
            errorDivs[i].textContent = errors[i];
          }
          console.log("Retornou false: ",errors)
          return false;
        } else {
          registrar(firstName, lastName, username, email, password)
          console.log("Retornou true: ",errors);
          navigate("/");
          return true;
        }
      }
    return(
        <div>
          <div className="Nav-bar-locked">
            <div id="home">Bolseiro</div>
          </div>

          <div className="background">
          <div className="cadastro">
              <h2>Cadastro</h2>
              <input type="text" id="first_name" placeholder="Nome" required/>
              <input type="text" id="last_name" placeholder="Sobrenome" required/>
              <input type="text" id="username" placeholder="Username" required/>
              <input type="text" id="email" placeholder="seuemail@hotmail.com" required/>
              <input type="password" minLength="8" maxLength="16" id="password" placeholder="senha" required/>
              <input id="submit"type="submit" onClick={() => validateFormData(document.getElementById('first_name').value, document.getElementById('last_name').value, document.getElementById('username').value, document.getElementById('email').value, document.getElementById('password').value)} />
              <div onClick={() => navigate("/login")} id='onclick-div'>Já possui uma conta? <u>Entrar</u></div>
          </div>
          </div>
        </div>
    );
}
export default Cadastro;