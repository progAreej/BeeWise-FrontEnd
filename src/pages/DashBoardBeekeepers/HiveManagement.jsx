

import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa';

const HiveManagement = () => {
  const [hives, setHives] = useState([
    { id: 'H001', queenAge: '2 years', population: 'Strong', healthStatus: 'Healthy' },
    // Add more initial hive data if needed
  ]);

  const [newHive, setNewHive] = useState({
    id: '',
    queenAge: '',
    population: '',
    healthStatus: ''
  });

  const [editing, setEditing] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHive((prevHive) => ({ ...prevHive, [name]: value }));
  };

  const handleAddHive = () => {
    setHives((prevHives) => [...prevHives, newHive]);
    setNewHive({ id: '', queenAge: '', population: '', healthStatus: '' });
  };

  const handleEditClick = (index) => {
    setEditing(index);
  };

  const handleSaveClick = (index) => {
    setHives((prevHives) => {
      const updatedHives = [...prevHives];
      updatedHives[index] = newHive;
      return updatedHives;
    });
    setEditing(null);
    setNewHive({ id: '', queenAge: '', population: '', healthStatus: '' });
  };

  const handleDeleteClick = (index) => {
    setHives((prevHives) => prevHives.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Hive List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Hive ID</th>
            <th className="py-2 px-4 border-b">Queen Age</th>
            <th className="py-2 px-4 border-b">Population</th>
            <th className="py-2 px-4 border-b">Health Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hives.map((hive, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">
                {editing === index ? (
                  <input
                    type="text"
                    name="id"
                    value={newHive.id || hive.id}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  hive.id
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editing === index ? (
                  <input
                    type="text"
                    name="queenAge"
                    value={newHive.queenAge || hive.queenAge}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  hive.queenAge
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editing === index ? (
                  <input
                    type="text"
                    name="population"
                    value={newHive.population || hive.population}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  hive.population
                )}
              </td>
              <td className={`py-2 px-4 border-b ${hive.healthStatus === 'Healthy' ? 'text-green-600' : 'text-red-600'}`}>
                {editing === index ? (
                  <input
                    type="text"
                    name="healthStatus"
                    value={newHive.healthStatus || hive.healthStatus}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-1 rounded"
                  />
                ) : (
                  hive.healthStatus
                )}
              </td>
              <td className="py-2 px-4 border-b flex items-center space-x-2">
                {editing === index ? (
                  <>
                    <button
                      onClick={() => handleSaveClick(index)}
                      className="bg-green-500 text-white px-2 py-1 rounded flex items-center"
                    >
                      <FaSave className="mr-1" />
                        Save
                    </button>
                    <button
                      onClick={() => setEditing(null)}
                      className="bg-gray-500 text-white px-2 py-1 rounded flex items-center"
                    >
                      <FaTrashAlt className="mr-1" />
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditClick(index)}
                      className="bg-blue-500 text-white px-2 py-1 rounded flex items-center"
                    >
                      <FaEdit className="mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded flex items-center"
                    >
                      <FaTrashAlt className="mr-1" />
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Add New Hive</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="id"
            placeholder="Hive ID"
            value={newHive.id}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="queenAge"
            placeholder="Queen Age"
            value={newHive.queenAge}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="population"
            placeholder="Population"
            value={newHive.population}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="healthStatus"
            placeholder="Health Status"
            value={newHive.healthStatus}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddHive}
          className="mt-4 bg-amber-600 text-white px-4 py-2 rounded"
        >
          Add New Hive
        </button>
      </div>
    </div>
  );
};

export default HiveManagement;
