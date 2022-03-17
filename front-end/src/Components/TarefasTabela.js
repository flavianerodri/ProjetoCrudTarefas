import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TarefasTabela = (props) => {
const { _id, nome, descricao, concluido } = props.obj;

const deletarTarefa = () => {
	axios
	.delete(
"http://localhost:3003/tarefa/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Tarefa excluida com sucesso");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Algo está errado"));
};

return (
	<tr>
	<td>{nome}</td>
	<td>{descricao}</td>
	<td>{concluido}</td>
	<td>
		<Link className="edit-link"
		to={"/editar-tarefa/" + _id}>
		Edit
		</Link>
		<Button onClick={deletarTarefa}
		size="sm" variant="danger">
		Excluir
		</Button>
	</td>
	</tr>
);
};

export default TarefasTabela;
