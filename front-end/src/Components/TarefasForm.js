import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
  
const TarefasForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Obrigatório"),
    descricao: Yup.string().required("Obrigatório"),
    concluido: Yup.boolean(),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field name="nome" type="text" 
                className="form-control" />
            <ErrorMessage
              name="nome"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="descricao" type="text" 
                className="form-control" />
            <ErrorMessage
              name="descricao"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <Field as="select" name="concluido" className="form-control">
             <option value={false}>Em andamento</option>
             <option value={true}>Concluido</option>
           </Field>
            <ErrorMessage
              name="concluido"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default TarefasForm;