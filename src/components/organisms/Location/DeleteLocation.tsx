import * as React from 'react';
import { ButtonStyle } from '../../../style/ButtonStyle';
import { ColorPalette } from '../../../style/ColorPalette';
import { Dropdown } from '../../atoms/Dropdown';
import { SizeButton } from '../../atoms/SizeButton';

export const DeleteLocation = () => {
    return (
        <div>
        <h1>Eliminar Ubicaciones</h1>
        <Dropdown
            label='Jerarquía'
            items={[{ name: 'Provincia', value: 'Provincia' }, { name: 'Cantón', value: 'Cantón' }, { name: 'Parroquia', value: 'Parroquia' }]}
            width={200}
            height={70}
            backgroundColor={ColorPalette.TERNARY}
            selectedTextColor={ColorPalette.ACCENT}
            inputLabelColor={ColorPalette.ACCENT}
            inputFocusedLabelColor={ColorPalette.ACCENT}
        />
        <br />
        <Dropdown
            label='Nombre'
            items={[{ name: 'Pichincha', value: 'Pichincha' }]}
            width={200}
            height={70}
            backgroundColor={ColorPalette.TERNARY}
            selectedTextColor={ColorPalette.ACCENT}
            inputLabelColor={ColorPalette.ACCENT}
            inputFocusedLabelColor={ColorPalette.ACCENT}
        />
        <br></br>
        <SizeButton palette={{ backgroundColor: ColorPalette.FOURTH }}
            icon=''
            onClick={() => console.log('Eliminar')}
            text='Eliminar'
            style={ButtonStyle.BIG}
        />
    </div>
  );
};