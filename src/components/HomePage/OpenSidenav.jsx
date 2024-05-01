import Sidebar from "./Sidebar";

const OpenSidenav = ({selectedRow, onClose}) =>{
    return (
        <>
        <div className="side-navigation">
          <button onClick={onClose}>Close</button>
          <p>Name: {selectedRow.name}</p>
          <p>Username: {selectedRow.username}</p>
          <p>Email: {selectedRow.email}</p>
        </div>
        </>
        
    )
}
export default OpenSidenav;