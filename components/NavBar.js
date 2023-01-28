import { Arrow as ArrowIcon } from "../public/Icons.jsx";
import { Graph as GraphIcon } from "../public/Icons.jsx"
import { List as ListIcon } from "../public/Icons.jsx"
import { Home as HomeIcon } from "../public/Icons.jsx"
import useNavBar from "../hooks/useNavBar";
import useOutsideClickAlerter from "../hooks/useOutsideClickAlerter.js";
import { useRef } from "react";
import { useWindowWidth } from "@react-hook/window-size";


const NavBar = ({ children }) => {
   const { state, toggleNavBar, setState } = useNavBar()
   const width = useWindowWidth()
   const navRef = useRef()


   useOutsideClickAlerter(setState, navRef)

   return (
      <>
         <div ref={navRef} style={{ position: 'fixed', top: 0, bottom: 0, transform: `translate(${width > 425 ? 0 : state ? 0 : -130}px,0)`, zIndex: 3, transition: 'all 0.3s', boxShadow: '4px 0px 15px -10px' }}>
            <div style={{ background: 'white', color: '#303030', height: '100%' }}>
               <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <div>
                     <div style={{ margin: 0, padding: 10, cursor: 'pointer' }}><img src="/logo.png" style={{ width: 35 }} /></div>
                     <div style={{ height: 1, width: '100%', background: 'rgb(230 230 230)', margin: 'auto' }}></div>
                     <ul>
                        <li className="navItem">
                           <div><HomeIcon /></div>

                        </li>
                        <li className="navItem">
                           <div><GraphIcon /></div>

                        </li>
                        <li className="navItem">
                           <div><ListIcon /></div>

                        </li>
                     </ul>
                  </div>
                  {<div className="toggle" onClick={toggleNavBar} >
                     <ArrowIcon />
                  </div>}
               </div>
            </div>
         </div>
         {children}
      </>
   )
};

export default NavBar;