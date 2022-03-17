// EditaTarefa é um componente para atualiza o data

// Importando módulos
import React, { useState, useEffect } from "react";
import axios from "axios";
import TarefasForm from "./TarefasForm";

// Componente EditarTarefa 
const EditarTarefa = (props) => {
const [formValues, setFormValues] = useState({
	nome: "",
	descricao: "",
	concluido: "",
});
	
//onSubmit handler
const onSubmit = (tarefa) => {
	axios
	.put(
		"http://localhost:3003/tarefa/editar" +
		props.match.params.id,
		tarefa
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Tarefa alterada com sucesso");
		props.history.push("/editar.tarefa");
		} else Promise.reject();
	})
	.catch((err) => alert("Algo está errado"));
};

// Carrega os dados do servidor e reinicializa o formulário
useEffect(() => {
	axios
	.get(
		"http://localhost:3003/tarefa"
		+ props.match.params.id
	)
	.then((res) => {
		const { nome, descricao, concluido } = res.data;
		setFormValues({ nome, descricao, concluido });
	})
	.catch((err) => console.log(err));
}, []);

// Retornando formulário de tarefas
return (
	<TarefasForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Editar Tarefas
	</TarefasForm>
);
};

// Exportando componente EditarTarefa
export default EditarTarefa;
