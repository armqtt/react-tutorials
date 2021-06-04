import React, {useState, useContext} from 'react';

import {ShopContext} from './ShopContext';

const AddShop = () => {
    const [shop, setShop] = useContext(ShopContext);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [floor, setFloor] = useState('');

    const centerStyle = {
        width: '100%',
        textAlign: 'center'
    };
    const inputStyle = {
        display: 'inline-block',
        border: '2px solid lightblue',
        margin: '5px',
        padding: '5px',
        width: '80%',
        boxSizing: 'content',
        cursor: 'pointer'
    };
    const updateName = e =>{
        setName(e.target.value);
    };
    const updateLocation = e =>{
        setLocation(e.target.value);
    };
    const updateFloor = e =>{
        setFloor(e.target.value);
    };

    const submitForm = e =>{
        e.preventDefault();
        setShop(prevShop => [...prevShop, {name: name, location: location, floor: floor}])
    };

    return (
        <form style={centerStyle} onSubmit={submitForm}>
            <label for="name">Name</label><br />
            <input type="text" style={inputStyle} id="name" name="name" value={name} onChange={updateName} /><br />
            <label for="location">Location</label><br />
            <input type="text" style={inputStyle} id="location" name="location" value={location} onChange={updateLocation} /><br />
            <label for="floor">Floor</label><br />
            <input type="text" style={inputStyle} id="floor" name="floor" value={floor} onChange={updateFloor} /><br />
            <input type="submit" style={inputStyle} value="Submit" />
        </form>
    );

};

export default AddShop;