import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext';

import './App.css';

function Shop() {
    const [shop, setShop] = useContext(ShopContext);


    const [items, setItems] = useState([
        { name: 'Shop 01', id: '1' },
        { name: 'Shop 02', id: '2' }
    ]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {

    }

    return (
        <div className="App">
            <Link to='./addshop'>Add Shop</Link>
            <h1>Shop Context: {shop.length}</h1>
            <div>
                {shop.map(shopItem => (
                    <div>
                        <h2>{shopItem.name}</h2>
                        <h5>{shopItem.location}</h5>
                        <h5>{shopItem.floor}</h5>
                    </div>
                ))}

            </div>
            <br />
            <hr />
            <br />
            <h1>Shop</h1>
            {items.map(item => (
                <h1>
                    <Link to={`/shop/${item.id}`}>
                        {item.name}
                    </Link>
                </h1>

            ))}
        </div>
    );
}

export default Shop;
