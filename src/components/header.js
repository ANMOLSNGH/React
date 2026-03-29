import {LOGO_URL } from "../utils/extra";

const Header = () => {
     return <div className = "header">
         <img  className= "image" src= {LOGO_URL} style={{height:"32px",width:"43px"}} />
         <ul className="nav-item">
            <li>
                Home
            </li>
            <input type="text" placeholder="Search here"/>
            <li>
                contact us
            </li>
            <li>
                Help
            </li>
             
         </ul>
     </div>
}

export default Header;