import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import EditableModal from '../../Reusables/EditableModal';

const OpenSidenav = ({ selectedRow, onClose }) => {
    const location = useLocation();
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://snap-safari-backend.onrender.com/photos/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const filteredPhotos = data.filter(photo => photo.album_id === selectedRow.id);
                setPhotos(filteredPhotos);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedRow]);

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="side-navigation">
                <button onClick={onClose}>Close</button>
                {location.pathname === "/users" ? (
                    <>
                        <p>Name: {selectedRow.name}</p>
                        <p>Username: {selectedRow.username}</p>
                        <p>Email: {selectedRow.email}</p>
                    </>
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
                />
            )}
        </>
    );
};

export default OpenSidenav;
