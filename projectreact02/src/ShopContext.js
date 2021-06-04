import React, {useState, createContext} from 'react';

export const ShopContext = createContext();

export const ShopProvider = props => {
    const [shop, setShop] = useState([
        {
            name: 'Apple Store',
            location: 'IFC',
            floor: '3F'
        },
        {
            name: 'Xiaomi Store',
            location: 'MK',
            floor: 'F/G'
        },
        {
            name: 'Hauwei',
            location: 'Centre',
            floor: '12/f'
        }
    ]);
    return (
        <ShopContext.Provider value={[shop, setShop]}>
            {props.children}
        </ShopContext.Provider>
    )
}
