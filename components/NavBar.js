import { Arrow as ArrowIcon } from "../public/Icons.jsx";
import { Graph as GraphIcon } from "../public/Icons.jsx"
import { List as ListIcon } from "../public/Icons.jsx"
import { Home as HomeIcon } from "../public/Icons.jsx"

const NavBar = () => {
   return (
      <div style={{ background: 'white', color: '#303030', height: '100%' }}>
         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
               <div style={{ margin: 0, padding: 10, cursor: 'pointer' }}><img src="/logo.png" style={{ width: 35 }} /></div>
               <div style={{ height: 1, width: '70%', background: 'rgb(230 230 230)', margin: 'auto' }}></div>
               <div style={{ display: 'flex' }}>
                  <ul style={{ width: '55px' }}>
                     <li className="navItem"><HomeIcon /></li>
                     <li className="navItem"><GraphIcon /></li>
                     <li className="navItem"><ListIcon /></li>
                  </ul>
                  <ul>
                     <li className="navItem">Home</li>
                     <li className="navItem">Charts</li>
                     <li className="navItem">Lists</li>
                  </ul>
               </div>
            </div>
            <div className="toggle" >
               <ArrowIcon />
            </div>
         </div>
      </div>
   )
};

export default NavBar;