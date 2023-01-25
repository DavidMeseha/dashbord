import { useContext } from "react";
import { NavProvider } from "../context/NavStateProvider";

const UseNavBar = () => {
    return (useContext(NavProvider))
};
export default UseNavBar;