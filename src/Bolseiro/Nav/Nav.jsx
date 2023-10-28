import './Nav.css';
import Lupa from './lupa.png';

function Nav() {

    function getSearch(search) {
        if(search.length === 0) {
            console.log("Nada foi pesquisado")
        }
        else {
            console.log(`O que foi pesquisado: ${search}`);
            //axios.get(`http:3000/book/findOne/${search}`);
        }
    }

    return(
        <div className="Nav-bar">
            <input type="text" id="search-bar" placeholder="Pesquise o livro que quiser"/>
            <button id="search-button" onClick={() => getSearch(document.getElementById("search-bar").value)}>
                <img src={Lupa} alt="lupa" id="lupa"/>
            </button>
        </div>
    )
}

export default Nav;