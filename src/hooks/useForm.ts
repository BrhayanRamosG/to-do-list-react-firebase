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

  const resetForm = () => setForm(initState);

  const validateForm = (): boolean => {
    let key: keyof typeof form;
    for (key in form) if (String(form[key]).length === 0) return false;
    return true;
  };

  const validateField = (): boolean => {
    let key: keyof typeof form;
    for (key in form) if (String(form[key]).length > 0) return true;
    return false;
  };

  return {
    form,
    handleChange,
    validateField,
    validateForm,
    resetForm,
    ...form,
  };
};
