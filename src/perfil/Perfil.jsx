function Perfil(){
    return(
<html>
<head>
    <title>Bolseiro</title>
</head>
<body>
    <header><h1>Bolseiro</h1></header>

    <nav>
        <a href="#">Home</a>
        <a href="#">Catálogo</a>
        <a href="#">Perfil</a>
    </nav>

    <div id="selecao">
    <img width="100" height="100" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"></img><br></br>
         <a href="#">Dados Pessoais</a><br></br>
         <a href="#">Pedidos</a>
    </div>
    <div id="quadro">
        <div class="grupo-campos">
            <form>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required />

                <label for="dataNascimento">Data de Nascimento:</label>
                <input type="date" id="dataNascimento" name="dataNascimento" required />

            </form>
        </div>

        <div class="grupo-campos">
            <form>
                <label for="sobrenome">Sobrenome:</label>
                <input type="text" id="sobrenome" name="sobrenome" required />

                <label for="genero">Gênero:</label>
                <input type="text" id="genero" name="genero" />

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" />

            </form>
        </div>
    <button type="submit">Editar</button>
    </div>
</body>
</html>
    )
}
export default Perfil;

