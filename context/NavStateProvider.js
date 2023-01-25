import { createContext, useEffect, useState } from "react";

const NavContext = createContext({})

export const NavProvider = ({ children }) => {
    const [state, setState] = useState(true)

    useEffect(() => {
        if (window.innerWidth > 425) setState(false)
    }, [window.innerWidth])

    return (
        <NavBar.Provider value={{state, setState}}>
            {children}
        </NavBar.Provider>
    )
}

export default NavContext