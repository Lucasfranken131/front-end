import { useState } from "react";
import "./Cadastro.css"
const Cadastro = () =>{
    const registrar = async(first_name, last_name, username, email, password) => {
        console.log(first_name)
        console.log(last_name)
        console.log(username)
        console.log(email)
        console.log(password)
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
          console.log("Retornou true: ",errors)
          return true;
        }
      }
    return(
        <header>
                <div className="cadastro">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Cadastro</h2>
                    <label>Primeiro Nome: <br/><input type="text" id="first_name"  required/></label>
                    <label>Sobrenome: <br/><input type="text" id="last_name" required/></label>
                    <label>Apelido: <br/><input type="text" id="username" required/></label>
                    <label>E-mail: <br/><input type="text" id="email" placeholder="seuemail@hotmail.com"required/></label>
                    <label>Senha: <br/><input type="password" minLength="8" maxLength="16" id="password" required/></label>
                    <br/>
                    <input id="submit"type="submit" onClick={() => validateFormData(document.getElementById('first_name').value, document.getElementById('last_name').value, document.getElementById('username').value, document.getElementById('email').value, document.getElementById('password').value)} />
                </div>
        </header>
    );
}
export default Cadastro;