
import React, { useState } from 'react';



const Focos = () => {

    const [prendido, setPrendido] = useState(true)


    const encender=()=>{
        setPrendido(!prendido)
    }
    return (
        <div>
        
            <figure className='container-focos'>
                
                <figure className={prendido ? 'foco':'color'} ></figure>
                <figure className={prendido ? 'foco':'color'} ></figure>
                <figure className={prendido ? 'foco':'color'} ></figure>
            </figure>
            <button onClick={encender} style={{background: prendido ? 'red' : 'green'}}>{prendido ? 'Of':'On'}</button>
        </div>
    );
};

export default Focos;