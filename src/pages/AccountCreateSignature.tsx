import React from "react";
import TextFieldAtom from "../components/atoms/TextFieldAtom";
import TextAreaAtom from "../components/atoms/TextAreaAtom";
import ButtonIcon from "../components/atoms/ButtonIcon";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button } from "@mui/material";

const CreateSignature = () => {
  return (
    <div>
      <h1>Agregar firma autorizada</h1>
      <span style={
        {maxWidth: '200px'}
      }>Número de cuenta</span>
      <TextFieldAtom
        id="outlined-basic"
        label="Outlined"
        variant="standard"
        color="primary"
        type="text"
        placeholder="Ingreso número de cuenta"
      />
      <br>
      </br>
      <span style={
        {maxWidth: '200px'}
      }>Identificación</span>
      <TextFieldAtom
        id="outlined-basic"
        label="Outlined"
        variant="standard"
        color="primary"
        type="text"
        placeholder="Ingreso número de identificación"
      />
      <ButtonIcon color="primary" icon={<SearchRoundedIcon />} />
      <br>
      </br>
      <span style={
        {maxWidth: '200px'}
      }>Tipo Identificación</span>
      <TextFieldAtom
        id="outlined-basic"
        label="Outlined"
        variant="standard"
        color="primary"
        type="text"
        placeholder="Tipo de identificación"
      />
      <br>
      </br>
      <span style={
        {maxWidth: '200px'}
      }>Rol</span>
      <TextFieldAtom
        id="outlined-basic"
        label="Outlined"
        variant="standard"
        color="primary"
        type="text"
        placeholder="Ingrese el rol"
      />
      <ButtonIcon color="primary" icon="+" />
    </div>
  );
};

export default CreateSignature;