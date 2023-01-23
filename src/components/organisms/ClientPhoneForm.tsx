import React, { useState } from "react";
import { ButtonStyle } from "../../style/ButtonStyle";
import { SizeButton } from "../atoms/SizeButton";
import TitleAndTextInput from "../molecules/TitleAndTextInput";

interface ClientPhoneFormProps {
  onSubmit: (data: { [key: string]: string }) => void;
}

const ClientPhoneForm: React.FC<ClientPhoneFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    field1: "",
    field2: "",
    field3: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TitleAndTextInput
        title="Identificacion:"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <TitleAndTextInput
        title="Apellido y Nombre:"
        name="field1"
        value={formData.field1}
        onChange={handleChange}
      />
      <TitleAndTextInput
        title="Tipo Telefono:"
        name="field2"
        value={formData.field2}
        onChange={handleChange}
      />
      <TitleAndTextInput
        title="N Telefono:"
        name="field3"
        value={formData.field3}
        onChange={handleChange}
      />
      <SizeButton
        text="Guardar"
        style={ButtonStyle.BIG}
        palette={{ backgroundColor: "#1D3557" }}
      />
    </form>
  );
};

export default ClientPhoneForm;
