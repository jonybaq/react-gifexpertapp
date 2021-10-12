import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [texto,SetTexto]=useState('');
    const handleChange=(e)=>{ SetTexto(e.target.value);  }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (texto.trim().length>2) {
            setCategories(cat=>[texto,...cat]);
        }
        
        SetTexto("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Añadir Categoria</h2>
            <h4>{texto}</h4>
            <input type="text" value={texto} placeholder='Nueva Categoria' onChange={handleChange} />
        </form>
    )
}
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
