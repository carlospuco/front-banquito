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

interface SelectAccountFormProps {
    onSelect: (data: number) => void;
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
                            onClick={() => props.onSelect(0)}
                            style={ButtonStyle.BIG}
                            text='Inversion'
                            column
                            icon={<AttachMoneyIcon />}
                            size={{
                                width: "250px",
                                height: "250px"
                            }}
                        />
                    </div>
                    <div style={{ margin: 5 }}>
                        <SizeButton
                            palette={{ backgroundColor: ColorPalette.PRIMARY }}
                            onClick={() => props.onSelect(1)}
                            style={ButtonStyle.BIG}
                            text='Inversion'
                            column
                            icon={<AttachMoneyIcon />}
                            size={{
                                width: "250px",
                                height: "250px"
                            }}
                        />
                    </div>
                    <div style={{ margin: 5 }}>
                        <SizeButton
                            palette={{ backgroundColor: ColorPalette.PRIMARY }}
                            onClick={() => props.onSelect(2)}
                            style={ButtonStyle.BIG}
                            text='Inversion'
                            column
                            icon={<AttachMoneyIcon />}
                            size={{
                                width: "250px",
                                height: "250px"
                            }}
                        />
                    </div>
                </div>
            </Box>
        </>
    )
}

export default SelectAccountTypeForm