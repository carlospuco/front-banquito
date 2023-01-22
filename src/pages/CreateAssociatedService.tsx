import { TextField, Typography } from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import TextFieldAtom from "../components/atoms/TextFieldAtom";
import TableMolecule from "../components/molecules/TableMolecule";
import ButtonIcon from "../components/atoms/ButtonIcon";
import { Box, SxProps, Theme } from "@mui/system";
import { Dropdown } from "../components/atoms/Dropdown";
// search icon
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
// icon keyboar backspace
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ColorPalette } from "../style/ColorPalette";
// Add icon
import AddIcon from "@mui/icons-material/Add";
import { SizeButton } from "../components/atoms/SizeButton";
import { ButtonStyle } from "../style/ButtonStyle";
//data
import IdentificationTypes from "../components/organisms/IdentificationType.json";
import { Checkbox } from "../components/atoms/Checkbox";
// Styles
export const Container = styled.div`
  display: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding-top: 50px;
  padding-bottom: 20px;
`;

export const Content = styled.div`
  margin-left: 40%;
`;

// Container for the search
export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: start;
  width: 100%;
  height: 20%;
  padding: 0px;
  max-width: 400px;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

// content button add position Right
export const ContentButtonAddRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`;

// returnButton
export const ReturnButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  position: absolute;
  margin: 1rem;
  left: 0;
  top: 0;
`;

export const Span = styled.span`
  width: 200px;
`;

const formStyle = (): SxProps<Theme> => {
  return {
    mt: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 450,
    height: 330,
  };
};


interface FormAssociatedService {
  name: String;
  allowPayment: String;
  paymentMethod: String;
  chargeVat: String;
  fee: Number;
  params: [];
}

interface AssociatedServiceProps {
  onSubmit: (data: any) => void;
}

const CreateAssociatedService = (props: AssociatedServiceProps) => {

  const [service, setservice] = useState<FormAssociatedService>({
    name: "pepe1",
    allowPayment: "N",
    paymentMethod: "credit card",
    chargeVat: "Y",
    fee: 15.2,
    params: [],
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(service);
  };

  return (
    <Container>
      <Content>
        <ReturnButton>
          <ButtonIcon
            color={ColorPalette.PRIMARY}
            icon={<KeyboardBackspaceIcon />}
            onClick={() => console.log("Buscar")}
            top={true}
          />
        </ReturnButton>
        <div>
          <h1>Creacion de un servicio asociado</h1>
        </div>
        
        <div>
          <Box component="form" onSubmit={submitHandler} sx={formStyle()}>
            <FormContainer>
              <Span>Nombre: </Span>
              <TextFieldAtom
                id="idName"
                label="Nombre del servicio"
                color="primary"
                type="text"
                placeholder="e.g Chequera"
                variant="standard"
              />
            </FormContainer>
            <FormContainer>
              <Span>Permite Pagos: </Span>
              <Checkbox label="Seleccionar" />
            </FormContainer>

            <FormContainer>
              <Span>Método de pago:</Span>
              <Dropdown
                width={"50%"}
                height={"auto"}
                label="Metodo de pago"
                items={[
                    {
                        name: "Tarjeta de debito",
                        value: "Tarjeta de debito"
                    },
                    {
                        name: "Efectivo",
                        value: "Efectivo"
                    }
                ]}
                backgroundColor={ColorPalette.SECONDARY}
                onChange={(value: string) =>
                  setservice({ ...service, name: value })
                }
              />
            </FormContainer>
            <FormContainer>
              <Span>Costo: </Span>
              <TextFieldAtom
                id="idPaymentMehod"
                label="Metodo de pago"
                color="primary"
                type="number"
                placeholder="Metodo de pago"
                variant="standard"
              />
            </FormContainer>
            <ContentButtonAddRight>
              <SizeButton
                palette={{ backgroundColor: ColorPalette.PRIMARY }}
                icon={<AddIcon />}
                onClick={() => console.log("Buscar")}
                text="Agregar"
                style={ButtonStyle.BIG}
                submit
              />
            </ContentButtonAddRight>
          </Box>
        </div>
      </Content>
    </Container>
  );
};

export default CreateAssociatedService;
