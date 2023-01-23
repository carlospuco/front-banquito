import { useState, useEffect } from "react";
import { SizeButton } from "../../atoms/SizeButton";
import TextFieldAtom from "../../atoms/TextFieldAtom";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { ButtonStyle } from "../../../style/ButtonStyle";
import { ColorPalette } from "../../../style/ColorPalette";
import { Button, Typography } from "@mui/material";
import { Dropdown } from "../../atoms/Dropdown";
import TableMolecule from "../../molecules/TableMolecule";
import ButtonIcon from "../../atoms/ButtonIcon";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px;
  max-width: 500px;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 60px;
`;

interface Props {
  openDialog: boolean;
}

export const AssociatedServiceParam = ({ openDialog }: Props) => {
  const [open, setOpen] = useState(openDialog);

  const headersMock = [
    <Typography>Parametro ID</Typography>,
    <Typography>Nombre</Typography>,
    <Typography>Tipo de Dato</Typography>,
  ];

  const rowsMock = [
    [
      <Typography>Parametro ID</Typography>,
      <Typography>Nombre</Typography>,
      <Dropdown
        label="Tipo de Dato"
        items={[
          { name: "TEX", value: "string" },
          { name: "DAT", value: "date" },
          { name: "NUM", value: "number" },
          { name: "DEC", value: "float" },
        ]}
        width={200}
        height={50}
        selectedTextColor={ColorPalette.BLACK}
      />,
    ],
  ];

  useEffect(() => {
    if (openDialog) {
      setOpen(true);
    }
  }, [openDialog]);

 
  return (
    <Container>
      <SearchContainer>
        <span>Nombre: </span>
        <TextFieldAtom
          id="id"
          label="Parametro Asociado"
          color="primary"
          type="text"
          placeholder="id"
          variant="standard"
        />
        <SizeButton
          palette={{ backgroundColor: ColorPalette.PRIMARY }}
          icon={<SearchIcon />}
          onClick={() => console.log("Buscar")}
          text="Buscar"
          style={ButtonStyle.MEDIUM}
        />
      </SearchContainer>
      <Container>
        <TableMolecule headers={headersMock} rows={rowsMock} />
        <ButtonIcon
          color={ColorPalette.PRIMARY}
          icon={<ControlPointIcon />}
          onClick={() => console.log("Crear")}
          top={true}
        />
        <SizeButton
          palette={{ backgroundColor: ColorPalette.PRIMARY }}
          onClick={() => console.log("Guardar")}
          text="Guardar"
          style={ButtonStyle.MEDIUM}
        />
      </Container>
    </Container>
  );
};
