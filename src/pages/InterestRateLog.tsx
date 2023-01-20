import React from 'react';
import ButtonIcon from '../components/atoms/ButtonIcon';
import { ColorPalette } from '../style/ColorPalette';
import { Container, Content, ContentButtonAddRight, ReturnButton, SearchContainer } from './InteresRate';
// icon keyboar backspace
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import TextFieldAtom from '../components/atoms/TextFieldAtom';
import { SizeButton } from '../components/atoms/SizeButton';
// search icon
import SearchIcon from '@mui/icons-material/Search';
import { ButtonStyle } from '../style/ButtonStyle';
import TableMolecule from '../components/molecules/TableMolecule';
// Add icon
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
// icon x
import CloseIcon from '@mui/icons-material/Close';
// icon check
import CheckIcon from '@mui/icons-material/Check';


function InterestRateLog() {

    const headers = [
        <Typography>
            Id
        </Typography>,
        <Typography>
            Nombre
        </Typography>,
        <Typography>
            Descripción
        </Typography>,
        <Typography>
            Tasa de interes
        </Typography>,
    ];

    const rows = [[
        <Typography>
            1
        </Typography>,
        <Typography>
            Tasa de interes 1
        </Typography>,
        <Typography>
            Descripción de la tasa de interes 1
        </Typography>,
        <Typography>
            <SizeButton palette={{ backgroundColor: ColorPalette.TERNARY }}
                icon={<CheckIcon />}
                onClick={() => console.log('Buscar')}
                text="Habilitar"
                style={ButtonStyle.MEDIUM} />
        </Typography>,
    ],
    [
        <Typography>
            2
        </Typography>,
        <Typography>
            Tasa de interes 2
        </Typography>,
        <Typography>
            Descripción de la tasa de interes 2
        </Typography>,
        <Typography>
            <SizeButton palette={{ backgroundColor: ColorPalette.PRIMARY }}
                icon={<CloseIcon />}
                onClick={() => console.log('Buscar')}
                text="Deshabilitar"
                style={ButtonStyle.MEDIUM} />
        </Typography>,
    ]
    ];



    return (
        <Container>
            <Content>
                <ReturnButton>
                    <ButtonIcon color={ColorPalette.PRIMARY} icon={<KeyboardBackspaceIcon />} onClick={() => console.log('Buscar')} top={true} />
                </ReturnButton>
                <div>
                    <h1>Registros de Tasas de Interés</h1>
                </div>
                {/* Buscar tasa de interes */}
                <div>
                    <SearchContainer>

                        <span>Nombre: </span>
                        <TextFieldAtom id="id" label="Nombre tasa de interes" color="primary" type="text" placeholder="id" variant="standard" action={(event) => console.log(event.target.value)} />
                        <SizeButton palette={{ backgroundColor: ColorPalette.PRIMARY }}
                            icon={<SearchIcon />}
                            onClick={() => console.log('Buscar')}
                            text="Buscar"
                            style={ButtonStyle.MEDIUM} />
                    </SearchContainer>
                    <div>
                        <TableMolecule headers={headers} rows={rows} />
                    </div>

                    <ContentButtonAddRight>
                        <SizeButton palette={{ backgroundColor: ColorPalette.TERNARY }}
                            icon={<AddIcon />}
                            onClick={() => console.log('Buscar')}
                            text="Agregar"
                            style={ButtonStyle.BIG} />
                    </ContentButtonAddRight>
                </div>
            </Content>
        </Container>
    );
}

export default InterestRateLog
