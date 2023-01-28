import { createContext, useEffect, useState } from "react";

const NavContext = createContext({})

export const NavProvider = ({ children }) => {
    const [state, setState] = useState(true)

    const toggleNavBar = () => {
        if (window.innerWidth > 425) return

        if (state) setState(false)
        else setState(true)
    }

    useEffect(() => {
        if (window.innerWidth > 425) setState(false)
        else setState(true)
    }, [])

    return (
        <NavContext.Provider value={{ state, toggleNavBar, setState }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContext