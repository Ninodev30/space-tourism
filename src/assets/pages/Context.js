import React , {useState, createContext} from 'react';
export const Context = createContext();

export const States = (props) => {

    const [modal , setModal] = useState(10);

    return(

        <Context.Provider value={[modal , setModal]}>
            {props.children}
        </Context.Provider>

    )

}