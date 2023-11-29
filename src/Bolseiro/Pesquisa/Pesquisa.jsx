import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Nav from '../Nav/Nav';

const Pesquisa = () => {


    const [ items, setItems ] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    const queryParameters = new URLSearchParams(window.location.search);
    const name = queryParameters.get("name");
  
    const fetchData = async () => {
        try {
            await axios.get(`http://localhost:3000/book/findName?name=${name}`)
            .then(res => {
                const response = res.data;
                console.log("Dados recebidos:", response);
                if (Array.isArray(response) || typeof response === 'object') {
                    const dataArray = Array.isArray(response) ? response : [response];
                    console.log("Tipo de dados é uma array ou objeto.");
        
                    if (dataArray.length === 0) {
                        console.log("Final da página");
                    } else if (dataLength !== dataArray.length) {
                        setDataLength(dataArray.length);
                        setItems(prevItems => [...prevItems, ...dataArray]);
                    }
                } else {
                    console.error("Os dados não são do tipo esperado (array ou objeto).");
                }
            })
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return(
        <div>
            <Nav/>
            <div className='books'>
                {items.map(item => (
                    <React.Fragment key = {item.id_book}>
                        <div className='book'>
                            <div><img src={item.book_picture} alt="Livro" width="150px" height="200px"/></div>
                            <div>{item.book_name}</div>
                            <div>{item.book_author}</div>
                            <div>{item.book_date}</div>
                            <div>{item.book_publisher}</div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Pesquisa;