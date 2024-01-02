import { useState, useEffect } from 'react';
import axios from 'axios';
import './livro.css';
import Nav from '../Nav/Nav';

const Livro = () => {

    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("id");
    const [ book, setBook ] = useState([]);

    const FetchData = async () => {
        try {
            await axios.get(`http://localhost:3000/book/findBook/${id}`)
            .then(res => {
                const response = res.data;
                setBook(res.data)
                console.log("Dados recebidos:", response);
            });
        }
        catch (error) {
            console.log("Requisição de livro inválida.", error);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);

    return(
        <div>
            <Nav/>
            <div id='book'>
            <div className='book-image'>
                <div><img src={book.book_picture} alt=" Profile" width="300px" height="450px"/></div>
            </div>
            <div className='book-info'>
                <h1><div>{book.book_name}</div></h1><hr/>
                <div>Autor: {book.book_author}</div>
                <div>Data de Publicação: {book.book_date}</div>
                <div>Editora: {book.book_publisher}</div>
                <div>Descrição: {book.book_description}</div>
                <div><button onClick={() => window.open(book.pdf_link)}>Leitura</button></div>
            </div>
            </div>
        </div>
    )
};

export default Livro;