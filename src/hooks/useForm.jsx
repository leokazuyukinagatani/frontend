import { useState } from "react";

const validacao = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: "Email inválido",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (validacao[type] && !validacao[type].regex.test(value)) {
      setError(validacao[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;