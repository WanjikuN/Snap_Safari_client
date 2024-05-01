import React, { useState } from 'react';

const EditableModal = ({ photo, onClose, onSave }) => {
  const [title, setTitle] = useState(photo.title);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSave = () => {
    onSave({ ...photo, title });
    onClose();
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
