import React, { useState } from 'react';
import ButtonIcon from '../../atoms/ButtonIcon';
import { ColorPalette } from '../../../style/ColorPalette';
import { Container, Content, ContentButtonAddRight, ReturnButton, SearchContainer } from './InteresRate';
// icon keyboar backspace
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import TextFieldAtom from '../../atoms/TextFieldAtom';
import { SizeButton } from '../../atoms/SizeButton';
// search icon
import SearchIcon from '@mui/icons-material/Search';
import { ButtonStyle } from '../../../style/ButtonStyle';
import TableMolecule from '../../molecules/TableMolecule';
// Add icon
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
// icon x
import CloseIcon from '@mui/icons-material/Close';
// icon check
import CheckIcon from '@mui/icons-material/Check';
import IInterestRate from '../../../services/product/models/interestRate.model';
import InterestRateService from '../../../services/product/interestrate/interestRate.service';
import { useEffect } from 'react';


const InterestRateLog = () => {

    const [rows, setRows] = useState<any>([
        [
            <Typography>
            </Typography>,
            <Typography>
            </Typography>,
            <Typography>
            </Typography>,
            <Typography>
            </Typography>,
            <Typography>
            </Typography>
        ]
    ]);

    const [name, setName] = useState<string>('');

    const getInteretRateList = async () => {
        let interestList = await InterestRateService.getInterestRates();
        console.log(interestList);
        let rows = row(interestList);
        setRows(rows);
        return rows;
    }
    const getInteretRateListByName = async () => {
        let interestList = await InterestRateService.getInterestRatesByName(name);
        console.log(interestList);
        let rows = row(interestList);
        setRows(rows);
        return rows;
    }

    useEffect(() => {
        if (name === '') {
            getInteretRateList();
        }
        else {
            getInteretRateListByName();
        }

    }, [name])



    const headers = [
        <Typography>
            Nombre
        </Typography>,
        <Typography>
            Tipo
        </Typography>,
        <Typography>
            Calculo base
        </Typography>,
        <Typography>
            Valor de la tasa
        </Typography>,
        <Typography>
            Acciones
        </Typography>
    ];

    const row =(interestList:any) => {
        let rows = interestList.map((interestRate: IInterestRate) => {
            return [
                <Typography>
                    {interestRate.name}
                </Typography>,
                <Typography>
                    {interestRate.type}
                </Typography>,
                <Typography>
                    {interestRate.calcBase}
                </Typography>,
                <Typography>
                    {interestRate.value}
                </Typography>,
                <Typography>
                    <ButtonIcon color={ColorPalette.PRIMARY} icon={<CheckIcon />} onClick={() => console.log('Buscar')} top={true} />
                    <ButtonIcon color={ColorPalette.PRIMARY} icon={<CloseIcon />} onClick={() => console.log('Buscar')} top={true} />
                </Typography>
            ]
        })
        return rows;
    }





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
                        <TextFieldAtom id="id" label="Nombre tasa de interes" color="primary" type="text" placeholder="id" variant="standard" action={(event) => setName(event.target.value)} />
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
