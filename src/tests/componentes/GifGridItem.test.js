
import { shallow } from "enzyme"
import React from "react";
import {GifGridItem} from '../../componentes/GifGridItem';
describe('Prueba del GifGriditem.test.js', () => {
    test('DEBE DE MOSTRAR EL COMPONENTE CORRECTAMENTE', () => {
        const wrapper=shallow(<GifGridItem/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})
