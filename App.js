import React, { useState } from 'react';
import Table from './AddRow';
import AddRow from './AddRow';
function App() {
    const [data, setData] = useState([
      { id: 1, name: 'John', email: 'john@example.com' },
      { id: 2, name: 'Doe', email: 'doe@example.com' },
    ]);
  
    const addRow = (item) => {
      setData([...data, { id: Date.now(), ...item }]);
    };
  
    const deleteRow = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
    const updateRow = (updatedItem) => {
      setData((prevData) =>                                                               
        prevData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
      );
    };
  
    return (
      <div className="App">
        <h1>CRUD Table</h1>
        <Table data={data} onDelete={deleteRow} onUpdate={updateRow} />
        <AddRow onAdd={addRow} />
      </div>
    );
}

export default App;
