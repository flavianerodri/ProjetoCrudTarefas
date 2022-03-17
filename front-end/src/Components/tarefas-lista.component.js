import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TarefasTabela from "./TarefasTabela";

const ListaTarefas = () => {
const [tarefas, setTarefas] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:3003/tarefa")
	.then(({ data }) => {
		setTarefas(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTabela = () => {
	return tarefas.map((res, i) => {
	return <TarefasTabela obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Tarefa</th>
			<th>Descrição</th>
			<th>Concluido</th>
			<th>Ações</th>
		</tr>
		</thead>
		<tbody>{DataTabela()}</tbody>
	</Table>
	</div>
);
};

export default ListaTarefas;
