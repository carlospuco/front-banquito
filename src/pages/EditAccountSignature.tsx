import React from "react";
import { Box, Typography } from "@mui/material";
import TableMolecule from "../components/molecules/TableMolecule";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ButtonIcon from "../components/atoms/ButtonIcon";
import { ColorPalette } from "../style/ColorPalette";

const EditAccountSignature = () => {
    const headersMock = [
        <Typography>Identificación</Typography>,
        <Typography>Tipo Identificación</Typography>,
        <Typography>Nombre</Typography>,
        <Typography>Rol</Typography>,
        <Typography>Estatus</Typography>,
        <Typography></Typography>,
      ]
      const rowsMock = [
        [
          <Typography>Example</Typography>,
          <Typography>Example</Typography>,
          <Typography>Example</Typography>,
          <Typography>Example</Typography>,
          <Typography>Example</Typography>,
          <ButtonIcon color={ColorPalette.PRIMARY} icon={<SearchRoundedIcon/>} />
        ],
        [
            <Typography>Example</Typography>,
            <Typography>Example</Typography>,
            <Typography>Example</Typography>,
            <Typography>Example</Typography>,
            <Typography>Example</Typography>,
            <ButtonIcon color={ColorPalette.PRIMARY} icon={<SearchRoundedIcon/>} />
        ]
      ]
      
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          verticalAlign: "middle",
          alignText: "center",
        }}
      >
        <div
          style={{
            margin: "2rem",
          }}
        >
          <Typography variant="h4">Configuración Firma Autorizada</Typography>
        </div>
      </Box>

      <TableMolecule headers={[]} rows={[]}></TableMolecule>
    </div>
  );
};