import React from "react";
import ComponentA from "./componentA";
import ComponentB from "./componentB";

export const ThemeContext = React.createContext('light');

export default function ContextAPI(){
    
    return (
        <ThemeContext.Provider value="dark">
            <ComponentA/>
            <ComponentB/>
        </ThemeContext.Provider>
    );
}