import { Card, CardContent, Typography, TextField, Avatar } from '@mui/material'
import { Container, Box, SxProps, Theme } from '@mui/system'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ButtonStyle } from '../../style/ButtonStyle'
import { ColorPalette } from '../../style/ColorPalette'
import { Dropdown } from '../atoms/Dropdown'
import { SizeButton } from '../atoms/SizeButton'


const cardStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
}

const mainBoxStyle = (): SxProps<Theme> => {
    return {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
}

const formStyle = (): SxProps<Theme> => {
    return {
        mt: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 450,
        height: 330
    }
}

const textHelpers = {
    title: 'Creemos tu cuenta',
    typeIdentification: 'Tipo de Identificación',
    identification: 'Identificacion',
    buttonText: 'Crear cuenta',
    identificationPlaceholder: 'Identifificación'
}

const dropdownItems = [
    "Item 1",
    "Item 2",
    "Item 3",
]

interface FormAccountInterface {
    identification: string,
    identificationType: string,
    accountType: string
}

const AccountFormBank = () => {

    const [account, setaccount] = useState<FormAccountInterface>({
        identification: "",
        identificationType: "",
        accountType: ""
    });

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(account);
    }

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setaccount({ ...account, [name]: value });
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box sx={mainBoxStyle()}>
                    <Card>
                        <CardContent sx={{ position: 'relative' }}>
                            <Typography
                                component="h1"
                                variant="h4"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                {textHelpers.title}
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={submitHandler}
                                sx={formStyle()}>
                                <Dropdown
                                    width={200}
                                    height={100}
                                    label={textHelpers.typeIdentification}
                                    items={dropdownItems}
                                    backgroundColor={ColorPalette.SECONDARY}
                                    onChange={(value: string) =>
                                        setaccount({ ...account, accountType: value })}
                                />
                                <Dropdown
                                    width={200}
                                    height={100}
                                    label={textHelpers.typeIdentification}
                                    items={dropdownItems}
                                    backgroundColor={ColorPalette.SECONDARY}
                                    onChange={(value: string) =>
                                        setaccount({ ...account, identificationType: value })}
                                />
                                <TextField
                                    id="identification"
                                    name="identification"
                                    margin="normal"
                                    fullWidth
                                    type="text"
                                    onChange={handleFormChange}
                                    label={textHelpers.identificationPlaceholder}
                                    required
                                />
                                {/* <TextFieldAtom
                                    id='EX'
                                    color={'#0000'}
                                    label='Ejemplo'
                                    placeholder='Ejemplo'
                                    type='text'
                                    variant={'outlined'} /> */}
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
                                    text={textHelpers.buttonText} />
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </>
    )
}

export default AccountFormBank