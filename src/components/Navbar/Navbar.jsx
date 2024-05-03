import { useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Navbar = () =>{
    const location = useLocation();
    const logout = () =>{
        localStorage.clear();
        window.location.reload();
    } 
    return (
        <div id='nav'>
                {/* nav */}
                <h2><i>SnapSafari</i></h2>
                {(location.pathname === "/users" || location.pathname === "/albums" ) ? <div id="logout" onClick={logout}><FiLogOut size={25} /></div>:
                null
                }
            </div>
    )
}
export default Navbar;