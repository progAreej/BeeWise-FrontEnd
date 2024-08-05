

// // import React from 'react';
// // import { Bar } from 'react-chartjs-2';
// // import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// // // Register the components needed for Chart.js
// // ChartJS.register(
// //   Title,
// //   Tooltip,
// //   Legend,
// //   BarElement,
// //   CategoryScale,
// //   LinearScale
// // );

// // const Overview = () => {
// //   // Define data and options for the first bar chart (Sales)
// //   const dataSales = {
// //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //     datasets: [
// //       {
// //         label: 'Sales',
// //         data: [12, 19, 3, 5, 2, 3, 9],
// //         backgroundColor: 'rgba(219, 136, 2, 0.2)',
// //         borderColor: 'rgba(219, 136, 2, 1)',
// //         borderWidth: 2,
// //         // 219	136	2
// //       },
// //     ],
// //   };

// //   const optionsSales = {
// //     scales: {
// //       y: {
// //         beginAtZero: true,
// //       },
// //     },
// //   };

// //   // Define data and options for the second bar chart (Number of Products)
// //   const dataProducts = {
// //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //     datasets: [
// //       {
// //         label: 'Number of Products',
// //         data: [15, 25, 5, 10, 8, 4, 11],
// //         backgroundColor: 'rgba(68, 46, 0, 0.2)',
// //         borderColor: 'rgba(68, 46, 0,1)',
// //         // 68	46	0
// //         borderWidth: 2,
// //       },
// //     ],
// //   };

// //   const optionsProducts = {
// //     scales: {
// //       y: {
// //         beginAtZero: true,
// //       },
// //     },
// //   };

// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //       <div className="bg-white p-6 rounded-lg shadow">
// //         <h3 className="text-lg font-semibold mb-2">Total Hives</h3>
// //         <p className="text-3xl font-bold">12</p>
// //       </div>
// //       <div className="bg-white p-6 rounded-lg shadow">
// //         <h3 className="text-lg font-semibold mb-2">Honey Production</h3>
// //         <p className="text-3xl font-bold">250 kg</p>
// //       </div>
// //       <div className="bg-white p-6 rounded-lg shadow">
// //         <h3 className="text-lg font-semibold mb-2">Health Status</h3>
// //         <p className="text-3xl font-bold text-green-600">Good</p>
// //       </div>
// //       <div className="bg-white p-6 rounded-lg shadow w-full">
// //         <h3 className="text-lg font-semibold mb-4">Sales</h3>
// //         <Bar data={dataSales} options={optionsSales} />
// //       </div>
// //       <div className="bg-white p-6 rounded-lg shadow w-full">
// //         <h3 className="text-lg font-semibold mb-4">Number of Products</h3>
// //         <Bar data={dataProducts} options={optionsProducts} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Overview;


// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// // Register the components needed for Chart.js
// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale
// );

// const Overview = () => {
//   // Define data and options for the first bar chart (Sales)
//   const dataSales = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Sales',
//         data: [12, 19, 3, 5, 2, 3, 9],
//         backgroundColor: 'rgba(219, 136, 2, 0.2)',
//         borderColor: 'rgba(219, 136, 2, 1)',
//         borderWidth: 2,
//         // 219	136	2
//       },
//     ],
//   };

//   const optionsSales = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   // Define data and options for the second bar chart (Number of Products)
//   const dataProducts = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Number of Products',
//         data: [15, 25, 5, 10, 8, 4, 11],
//         backgroundColor: 'rgba(68, 46, 0, 0.2)',
//         borderColor: 'rgba(68, 46, 0,1)',
//         // 68	46	0
//         borderWidth: 2,
//       },
//     ],
//   };

//   const optionsProducts = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2">Total Hives</h3>
//         <p className="text-3xl font-bold">12</p>
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2">Honey Production</h3>
//         <p className="text-3xl font-bold">250 kg</p>
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2">Health Status</h3>
//         <p className="text-3xl font-bold text-green-600">Good</p>
//       </div>
      
//       <div className="bg-white p-6 rounded-lg shadow w-1/2 col-span-1 lg:col-span-2 xl:col-span-3">
//         <h3 className="text-lg font-semibold mb-4">Sales</h3>
//         <Bar data={dataSales} options={optionsSales} />
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow w-1/2 col-span-1 lg:col-span-2 xl:col-span-3">
//         <h3 className="text-lg font-semibold mb-4">Number of Products</h3>
//         <Bar data={dataProducts} options={optionsProducts} />
//       </div>
//     </div>
//   );
// };

// export default Overview;



import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the components needed for Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const Overview = () => {
  // Define data and options for the first bar chart (Sales)
  const dataSales = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: 'rgba(219, 136, 2, 0.2)',
        borderColor: 'rgba(219, 136, 2, 1)',
        borderWidth: 2,
      },
    ],
  };

  const optionsSales = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Define data and options for the second bar chart (Number of Products)
  const dataProducts = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Number of Products',
        data: [15, 25, 5, 10, 8, 4, 11],
        backgroundColor: 'rgba(68, 46, 0, 0.2)',
        borderColor: 'rgba(68, 46, 0, 1)',
        borderWidth: 2,
      },
    ],
  };

  const optionsProducts = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Total Hives</h3>
        <p className="text-3xl font-bold">12</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Honey Production</h3>
        <p className="text-3xl font-bold">250 kg</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Health Status</h3>
        <p className="text-3xl font-bold text-green-600">Good</p>
      </div>

      {/* Charts Section */}
      <div className="col-span-1 lg:col-span-2 xl:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Sales</h3>
          <Bar data={dataSales} options={optionsSales} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Number of Products</h3>
          <Bar data={dataProducts} options={optionsProducts} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
