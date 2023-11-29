import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Nav from '../Nav/Nav.jsx';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [items, setItems] = useState([]);
    const [dataLength, setDataLength] = useState();
    const navigate = useNavigate();

    const FetchData = async () => {
        try {
            await axios.get(`http://localhost:3000/book/findAll/`)
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
        FetchData();
    }, []);

    return(
        <div>
        <Nav />
        <div className='books'>
            {items.map(item => (
                <React.Fragment key={item.id_book}> 
                        <div className='book' onClick={() => navigate(`/livro?id=${item.id_book}`)}>
                            <div><img src={item.book_picture} alt=" Profile" width="150px" height="200px"/></div>
                            <div>{item.book_name}</div>
                        </div>
                </React.Fragment>
            ))}
            </div>
        </div>
    )
};

export default Home;