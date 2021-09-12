import { createContext, useState } from 'react';
import React from 'react';

export const NavContext = createContext();

const NavHeightContext = ({ children }) => {
    const [height, setHeight] = useState(0);

    return <NavContext.Provider value={{ height, setHeight }}>{children}</NavContext.Provider>;
};

export default NavHeightContext;
