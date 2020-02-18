import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { parseJwt } from './services/auth';
import * as serviceWorker from './serviceWorker';

import Home from './pages/Home/Home';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';
import Login from './pages/Login/Login';
import Main from './pages/MainUser/Main';
import List from './pages/ListarAluno/Listar';
<<<<<<< HEAD
import CaAlunos from './pages/CadastrarAluno/CadastrarAlunos';
=======
import CaUser from './pages/CadastrarUsuario/CadastrarUsuario';
import Aluno from './pages/Aluno/Aluno';
>>>>>>> 58347679a21e11ae05c56971d1a4f9dea5d6b8b5


const RotaLogin = ({ component: Component }) => (
    <Route
        render={props =>
            localStorage.getItem("usuario-senai") !== null ?
                (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/", state: { from: props.location } }
                        }
                    />
                )
        }
    />
)

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Login' component={Login} />
                {/* <RotaLogin path='/Main' component={Main} /> */}
                <Route path='/Main' component={Main} />
                <Route path='/List' component={List} />
<<<<<<< HEAD
                <Route path='/CaAlunos' component={CaAlunos} />
=======
                <Route path='/CadastrarUsuario' component={CaUser} />
                <Route path='/Aluno' component={Aluno} />
>>>>>>> 58347679a21e11ae05c56971d1a4f9dea5d6b8b5
                <Route component={NaoEncontrado}/>
            </Switch>
        </div>
    </Router>
);



ReactDOM.render(routing, document.getElementById('root'));