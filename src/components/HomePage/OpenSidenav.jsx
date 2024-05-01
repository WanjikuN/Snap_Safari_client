import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
const OpenSidenav = ({selectedRow, onClose}) =>{
    const location = useLocation();
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
   
        const fetchData = async () => {
            try {
                const response = await fetch('https://snap-safari-backend.onrender.com/photos/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPhotos(data); 
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
  
      fetchData();
    }, []);
    console.log(photos)
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
          <div id="photos-container">
          {
            photos.map(photo =>(
                <div key={photo.id}  className='photos'>
                   <div className="image-container">
                    <img src={photo.image_url} alt="" />
                <p className="view-button">View</p>
                    </div>
                    {/* <p>{photo.title}</p> */}

                </div>
            ))
           }
          </div>
         
          </>}
        </div>
        </>
        
    )
}
export default OpenSidenav;