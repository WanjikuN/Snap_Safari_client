import React, { useState, useEffect } from 'react';
import BounceLoader from '../Loaders/BounceLoader';

const EditableModal = ({ photo, onClose, onTitleChange }) => {
  const [title, setTitle] = useState(photo.title);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTitle(photo.title);
  }, [photo.title]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  // async function to update photo title
  // PATCH: photos/<int:id>
  const handleSave = async () => {
    try {
      const response = await fetch(`https://snap-safari-backend.onrender.com/photos/${photo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Notify parent component that the title has changed
      onTitleChange();
      onClose();

    } catch (error) {
      console.error('Error updating title:', error);
    }
  };

  return (    
    <div className="modal">
      <div className="modal-content">
        <img src={photo.image_url} alt="" />
        <input type="text" value={title} onChange={handleTitleChange} />
        <button onClick={handleSave}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>    
    
  );
};

export default EditableModal;
