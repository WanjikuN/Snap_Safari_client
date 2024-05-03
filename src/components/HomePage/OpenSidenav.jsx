import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import EditableModal from '../../Reusables/EditableModal';
import BounceLoader from '../../Loaders/BounceLoader';
import { CgProfile } from "react-icons/cg";
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';

const OpenSidenav = ({ selectedRow, onClose }) => {
    const location = useLocation();
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shouldReload, setShouldReload] = useState(false);
    const [albums, setAlbums] = useState([]);
    const [user, setUser] = useState();
    const [specificAlbum, setSpecificAlbum] = useState();

    const fetchPhotos = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://snap-safari-backend.onrender.com/photos/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const filteredPhotos = data.filter(photo => photo.album_id === selectedRow.id);
            setPhotos(filteredPhotos);
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.error('Error fetching data:', error);
        }
    };
    const fetchAlbums = async () => {
        try {
          setLoading(true);
            const response = await fetch('https://snap-safari-backend.onrender.com/albums/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
            const data = await response.json();
            const filteredAlbums = data.filter(album => album.users_id == selectedRow.id)
            setAlbums(filteredAlbums); 
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.error('Error fetching data:', error);
        }
    };
    const fetchUserById = async () => {
        try {
          setLoading(true);
            const response = await fetch(`https://snap-safari-backend.onrender.com/users/${selectedRow.id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
            const data = await response.json();
            setUser(data); 
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.error('Error fetching data:', error);
        }
    };
    const fetchAlbumById = async () => {
        try {
          setLoading(true);
            const response = await fetch(`https://snap-safari-backend.onrender.com/album/${selectedRow.id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
            const data = await response.json();
            setSpecificAlbum(data); 
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        if (location.pathname === "/users") {
            fetchUserById();
            fetchAlbums();
        } else {
            fetchPhotos();
            fetchAlbumById();
        }
    }, [location.pathname, selectedRow, shouldReload]);
    
    
    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
        setIsModalOpen(true);
    };

    const handleTitleChange = () => {
        setShouldReload(!shouldReload); 
    };
    function CustomToolbar() {
        return (
          <GridToolbarContainer>
          </GridToolbarContainer>
        );
      }
    return (
        <>
        {loading ? (
        <BounceLoader />
      ) : (
        <>
            <div className="side-navigation">
                <button onClick={onClose}>Close</button>
                {location.pathname === "/users" ? (
                    <div id="user-albums">
                    <div id="user-albums-profile">
                        {/* User Profile */}
                        <div className="profile-image">
                            <CgProfile size={35} />
                            
                        </div>
                        <div className="profile-info">
                            {!user?null:
                            <>
                            <p className="username">{user.username.toUpperCase()}</p>
                            <p className="email">{user.email}</p>
                            </>}
                        </div>
                    </div>
         
                    <div style={{height: '90%'}}> 
               
                    <DataGrid
                        rows={albums}
                        columns={[
                            { field: 'id', headerName: 'Album ID', width: 100 ,headerClassName:'header'},
                            { field: 'title', headerName: 'Album Title', width: 200 ,flex:1,headerClassName:'header' },
                        ]}
                        slots={{
                            toolbar: CustomToolbar,
                            loadingOverlay: LinearProgress,
                          }}
                        pageSize={5}
                        disableSelectionOnClick // Disables row selection on click
                        />
                    </div>
                   
                </div>
                
                ) : (
                    <div id="photos-container">
                        {photos.map(photo => (
                            <div key={photo.id} className='photos' onClick={() => handlePhotoClick(photo)}>
                                <div className="image-container">
                                    <img src={photo.image_url} alt="" />
                                    <p className="view-button">View</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {isModalOpen && (
                <EditableModal
                    photo={selectedPhoto}
                    onClose={() => setIsModalOpen(false)}
                    onTitleChange={handleTitleChange}
                />
            )}
              </>
      )}
        </>
    );
};

export default OpenSidenav;
