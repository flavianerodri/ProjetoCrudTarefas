// Importando React
import React from "react";

// Importando Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Importando CSS
import "./App.css";

// Importando Routes react-router-dom
import { BrowserRouter as Router, Switch,
	Route, Link } from "react-router-dom";

// Importando Componentes React 
import CriarTarefa from
	"./Components/criar-tarefa.component";
import EditarTarefa from
	"./Components/editar-tarefa.component";
import ListaTarefas from
	"./Components/tarefas-lista.component";

// Componente App
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/criar-tarefa"}
				className="nav-link">
				Agenda de Tarefas
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/criar-tarefa"}
					className="nav-link">
					Adicionar Tarefa
				</Link>
				</Nav>

				<Nav>
				<Link to={"/tarefas-lista"}
					className="nav-link">
					Lista de Tarefas
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Switch>
				<Route exact path="/"
					component={CriarTarefa} />
				<Route path="/criar-tarefa"
					component={CriarTarefa} />
				<Route path="/editar-tarefa/:id"
					component={EditarTarefa} />
				<Route path="/tarefas-lista"
					component={ListaTarefas} />
				</Switch>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
