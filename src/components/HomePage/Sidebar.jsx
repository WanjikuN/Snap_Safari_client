import { FaUsers } from "react-icons/fa";
import { MdPhotoAlbum } from "react-icons/md";
import { Link } from "react-router-dom";
const Sidebar = () =>{
    return (
        <div id='sidebar'>
            {/* sidebar */}
            <div>
            <Link to='/users'><FaUsers size={30} color="black"/></Link>

            </div>
            <div>
            <Link to='/albums'><MdPhotoAlbum size={30} color="black" /></Link>

            </div>
        </div>
    )
}
export default Sidebar;