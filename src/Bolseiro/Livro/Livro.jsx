import { useState, useEffect } from 'react';
import axios from 'axios';

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
            <div className='book'>
                <div><img src={book.book_picture} alt=" Profile" width="150px" height="200px"/></div>
                <div>{book.book_name}</div>
                <div>{book.book_author}</div>
                <div>{book.book_date}</div>
                <div>{book.book_publisher}</div>
            </div>
        </div>
    )
};

export default Livro;