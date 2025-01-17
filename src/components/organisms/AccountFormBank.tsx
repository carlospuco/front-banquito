import { Typography, TextField } from '@mui/material'
import { Box, SxProps, Theme } from '@mui/system'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ButtonStyle } from '../../style/ButtonStyle'
import { ColorPalette } from '../../style/ColorPalette'
import { Dropdown } from '../atoms/Dropdown'
import { SizeButton } from '../atoms/SizeButton'
import IdentificationTypes from './IdentificationType.json'

const mainBoxStyle = (): SxProps<Theme> => {
    return {
        marginTop: 4,
        marginBottom: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5
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

interface FormAccountInterface {
    identification: string,
    identificationType: string,
    codeProduct: string,
    codeBranch: string,
    entityBankCode: string,
    internationalBankCode: string,
}

interface AccountFormProps {
    onSubmit: (data: any) => void,
    products: any[],
}

const AccountFormBank = (props: AccountFormProps) => {

    const [account, setaccount] = useState<FormAccountInterface>({
        identification: "",
        identificationType: "",
        codeProduct: "",
        codeBranch: "12345",
        entityBankCode: "12345",
        internationalBankCode: "12345",
    });

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(account);
    }

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setaccount({ ...account, [name]: value });
    }

    const getDropdownData = (): { name: string, value: any }[] => {
        return props.products.map(product => {
            return {
                name: product.name,
                value: product.codeProduct
            }
        })
    }

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
                    {textHelpers.title}
                </Typography>
                <Box
                    component="form"
                    onSubmit={submitHandler}
                    sx={formStyle()}>
                    <div style={{
                        width: '100%',
                        height: 'auto',
                        marginTop: '0.5rem',
                        marginBottom: '0.5rem'
                    }}>
                        <Dropdown
                            width={"100%"}
                            height={"auto"}
                            label="Tipo de Cuenta"
                            items={getDropdownData()}
                            backgroundColor={ColorPalette.SECONDARY}
                            onChange={(value: string) =>
                                setaccount({ ...account, codeProduct: value })}
                        />
                    </div>
                    <div style={{
                        width: '100%',
                        height: 'auto',
                        marginTop: '0.5rem',
                        marginBottom: '0.5rem'
                    }}>
                        <Dropdown
                            width={"100%"}
                            height={"auto"}
                            label={textHelpers.typeIdentification}
                            items={IdentificationTypes}
                            backgroundColor={ColorPalette.SECONDARY}
                            onChange={(value: string) =>
                                setaccount({ ...account, identificationType: value })}
                        />
                    </div>
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
            </Box>
        </>
    )
}

export default AccountFormBank