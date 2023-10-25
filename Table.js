import React from 'react';
import TableRow from './TableRow';

const Table = ({ data, onDelete, onUpdate }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id} item={item} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
