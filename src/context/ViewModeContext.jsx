import React, { createContext, useState, useContext } from 'react';

const ViewModeContext = createContext();

export const ViewModeProvider = ({ children }) => {
    // Force Web Mode (isMobile = false)
    const isMobile = false;
    const setIsMobile = () => { };

    return (
        <ViewModeContext.Provider value={{ isMobile, setIsMobile }}>
            {children}
        </ViewModeContext.Provider>
    );
};

export const useViewMode = () => useContext(ViewModeContext);
