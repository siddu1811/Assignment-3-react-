import React, { useState } from 'react';

const AddRow = ({ onAdd }) => {
  const [newItem, setNewItem] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAdd = () => {
    onAdd(newItem);
    setNewItem({ name: '', email: '' });
  };

  return (
    <tr>
      <td>
        <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
      </td>
      <td>
        <input type="text" name="email" value={newItem.email} onChange={handleInputChange} />
      </td>
      <td>
        <button onClick={handleAdd}>Add</button>
      </td>
    </tr>
  );
};

export default AddRow;
