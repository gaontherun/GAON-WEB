import React, { createContext, useState, useContext } from 'react';

const ViewModeContext = createContext();

export const ViewModeProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <ViewModeContext.Provider value={{ isMobile, setIsMobile }}>
            {children}
        </ViewModeContext.Provider>
    );
};

export const useViewMode = () => useContext(ViewModeContext);
