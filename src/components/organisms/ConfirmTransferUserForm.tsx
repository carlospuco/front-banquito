import { Typography, TextField } from '@mui/material'
import { Box, SxProps, Theme } from '@mui/system'
import { ButtonStyle } from '../../style/ButtonStyle'
import { ColorPalette } from '../../style/ColorPalette'
import ConfirmTextFieldAtom from '../atoms/ConfirmTextFieldAtom'
import { SizeButton } from '../atoms/SizeButton'
import TextFieldAtom from '../atoms/TextFieldAtom'

const mainBoxStyle = (): SxProps<Theme> => {
    return {
        marginTop: 8,
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
    amount: "Monto a transferir",
    originAccount: "Cuenta origen",
    recipeAccount: "Cuenta Destino",
    buttonText: 'Confirmar Transferencia'
}

interface ConfirmFormProps {
    onSubmit: (data: any) => void,
    amount: "",
    originAccount: "",
    recipeAccount: ""
}

const ConfirmTransferUserForm = (props: ConfirmFormProps) => {
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
                    <ConfirmTextFieldAtom
                        id="outlined-basic"
                        label=""
                        color="success"
                        type="text"
                        value={props.amount}
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
                        {elementText.originAccount}
                    </Typography>
                    <ConfirmTextFieldAtom
                        id="outlined-basic"
                        label=""
                        color="success"
                        type="text"
                        value={props.originAccount}
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
                        {elementText.recipeAccount}
                    </Typography>
                    <ConfirmTextFieldAtom
                        id="outlined-basic"
                        label=""
                        color="success"
                        type="text"
                        value={props.recipeAccount}
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