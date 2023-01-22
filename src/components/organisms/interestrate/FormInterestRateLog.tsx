import React from 'react'
import { ColorPalette } from '../../../style/ColorPalette';
import { ContainChild, ContainChild2, ContainChild3, ContainChild4, ContainChild5, ContainChild6, ContainerButtons, ContainerForm, ContainParent, ContentForm } from './FormInterestRate';
import { ReturnButton } from './InteresRate';
// icon keyboar backspace
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ButtonIcon from '../../atoms/ButtonIcon';
import TextFieldAtom from '../../atoms/TextFieldAtom';
import { Dropdown } from '../../atoms/Dropdown';
import { ButtonStyle } from '../../../style/ButtonStyle';
import { SizeButton } from '../../atoms/SizeButton';
const FormInterestRateLog = () => {
    return (
        <ContainerForm>
            <ContentForm>
                <ReturnButton>
                    <ButtonIcon color={ColorPalette.PRIMARY} icon={<KeyboardBackspaceIcon />} onClick={() => console.log('Buscar')} top={true} />
                </ReturnButton>
                <h1>Formulario de Registro Tasa de Interes</h1>
                <ContainParent>
                    <ContainChild>
                        <span>Nombre:</span>
                    </ContainChild>
                    <ContainChild2>
                        <Dropdown label='Seleccionar' items={
                            [
                                { name: 'Tasa de interes 1', value: '1' },
                                { name: 'Tasa de interes 2', value: '2' },
                            ]
                        } width={200} height={40}
                            onChange={(event: { target: { value: any; }; }) => console.log(event.target.value)}
                            backgroundColor={ColorPalette.SECONDARY}
                        />

                    </ContainChild2>
                    <ContainChild3>
                        <span>Tipo</span>
                    </ContainChild3>
                    <ContainChild4>
                        <TextFieldAtom id="id" label="Nombre tasa de interes" color="primary" type="text" placeholder="id" variant="standard" action={(event) => console.log(event.target.value)} />
                    </ContainChild4>
                    <ContainChild5>
                        <SizeButton palette={{ backgroundColor: ColorPalette.TERNARY }}
                            icon=''
                            onClick={() => console.log('Crear')}
                            text='Crear'
                            style={ButtonStyle.BIG}
                        />
                    </ContainChild5>
                    <ContainChild6>
                        <SizeButton palette={{ backgroundColor: ColorPalette.PRIMARY }}
                            icon=''
                            onClick={() => console.log('Cancelar')}
                            text='Cancelar'
                            style={ButtonStyle.BIG}
                        />
                    </ContainChild6>
                </ContainParent>

            </ContentForm>
        </ContainerForm>
    )
}

export default FormInterestRateLog