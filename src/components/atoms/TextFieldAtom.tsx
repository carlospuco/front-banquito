import React from 'react';
import { TextField } from '@mui/material';

interface Props{
    id: string;
    label: string;
    color: any;
    type: string;
    placeholder: string;
    variant: any;
    action: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldAtom = (props: Props) =>{
    return (
        <TextField
            className='TextFieldAtom'
            id={props.id}
            label={props.label}
            type={props.type}
            placeholder={props.placeholder}
            variant={props.variant}
            color={props.color}
            onChange={props.action}
            >
        </TextField>

    );
}


export default TextFieldAtom;