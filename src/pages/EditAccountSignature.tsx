import React, { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import TableMolecule from "../components/molecules/TableMolecule";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ButtonIcon from "../components/atoms/ButtonIcon";
import { ColorPalette } from "../style/ColorPalette";
import TextFieldAtom from "../components/atoms/TextFieldAtom";
import { SizeButton } from "../components/atoms/SizeButton";
import { ButtonStyle } from "../style/ButtonStyle";

const EditAccountSignature = () => {
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

      <TableMolecule
        headers={[
          <Typography>Identificación</Typography>,
          <Typography>Tipo Identificación</Typography>,
          <Typography>Nombre</Typography>,
          <Typography>Rol</Typography>,
          <Typography>Estatus</Typography>,
          <Typography></Typography>,
        ]}
        rows={[
          [
            <Typography>Example</Typography>,
            <Typography>Example</Typography>,
            <Typography>Example</Typography>,
            <Typography>Example</Typography>,
            <Typography>Example</Typography>,
            <SizeButton
              text={"Agregar"}
              style={ButtonStyle.MEDIUM}
              palette={{
                backgroundColor: ColorPalette.PRIMARY,
              }}
            ></SizeButton>,
          ],
        ]}
      ></TableMolecule>
    </div>
  );
};
export default EditAccountSignature;
