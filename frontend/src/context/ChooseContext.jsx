import { createContext, useEffect, useState } from "react";

export const ChooseContext = createContext();

export function ChooseProvider({children}){

    const [choose , setChoose] = useState([]);

    useEffect(() => {
        console.log(choose);
    }, [choose])

    return(
        <ChooseContext.Provider value={{choose , setChoose}}>
            {children}
        </ChooseContext.Provider>
    )
}

