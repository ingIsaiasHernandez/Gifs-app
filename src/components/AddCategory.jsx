import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    // const onInputCahnge = (event) =>{
    //     console.log(event.target.value);
    //      setInputValue(event.target.value)
    // }

    //se puede destructurar el disparador de evento con target
    const onInputCahnge = ({ target }) => {
        
        setInputValue(target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        //esta linea es para evaluar si hay un caracter y borra los espacios.
        if( inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim());
        // setCategories(categories => [...categories, inputValue]);
        setInputValue('');

    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="text"
                placeholder="Search a gifs"
                value={inputValue}
                //se puede obviar el evento cuyo cuyo argumento es que se manda a la función
                // onChange={(event) => onInputCahnge(event)}
                onChange={onInputCahnge}
            />
        </form>

    );
}

