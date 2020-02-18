import React, { Component } from 'react';

import './Listar.css';
import Axios from 'axios';

import { Accordion, Card, Button, Table, ButtonToolbar } from 'react-bootstrap';

import Nav from '../../componentes/Nav';

import info from "../../assets/img/infoicon.png";



export default class List extends Component {

    constructor() {
        super();
        this.state = {
            alunos: [
                { matricula: "12345678", nome: "Joao", telefone: "(11) 0000-0000", celular: "(11)90000-0000", curso: "Técnico de Desenvolvimento de Sistemas", turma: "1DM", turno: "Manhã", termo: "1" },
                { matricula: "01010101", nome: "Maria", telefone: "(11) 1111-0000", celular: "(11)90000-0000", curso: "Técnico de Redes de Computadores", turma: "1RT", turno: "Tarde", termo: "1" }
            ],
            buscarNome: "",
            listaConsultas: []

        }
    }


    // Listar Aluno
    listarAluno = () => {
        fetch('http://192.168.5.158:5000/api/...', {
            headers: {

                'Authorization': 'Bearer ' + localStorage.getItem("usuario-senai"),
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ alunos: data }))
            .catch(error => console.log(error))
    }

    // Buscar por Nome
    nomeAluno = (event) => {
        this.setState({ buscarNome: event.target.value })
    }

    //Filtro DE aluno
    FiltraConsultas() {
        let listaFiltrada = this.state.alunos;

        if (this.state.buscarNome !== null && this.state.buscarNome !== "") {
            listaFiltrada = listaFiltrada.filter(
                x =>
                    x.nome.toLowerCase().includes(this.state.buscarNome.toLowerCase()) ||
                    x.curso.toLowerCase().includes(this.state.buscarNome.toLowerCase()) ||
                    x.turma.toLowerCase().includes(this.state.buscarNome.toLowerCase()) ||
                    x.matricula.includes(this.state.buscarNome.toLowerCase())
            );
        }


        this.setState({ listaConsultas: listaFiltrada });
    }


    atualizaEstado(event) {
        console.log(this.state.buscarNome)
        this.setState({ buscarNome: event.target.value }, () => {
            this.FiltraConsultas();
        });
    }

    componentDidMount() {
        this.setState({ listaConsultas: this.state.alunos });
    }

    render() {

        return (
            <div className="Main">
                <Nav />
                <br></br>
                <br></br>
<<<<<<< HEAD
                <div className="fundo">
                <h1>Lista de Alunos</h1>
=======
                <h1>Listar Alunos</h1>
>>>>>>> cef1bade1887c1220b4c4216cc249698146e84d3
                {/*------------------------- tabela--------------------- */}
                <div className="Tabela">
                    {/* Imput Para Listar Por Nome */}

                    <input className="filtro"
                        value={this.state.buscarNome}
                        placeholder="Buscar Aluno pelo Nome, Curso ou Turma"
                        type="text"
                        onChange={this.atualizaEstado.bind(this)}
                        // style={{ width: "100%" }}
                        name="nome"
                    />


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nº de Matrícula</th>
                                <th>Nome</th>
                                <th className="List">Telefone</th>
                                <th className="List">Celular</th>
                                <th className="List">Curso</th>
                                <th>Turma</th>
                                <th className="List">Turno</th>
                                <th className="List">Termo</th>
                                <th >+Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.listaConsultas.map(element => {
                                return (
                                    <tr>
                                        <td>{element.matricula}</td>
                                        <td>{element.nome}</td>
                                        <td className="List">{element.telefone}</td>
                                        <td className="List">{element.celular}</td>
                                        <td className="List">{element.curso}</td>
                                        <td>{element.turma}</td>
                                        <td className="List">{element.turno}</td>
                                        <td className="List" >{element.termo}</td>
                                        <td>
                                            <button
                                                style={{ borderTop: '0 none', borderLeft: '0 none', borderRight: '0 none', borderBottom: '10px' }}
                                                onClick={ () => localStorage.setItem("MatriculaUser", element.matricula) }
                                                onClick={ () => this.props.history.push('/Aluno')}
                                            >
                                                <img src={info} style={{ marginLeft: 'auto', marginRight: 'auto', display: "block" }} />

                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
<<<<<<< HEAD
                    </div>
=======


>>>>>>> cef1bade1887c1220b4c4216cc249698146e84d3
                </div >
            </div >
        );
    }
}