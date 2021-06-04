import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navMenu = {
        float: 'right'
    }
    const navStyle = {
        fontWeight: 'bold',
        float: 'left',
        listStyle: 'none',
        paddingRight : '20px',
        color: 'white'
    };

    return (
        <nav>
            <Link to="/"><h3>Logo</h3></Link>
            <ul style={navMenu}>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
