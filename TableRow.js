import React, { useState } from 'react';

const TableRow = ({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(editedItem);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  return (
    <tr>
      {isEditing ? (
        <>
          <td>
            <input type="text" name="name" value={editedItem.name} onChange={handleInputChange} />
          </td>
          <td>
            <input type="text" name="email" value={editedItem.email} onChange={handleInputChange} />
          </td>
          <td>
            <button onClick={handleSave}>Save</button>
          </td>
        </>
      ) : (
        <>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
