import { useContext } from "react";
import { ThemeContext } from "./contextAPI";

export default function ComponentA(){
    const theme = useContext(ThemeContext);
    return(
        <h2>Component A {theme}</h2>
    );
}