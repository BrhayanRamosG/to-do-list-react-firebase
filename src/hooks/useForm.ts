import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [form, setForm] = useState(initState);

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const resetForm = () => {
    setForm(initState);
  };

  const validateForm = () => {
    for (const key in form) if (String(form[key]) === "") return false;
    return true;
  };

  return {
    form,
    handleChange,
    validateForm,
    resetForm,
    ...form,
  };
};
