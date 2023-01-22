import React from 'react'
import { Container, Content, ReturnButton } from './InteresRate'

// icon keyboar backspace
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ButtonIcon from '../../atoms/ButtonIcon';
// search icon
import SearchIcon from '@mui/icons-material/Search';
import { ColorPalette } from '../../../style/ColorPalette';
import styled from 'styled-components';
import TextFieldAtom from '../../atoms/TextFieldAtom';
import { Dropdown } from '../../atoms/Dropdown';
import { SizeButton } from '../../atoms/SizeButton';
import { ButtonStyle } from '../../../style/ButtonStyle';

// ContainParent
export const ContainParent = styled.div`
display: grid;
grid-template-columns: 0.5fr 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 10px;
grid-row-gap: 2rem;
padding: 1rem;
justify-content: center;
align-items: center;

`;

// ContainChild
export const ContainChild = styled.div`
grid-area: 1 / 1 / 2 / 2;`;

// ContainChild
export const ContainChild2 = styled.div`
grid-area: 1 / 2 / 2 / 3;
padding-bottom: 1rem;
`;

// ContainChild
export const ContainChild3 = styled.div`
grid-area: 2 / 1 / 3 / 2;
`;

// ContainChild
export const ContainChild4 = styled.div`
grid-area: 2 / 2 / 3 / 3;
padding-bottom: 1rem;
`;

// ContainChild
export const ContainChild5 = styled.div`
grid-area: 3 / 1 / 4 / 2;`;

// ContainChild
export const ContainChild6 = styled.div`
grid-area: 3 / 2 / 4 / 3;
padding-bottom: 1rem;`;

// ContainerButtons
export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
align-items: space-between;
padding: 20px;
max-width: 500px;
justify-content: space-evenly;
`;
export const ContentForm = styled.div`
margin-left: 9rem;
`;

export const ContainerForm = styled.div`
display: inline-table;
width: 90%;
padding-top: 20px;
padding-bottom: 20px;
`;



const FormInterestRate = () => {
    return (
        <ContainerForm>
            <ContentForm>
                <ReturnButton>
                    <ButtonIcon color={ColorPalette.PRIMARY} icon={<KeyboardBackspaceIcon />} onClick={() => console.log('Buscar')} top={true} />
                </ReturnButton>
                <h1>Formulario de Tasa de Interes</h1>
                <ContainParent>
                    <ContainChild>
                        <span>Nombre:</span>
                    </ContainChild>
                    <ContainChild2>
                        <TextFieldAtom id="id" label="Nombre tasa de interes" color="primary" type="text" placeholder="id" variant="standard" action={(event) => console.log(event.target.value)} />
                    </ContainChild2>
                    <ContainChild3>
                        <span>Tipo</span>
                    </ContainChild3>
                    <ContainChild4>
                        <Dropdown label='Seleccionar' items={[{
                            name: 'Tasa de interes',
                            value: 'Tasa de interes'
                        }, {
                            name: 'Tasa de interes',
                            value: 'Tasa de interes'
                        }]} width={200} height={40}
                            onChange={(event: { target: { value: any; }; }) => console.log(event.target.value)}
                            backgroundColor={ColorPalette.SECONDARY}
                        />
                    </ContainChild4>
                    <ContainChild5>
                        <span>Base de Cálculo</span>
                    </ContainChild5>
                    <ContainChild6>
                        <TextFieldAtom id="id" label="Base de Cálculo" color="primary" type="text" placeholder="id" variant="standard" action={(event) => console.log(event.target.value)} />
                    </ContainChild6>
                </ContainParent>
                <ContainerButtons>
                    <SizeButton palette={{ backgroundColor: ColorPalette.TERNARY }}
                        icon=''
                        onClick={() => console.log('Crear')}
                        text='Crear'
                        style={ButtonStyle.BIG}
                    />
                    <SizeButton palette={{ backgroundColor: ColorPalette.PRIMARY }}
                        icon=''
                        onClick={() => console.log('Cancelar')}
                        text='Cancelar'
                        style={ButtonStyle.BIG}
                    />
                </ContainerButtons>

            </ContentForm>
        </ContainerForm>
    )
}

export default FormInterestRate