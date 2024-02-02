import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbarContext = () =>{
    return useContext(NavbarContext);
}

export const NavbarProvider = ({children}) => {
    const [isNavbarOpen, setIsNavbarOpen ] = useState(false);

    const toggleNavbar = () =>{
        setIsNavbarOpen((prevState) => ! prevState);
    };

    return (
      <NavbarContext.Provider value = {{isNavbarOpen, toggleNavbar}}>
        {children}
      </NavbarContext.Provider>  
    );
}