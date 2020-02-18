import React, { Component } from 'react';
import './Main.css';
import dev from '../assets/img/Dev.png';
import redes from '../assets/img/redes.jpg';
import mult from '../assets/img/multimidia.jpg';
import code from '../assets/img/code.jpg';
import Nav from '../../componentes/Nav';


export default class Main extends Component {

    render() {
        return (
            <div className="Main">
                <Nav />
                <h1>Cursos</h1>

                <br/>
                <div className="fottos">
                    <img src={dev}/>
                    <Link id="Link" to='/'> Desenvolvimento de Sistemas</Link>
                </div>

                <div className="fottos">
                    <img src={redes}/>
                    <Link id="Link" to='/'> Redes de Computadores</Link>
                </div>

                <div className="fottos">
                    <img src={mult}/>
                    <Link id="Link" to='/'> Multimidia</Link>
                </div>

                <div className="fottos">
                    <img src={code}/>
                    <Link id="Link" to='/'> Code</Link>
                </div>
            </div>


        );
    }
}