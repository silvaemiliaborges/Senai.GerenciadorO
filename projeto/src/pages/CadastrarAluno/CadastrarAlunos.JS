import React from 'react';
import './Alunos.css';
import { Link } from 'react-router-dom';


export default class CadastrarA extends React.Component {
    constructor() {
        super()
        this.state = {
            Matricula: "",
            Nome: "",
            Telefone: "",
            Celular: "",
            Tipo: "",
            Curso: "",
            Turma: "",
            Turno: "",
            Termo: ""

        }
    }

    estadoMatricula = (event) => {
        this.setState({ matricula: event.target.value })
        console.log(this.state.matricula)
    }

    estadoNome = (event) => {
        this.setState({ nome: event.target.value })
        console.log(this.state.nome)
    }
    estadoTelefone = (event) => {
        this.setState({ telefone: event.target.value })
        console.log(this.state.telefone)
    }

    estadoCelular = (event) => {
        this.setState({ Celular: event.target.value })
        console.log(this.state.celular)
    }

    estadoTipo = (event) => {
        this.setState({ tipo: event.target.value })
        console.log(this.state.tipo)
    }

    estadoCurso = (event) => {
        this.setState({ curso: event.target.value })
        console.log(this.state.curso)
    }

    estadoTurma = (event) => {
        this.setState({ turma: event.target.value })
        console.log(this.state.turma)
    }

    estadoTurno = (event) => {
        this.setState({ turno: event.target.value })
        console.log(this.state.turno)
    }

    estadoTermo = (event) => {
        this.setState({ termo: event.target.value })
        console.log(this.state.termo)
    }

    Cadastrar = (event) => {
        event.preventDefault();

        fetch(""), {
            method: "POST",
            body: JSON.stringify({
                matricula: this.state.matricula,
                nome: this.state.nome,
                telefone: this.state.telefone,
                celular: this.state.celular,
                tipo: this.state.tipo,
                curso: this.state.curso,
                turma: this.state.turma,
                turno: this.state.turno,
                termo: this.state.termo
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("cadastrar-aluno")
            }

                .then(console.log("ALUNO CADASTRADO COM SUCESSO!"))

                .catch(erro => {
                    console.log(erro);
                })
        }
    }

    render() {
        return (
            <div>

                <div className="cadastroo">
                    <Nav />
                    <br></br>
                    <br></br>
                    <h1>Cadastrar Aluno</h1>
                </div>
                <div className="container">
                    <form onSubmit={this.Cadastrar}>
                        <div className="iconees">
                            <div>
                                <p>Nº de Matrícula</p>
                                <input type="text" name="username" onChange={this.estadoMatricula} />
                            </div>

                            <div>
                                <p>Nome</p>
                                <input type="text" name="username" onChange={this.estadoNome} />
                            </div>

                            <div>
                                <p>Nº de Telefone</p>
                                <input type="text" name="username" onChange={this.estadoTelefone} />
                            </div>

                            <div>
                                <p>Nº do Celular</p>
                                <input type="text" name="username" onChange={this.estadoCelular} />
                            </div>

                            <div>
                                <p>Tipo</p>
                                <input type="text" name="username" onChange={this.estadoTipo} />
                            </div>

                            <div>
                                <p>Curso</p>
                                <input type="text" name="username" onChange={this.estadoCurso} />
                            </div>

                            <div>
                                <p>Turma</p>
                                <input type="text" name="username" onChange={this.estadoTurma} />
                            </div>

                            <div>
                                <p>Turno</p>
                                <input type="text" name="username" onChange={this.estadoTurma} />
                            </div>
                            <div>
                                <p>Termo</p>
                                <input type="text" name="username" onChange={this.estadoTermo} />
                            </div>

                        </div>
                    </form>
                    <section className="bott">
                        <Link id="Link" to='/'> Finalizar Cadastro <br /> </Link>
                    </section>
                </div>

            </div>
        );
    }

}



