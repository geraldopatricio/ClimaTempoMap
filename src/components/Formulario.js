import React, { useState } from 'react';

function Formulario({datosConsulta}) {
    
    const [consulte, consultar] = useState({
        cidade : '',
        pais : ''
    })
    const handleChange = e => {
        consultar({
            ...consulte,
            [e.target.name] : e.target.value  
       });
       }
    const consultarClima = e => {
        e.preventDefault();
        datosConsulta(consulte);
    }
    
    return (  
            <div>
            <div className="container">
                <div className="row transparentBG1">
                    <form onSubmit={consultarClima} >
                        <div className="input-field col s12 m8 l4 offset-m2">
                            <input  id="cidade" type="text" name="cidade" onChange={handleChange} />
                            <label htmlFor="cidade">Cidade:</label>
                        </div>
                        <div className="input-field col s12 m8 l4 offset-m2">
                            <select onChange={handleChange} name="pais" >
                                <option value="" defaultValue>Escolha um País</option>
                                <option value="PT">Portugal</option>
                                <option value="BR">Brasil</option>
                                <option value="ES">Espanha</option>
                                <option value="US">Estados Unidos</option>
                            </select>
                            <label htmlFor="pais">País:</label>
                        </div>
                        <div className='form'>
                            <input type="submit" className="waves-effect btn-large white" value="Buscar..."/>
                        </div>
                    </form>
                </div>
            </div>

            </div>
        );
    }

export default Formulario;