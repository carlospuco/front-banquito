import { Typography, TextField } from '@mui/material'
import { Box, SxProps, Theme } from '@mui/system'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ButtonStyle } from '../../style/ButtonStyle'
import { ColorPalette } from '../../style/ColorPalette'
import { Dropdown } from '../atoms/Dropdown'
import { SizeButton } from '../atoms/SizeButton'
import TextFieldAtom from '../atoms/TextFieldAtom'
import IdentificationTypes from './IdentificationType.json'

const mainBoxStyle = (): SxProps<Theme> => {
    return {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
}

const subtitleBoxStyle = (): SxProps<Theme> => {
    return {
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
}

const fieldBoxStyle = (): SxProps<Theme> => {
    return {
        m: 1,
        p: 2,
    };
}


const elementText = {
    title: 'Cliente',
    subtitle: 'Información Beneficiario',
    amount: "Monto a transferir",
    numAccount: "Número de Cuenta",
    email: "Email (Opcional)",
    buttonText: 'Transferir',
    amountPlaceholder: '$xx.xx ',
    accountPlaceholder: 'xxx xxx xxx xxx',
    emailPlaceholder: 'ejemplo@ejemplo.com'
}

interface AccountFormProps {
    onSubmit: (data: any) => void,
    products: any[],
}

const ConfirmTransferUserForm = (props: AccountFormProps) => {
    return (
        <>
            <Box sx={mainBoxStyle()}>
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    {elementText.title}
                </Typography>
                <Box
                    sx={
                        fieldBoxStyle()
                    }>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                        {elementText.amount}
                    </Typography>
                    <TextFieldAtom
                        id="outlined-basic"
                        label=""
                        color="success"
                        type="text"
                        placeholder={elementText.amountPlaceholder}
                        variant="filled" />
                </Box>
                <Typography
                        sx={
                            subtitleBoxStyle()
                        }>
                        {elementText.subtitle}
                    </Typography>
                <Box
                    sx={
                        fieldBoxStyle()
                    }>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                        {elementText.numAccount}
                    </Typography>
                    <TextFieldAtom
                        id="outlined-basic"
                        label=""
                        color="success"
                        type="text"
                        placeholder={elementText.accountPlaceholder}
                        variant="filled" />
                </Box>
                <Box
                    sx={
                        fieldBoxStyle()
                    }>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                        {elementText.email}
                    </Typography>
                    <TextFieldAtom
                        id="outlined-basic"
                        label=""
                        color="success"
                        type="text"
                        placeholder={elementText.emailPlaceholder}
                        variant="filled" />
                </Box>
                <Box
                    sx={fieldBoxStyle()}>
                    <SizeButton
                        palette={{
                            backgroundColor: ColorPalette.PRIMARY
                        }}
                        size={{
                            height: 'auto',
                            width: '100%'
                        }}
                        style={ButtonStyle.BIG}
                        submit
                        text={elementText.buttonText} />
                </Box>
            </Box>
        </>
    )
}

export default ConfirmTransferUserForm