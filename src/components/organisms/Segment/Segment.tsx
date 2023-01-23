import React from "react";
import { ColorPalette } from "../../../style/ColorPalette";
import { Dropdown } from "../../atoms/Dropdown";
import TextFieldAtom from "../../atoms/TextFieldAtom";
import styled from 'styled-components';
import { useEffect } from 'react';
import SegmentService from '../../../services/client/segment/segment.service';

export const ContainerSegment = styled.div
`
justify-content: flex-end;
display: flex;
flex-direction: column;
align-items: flex-end;
`

export const Segment = () => {
    const [segmentName, setSegmentName] = React.useState("");
    const getSegmentsByName = async (name: string) => {
        let segment = await SegmentService.getSegmentsByName(name);
        console.log(segment);
        setSegmentName(segment.name);
    };

    useEffect (() => {
        getSegmentsByName("abierto");
    }, [segmentName]);
    return(
    <ContainerSegment>
        <h1>Segmento</h1>
        <div>
            <span>Nombre: </span>
            <TextFieldAtom
                id="segmentName"
                label=""
                type="text"
                placeholder="tipo de segmento"
                variant="standard"
                color="primary"
            />
        </div>
        <div>
            <span>Estado: </span>
                <Dropdown
                    label="Seleccionar el estado"
                    items={[
                        { name: "Tasa de interes 1", value: "1" },
                        { name: "Tasa de interes 2", value: "2" },
                    ]}
                    width={200}
                    height={40}
                    // onChange={(event: { target: { value: any } }) =>
                    //     console.log(event.target.value)
                    // }
                    backgroundColor={ColorPalette.SECONDARY}
                />
        </div>
    </ContainerSegment>);
};
