import React, { useState } from 'react';
import TextFieldAtom from '../components/atoms/TextFieldAtom';
import { Box, FormControl, SxProps, Theme, Typography } from '@mui/material';
import { Dropdown } from '../components/atoms/Dropdown';
import { SizeButton } from '../components/atoms/SizeButton';
import { ButtonStyle } from '../style/ButtonStyle';
import { ColorPalette } from '../style/ColorPalette';

const EfectiveDeposits = () => {
    const mockedItems = ["Cédula", "RUC", "Pasaporte"];

    const [selectedItem, setSelectedItem] = useState<string>(mockedItems[0]);

    const handleDropdownChange = (value: string) => setSelectedItem(value);

    const mainBoxStyle = (): SxProps<Theme> => {
        return {
            m: 1,
            p: 1,
            display: 'flex',
            flexDirection: 'column',
            //justifyContent: 'space-around',
        };
    }

    const formBoxStyle = (): SxProps<Theme> => {
        return {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
        };
    }
    const fieldBoxStyle = (): SxProps<Theme> => {
        return {
            m: 1,
            p: 1,
        };
    }
    const buttonBoxStyle = (): SxProps<Theme> => {
        return {
            m: 1,
            p: 10,
            display: 'flex',
            justifyContent: 'center'
        };
    }

    return (
        <>
            <Box>
                <Typography variant='h4' align='center'>Depósitos Efectivo</Typography>
            </Box>
            <Box
                sx={
                    formBoxStyle()
                }>
                <Box
                    sx={
                        mainBoxStyle()
                    }>
                    <Box
                        sx={
                            fieldBoxStyle()
                        }>
                        <Typography>Número de cuenta</Typography>
                        <TextFieldAtom
                            id="outlined-basic"
                            label=""
                            color="success"
                            type="text"
                            placeholder="Número de cuenta"
                            variant="filled" />
                    </Box>
                    <Box
                        sx={
                            fieldBoxStyle()
                        }>
                        <Typography>Fecha</Typography>
                        <TextFieldAtom
                            id="outlined-basic"
                            label=""
                            color="success"
                            type="date"
                            placeholder="Fecha"
                            variant="filled" />
                    </Box>
                    <Box
                        sx={
                            fieldBoxStyle()
                        }>
                        <Typography>Nombre del Depositante</Typography>
                        <TextFieldAtom
                            id="outlined-basic"
                            label=""
                            color="success"
                            type="text"
                            placeholder="Nombre del Depositante"
                            variant="filled" />
                    </Box>
                    <Box
                        sx={
                            fieldBoxStyle()
                        }>
                        <Typography>Tipo de Identificación</Typography>
                        <Dropdown
                            label=""
                            items={[]}
                            width={300}
                            height={50}
                            backgroundColor="lightblue"
                            onChange={handleDropdownChange}
                        />
                    </Box>
                    <Box
                        sx={
                            fieldBoxStyle()
                        }>
                        <Typography>Identificación</Typography>
                        <TextFieldAtom
                            id="outlined-basic-outlined"
                            label=""
                            color="success"
                            type="text"
                            placeholder="Identificación"
                            variant="filled"
                        />
                    </Box>
                    <Box
                        sx={
                            fieldBoxStyle()
                        }>
                        <Typography>Teléfono</Typography>
                        <TextFieldAtom
                            id="outlined-basic-outlined"
                            label=""
                            color="success"
                            type="text"
                            placeholder="Teléfono"
                            variant="filled"
                        />
                    </Box>
                </Box>
                <Box
                    sx={
                        mainBoxStyle()
                    }>
                    <Box
                        sx={
                            fieldBoxStyle()
                        }>
                        <Typography>Nombre del beneficiario</Typography>
                        <TextFieldAtom
                            id="outlined-basic-filled"
                            label=""
                            color="success"
                            type="text"
                            placeholder="Nombre del beneficiario"
                            variant="filled"
                        />
                    </Box>
                    <Box
                        sx={
                            fieldBoxStyle()
                        }>
                        <Typography>Valor total</Typography>
                        <TextFieldAtom
                            id="outlined-basic-filled"
                            label=""
                            color="success"
                            type="number"
                            placeholder="Valor total"
                            variant="filled"
                        />
                    </Box>
                    <Box
                        sx={
                            fieldBoxStyle()
                        }>
                        <Typography>Billetes</Typography>
                        <TextFieldAtom
                            id="outlined-basic-filled"
                            label=""
                            color="success"
                            type="number"
                            placeholder="Billetes"
                            variant="filled"
                        />
                    </Box>
                    <Box
                        sx={
                            fieldBoxStyle()
                        }>
                        <Typography>Monedas</Typography>
                        <TextFieldAtom
                            id="outlined-basic-filled"
                            label=""
                            color="success"
                            type="number"
                            placeholder="Monedas"
                            variant="filled"
                        />
                    </Box>

                </Box>
            </Box>
            <Box
                sx={
                    buttonBoxStyle()
                }>
                <SizeButton
                    palette={{
                        backgroundColor: ColorPalette.SECONDARY
                    }}
                    size={{
                        height: 'auto',
                        width: '20%'
                    }}
                    style={ButtonStyle.BIG}
                    submit
                    text={'Depositar'} />
            </Box>
        </>
    );
};

export default EfectiveDeposits;