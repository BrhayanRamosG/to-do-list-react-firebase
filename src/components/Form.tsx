import React, { useReducer } from "react";
import { useForm } from "../hooks";
import { FormAdd } from "../interfaces/form";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonSecondary } from "./ButtonSecondary";
import { useEffect } from "react";

let counter = 0;

const Form = () => {
  const initialState = {
    id: (counter += 1),
    task: "",
    priority: "",
  };

  const { priority, task, form, handleChange, validateForm, resetForm } =
    useForm<FormAdd>(initialState);

  useEffect(() => {}, [form]);

  const sendForm = () => {};

  return (
    <>
      <form onSubmit={sendForm}>
        <input
          className=""
          name="task"
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Ingresa tarea"
        />

        {/* <select
          className="capitalize"
          value={priority}
          name="priority"
          onChange={handleChange}
        >
          <option defaultValue="">selecciona una opci&oacute;n</option>
          {SelectOption.map((element: Priority) => (
            <option key={element.name} value={element.value}>
              {element.name}
            </option>
          ))}
        </select> */}

        <ButtonPrimary message="Enviar" />
        <ButtonSecondary message="Reset" onClick={resetForm} />
      </form>
    </>
  );
};

export default Form;
