import { React } from 'react';
import { useState } from 'react';

import Nav from '../Nav/Nav.jsx';

const Home = () => {

    const [items, setItems] = useState([]);
    const [book, setBook] = useState();

    return(
        <div>
            <header>
                <Nav/>
            </header>

            <main>
                Home
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Home;