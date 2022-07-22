import { useContext } from "react";
import { ThemeContext } from "./contextAPI";

export default function ComponentB(){
    const theme = useContext(ThemeContext);
    return (
        <h2>component B {theme}</h2>
    );
}