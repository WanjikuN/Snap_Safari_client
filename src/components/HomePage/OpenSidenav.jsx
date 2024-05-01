import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
const OpenSidenav = ({selectedRow, onClose}) =>{
    const location = useLocation();
    return (
        <>
        <div className="side-navigation">
          <button onClick={onClose}>Close</button>
            {location.pathname === "/users"?
            <>
            {/* users details */}
            <p>Name: {selectedRow.name}</p>
          <p>Username: {selectedRow.username}</p>
          <p>Email: {selectedRow.email}</p>
            </>
         
          :
          <>
          {/* Albums details */}
           <p>Title: {selectedRow.title}</p>
          </>}
        </div>
        </>
        
    )
}
export default OpenSidenav;