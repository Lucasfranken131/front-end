

function Login(){
    return (
        <div className="login">
            <h2>Login</h2>
            <label>E-mail:<input type="email" name="email" required/></label>
            <label>Senha:<input type="password" name="password" required/></label>
            <input type="submit" />
        </div>
    )
}
export default Login;