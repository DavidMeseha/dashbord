import { useContext } from "react";
import NavContext from "../context/NavStateProvider";

const UseNavBar = () => {
    return (useContext(NavContext))
};
export default UseNavBar;