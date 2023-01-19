import React from 'react'
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { SizeButton } from '../atoms/SizeButton';
import { ColorPalette } from '../../style/ColorPalette';
import { ButtonStyle } from '../../style/ButtonStyle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const mainBoxStyle = (): SxProps<Theme> => {
    return {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
}

const iconStyle = (): SxProps<Theme> => {
    return {
        width: '100px',
        height: '100px'
    };
}

const buttonSize = () => {
    return {
        width: '250px',
        height: '250px',
    }
}

interface SelectAccountFormProps {
    onSelect: (data: any, index?: number) => void;
}

const SelectAccountTypeForm = (props: SelectAccountFormProps) => {
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
                    Seleccione el tipo de cuenta
                </Typography>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    alignItems: 'center'
                }}>
                    <div style={{ margin: 5 }}>
                        <SizeButton
                            palette={{ backgroundColor: ColorPalette.PRIMARY }}
                            onClick={() => props.onSelect("1", 0)}
                            style={ButtonStyle.BIG}
                            text='Inversion'
                            column
                            icon={<AttachMoneyIcon sx={iconStyle()} />}
                            size={buttonSize()}
                        />
                    </div>
                    <div style={{ margin: 5 }}>
                        <SizeButton
                            palette={{ backgroundColor: ColorPalette.PRIMARY }}
                            onClick={() => props.onSelect("1", 1)}
                            style={ButtonStyle.BIG}
                            text='Inversion'
                            column
                            icon={<AttachMoneyIcon sx={iconStyle()} />}
                            size={buttonSize()}
                        />
                    </div>
                    <div style={{ margin: 5 }}>
                        <SizeButton
                            palette={{ backgroundColor: ColorPalette.PRIMARY }}
                            onClick={() => props.onSelect("1", 2)}
                            style={ButtonStyle.BIG}
                            text='Inversion'
                            column
                            icon={<AttachMoneyIcon sx={iconStyle()} />}
                            size={buttonSize()}
                        />
                    </div>
                </div>
            </Box>
        </>
    )
}

export default SelectAccountTypeForm