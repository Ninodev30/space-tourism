import React , {useState, createContext} from 'react';
export const Context = createContext();

export const States = (props) => {

    const [modal , setModal] = useState(false);
    const [subtitleEffect , setSubtitleEffect] = useState(0);

    return(

        <Context.Provider value={[modal , setModal , subtitleEffect, setSubtitleEffect]}>
            {props.children}
        </Context.Provider>

    )

}