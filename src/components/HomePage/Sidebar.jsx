import { FaUsers } from "react-icons/fa";
import { MdPhotoAlbum } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Sidebar = () =>{
    const location = useLocation();
    return (
        <div id='sidebar'>
            {/* sidebar */}
            <Link className={location.pathname === '/users'?"icons sidebar":"sidebar"} to='/users'>
            <div  >
            <FaUsers size={30} color="black"/>
            </div></Link>

            <Link  className={location.pathname === '/albums'?"icons sidebar":"sidebar"} to='/albums' >
                 <div >
            <MdPhotoAlbum size={30} color="black" />
            </div>
            </Link>
        </div>
    )
}
export default Sidebar;