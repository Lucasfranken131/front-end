import React from 'react';
import { useState, useEffect } from 'react';

import Nav from '../Nav/Nav.jsx';

const Home = () => {

    const axios = require('axios');
    const [search, setSearch ] = useState();
    const [items, setItems] = useState([]);
    const [dataLength, setDataLength] = useState();


    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:3000/book/`);
            if (!res.ok) {
                throw new Error(`Erro na requisição: ${res.status} - ${res.statusText}`);
            }
    
            const data = await res.json();
            console.log("Dados recebidos:", data);
    
            if (Array.isArray(data) || typeof data === 'object') {
                const dataArray = Array.isArray(data) ? data : [data];
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
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div>
            {items.map(item => (
                <React.Fragment key={item.id_user}>
                    <div><button>{item.book_name}</button></div>
                </React.Fragment>
            ))}
        </div>
    )
};

export default Home;