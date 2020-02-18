import React from 'react';

import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { parseJwt } from './../services/auth.js';


function Menu() {

    return (

        <Nav className='Nav'
            activeKey="/home"
        >
            
            <Nav.Item>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="/Main">Cursos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/CadastrarUsuario">Cadastrar Professor</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/List">Listar Aluno</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/link-2">Fazer ocorrencia</a>
                    </li>
                    <Nav.Link eventKey="link-2" onClick={() => localStorage.removeItem('usuario-senai')} >Logout</Nav.Link>
                </ul>
            </Nav.Item>
        </Nav>
        
    );
}
export default Menu;