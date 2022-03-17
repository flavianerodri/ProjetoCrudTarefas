// CriarTarefa é um Componente para adicionar uma nova tarefa

// Importando modulos
import React, { useState, useEffect } from "react";
import axios from 'axios';
import TarefasForm from "./TarefasForm";

// Componente CriarTarefa

const CriarTarefa = () => {
const [formValues, setFormValues] =
	useState({ nome: '', descricao: '', concluido: '' })

// onSubmit

const onSubmit = tarefa => {
	console.log(tarefa)
	axios.post(
'http://localhost:3003/tarefa/criar',
	tarefa)
	.then(res => {
		if (res.status === 200)
		alert('Tarefa criada com sucesso')
		else
		Promise.reject()
	})
	.catch(err => alert('Algo Está errado'))
}
	
// Retoranndo formulário de tarefas
return(
	<TarefasForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Criar Tarefa
	</TarefasForm>
)
}

// Export CreateStudent Component
export default CriarTarefa
