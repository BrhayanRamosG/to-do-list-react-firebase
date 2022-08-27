import { useForm } from "../hooks";
import { FormAdd } from "../interfaces/form";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonSecondary } from "./ButtonSecondary";
import { FormEvent } from "react";

const initialState = {
  title: "",
  task: "",
};

const Form = () => {
  const {
    task,
    title,
    form,
    handleChange,
    validateField,
    validateForm,
    resetForm,
  } = useForm<FormAdd>(initialState);

  const sendForm = (event: FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;
    console.log("Enviando...");
    console.log(form);
    resetForm();
  };

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={(event) => sendForm(event)}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white dark:bg-lime-800 sm:p-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="col-span-3 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-lg font-medium"
                    >
                      Title
                    </label>
                    <input
                      name="title"
                      type="text"
                      value={title}
                      onChange={handleChange}
                      placeholder="Enter a title"
                      className="mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-3 sm:col-span-3">
                    <label
                      htmlFor="email-address"
                      className="block text-lg font-medium "
                    >
                      Task
                    </label>
                    <input
                      name="task"
                      type="text"
                      value={task}
                      onChange={handleChange}
                      placeholder="Enter a task"
                      className="mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 flex bg-gray-50 text-right sm:px-6 space-x-4 justify-end">
                <ButtonPrimary
                  className={`text-sm font-medium ${
                    !validateForm() && "opacity-70"
                  }`}
                  message="Agregar"
                  type="submit"
                  disabled={!validateForm()}
                />

                <ButtonSecondary
                  className={`text-sm font-medium ${
                    !validateField() && "opacity-70"
                  }`}
                  message="Reiniciar"
                  onClick={resetForm}
                  disabled={!validateField()}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
