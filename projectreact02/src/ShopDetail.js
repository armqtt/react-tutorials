import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function ShopDetail({match}) {
    const [item, setItem] = useState({id: ''});

    useEffect(() => {
        setItem({id: match.params.id});
        fetchItems();
    }, []);

    const fetchItems = async () => {

    }

    return (
        <div className="App">
            <h1>Shop ID is {item.id}</h1>
            
        </div>
    );
}

export default ShopDetail;
