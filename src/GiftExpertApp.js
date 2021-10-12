import React,{useState} from "react";
import { AddCategory } from "./componentes/AddCategory";
import { GifGrid } from "./componentes/GifGrid";
//import PropTypes from 'prop-types';


const GiftExpertApp= ()=>{
    //const categorias=['One Punch','Samurari X','Dragon Ball'];
    const [categorias, setCategorias] = useState(['Demon Slayer']);
    
    return (
        <>
            <h2>Gift Expert App</h2>
            <hr/>
            <AddCategory setCategories={setCategorias}/>
            <ol>
            {
                categorias.map(elemento=><GifGrid categoria={elemento} key={elemento}/>)
            }
            </ol>
        </>    
    );
}

/*GiftExpertApp.propTypes={
    value: PropTypes.number.isRequired
}
GiftExpertApp.defaultProps={
    value: 10
}*/
export default GiftExpertApp;

