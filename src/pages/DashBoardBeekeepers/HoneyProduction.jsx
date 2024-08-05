// import React from 'react';

// const HoneyProduction = () => (
//   <div>
//     <h2 className="text-xl font-semibold mb-4">Honey Production Log</h2>
//     <table className="min-w-full bg-white">
//       <thead>
//         <tr>
//           <th className="py-2 px-4 border-b">Date</th>
//           <th className="py-2 px-4 border-b">Hive ID</th>
//           <th className="py-2 px-4 border-b">Quantity (kg)</th>
//           <th className="py-2 px-4 border-b">Quality</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td className="py-2 px-4 border-b">2024-08-01</td>
//           <td className="py-2 px-4 border-b">H001</td>
//           <td className="py-2 px-4 border-b">20</td>
//           <td className="py-2 px-4 border-b text-green-600">Excellent</td>
//         </tr>
//         {/* Add more rows as needed */}
//       </tbody>
//     </table>
//   </div>
// );

// export default HoneyProduction;


import React, { useState } from 'react';

const HoneyProduction = () => {
  const [productionLogs, setProductionLogs] = useState([
    { date: '2024-08-01', hiveId: 'H001', quantity: 20, quality: 'Excellent' },
    // Add more initial production data if needed
  ]);

  const [newLog, setNewLog] = useState({
    date: '',
    hiveId: '',
    quantity: '',
    quality: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLog((prevLog) => ({ ...prevLog, [name]: value }));
  };

  const handleAddLog = () => {
    setProductionLogs((prevLogs) => [...prevLogs, newLog]);
    setNewLog({ date: '', hiveId: '', quantity: '', quality: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Honey Production Log</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Hive ID</th>
            <th className="py-2 px-4 border-b">Quantity (kg)</th>
            <th className="py-2 px-4 border-b">Quality</th>
          </tr>
        </thead>
        <tbody>
          {productionLogs.map((log, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{log.date}</td>
              <td className="py-2 px-4 border-b">{log.hiveId}</td>
              <td className="py-2 px-4 border-b">{log.quantity}</td>
              <td className={`py-2 px-4 border-b ${log.quality === 'Excellent' ? 'text-green-600' : 'text-yellow-600'}`}>{log.quality}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Add New Production Log</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="date"
            value={newLog.date}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="hiveId"
            placeholder="Hive ID"
            value={newLog.hiveId}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity (kg)"
            value={newLog.quantity}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="quality"
            placeholder="Quality"
            value={newLog.quality}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddLog}
          className="mt-4 bg-amber-600 text-white px-4 py-2 rounded"
        >
          Add New Log
        </button>
      </div>
    </div>
  );
};

export default HoneyProduction;
