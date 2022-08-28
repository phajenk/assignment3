import { Link } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
    padding-left: 5px;
    margin:2px;
    background: #f58742;
    @media (max-width: 700px) {
        padding-top: 64px;
    }
    @media (min-width: 700px) {
        position: fixed;
        width: 220px;
        height: calc(100% - 0px);
        overflow-y: auto;
    }
`;
const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 3;
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5em;
        color: #f0e9e9;
    }
    a:visited {
        color: #ffffff;
    }
    a:hover,
    a:focus {
        color: #000000;
    }
`;

const NavBar = () => {
    
    return (
        <Nav>
            <NavList>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/interest">Interest</Link>
                </li>
                <li>
                    <Link to="/awards">Awards</Link>
                </li>
            </NavList>
        </Nav>
    )    
}

export default NavBar