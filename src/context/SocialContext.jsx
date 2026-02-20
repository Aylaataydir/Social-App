
import React, { createContext } from 'react'


const SocialContext = createContext()

export const SocialContextProvider = ({ children }) => {

    const [openSidebar, setOpenSidebar] = React.useState(false);

    const toggleDrawer = () => {
        setOpenSidebar(prev => !prev );
    };


    return (
        <SocialContext.Provider value={{ setOpenSidebar, toggleDrawer, openSidebar }}>
            {children}
        </SocialContext.Provider>
    )
}

export default SocialContext