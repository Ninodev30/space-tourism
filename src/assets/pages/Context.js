import React , {useState, createContext} from 'react';
export const Context = createContext();

export const States = (props) => {

    const [modal , setModal] = useState(false);
    const [background , setBackground] = useState(0);

    return(

        <Context.Provider value={[modal , setModal , background, setBackground]}>
            {props.children}
        </Context.Provider>

    )

}