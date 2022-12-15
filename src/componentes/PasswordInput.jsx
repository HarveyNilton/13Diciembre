import React,{ useState } from "react";

const PasswordInput = () => {
    const [isVisible, setVisible] = useState(true)
   
    const chengVisiber =()=>{
        setVisible(!isVisible)
    }


    return (
        <div>
            <input type={isVisible ? 'text': 'password'} />
            <button style={{background: isVisible ? 'red' : 'green'}} onClick={chengVisiber}>{isVisible ? 'Ocultar' : 'Mostrar'}</button>
        </div>
    );
};

export default PasswordInput;