// // src/pages/AdminDashboard.js
// import React, { useState } from 'react';

// function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState('blog');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'blog':
//         return <BlogManagement />;
//       case 'resources':
//         return <ResourceManagement />;
//       case 'events':
//         return <EventManagement />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//       <div className="flex mb-6">
//         <button
//           className={`mr-4 px-4 py-2 rounded ${activeTab === 'blog' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
//           onClick={() => setActiveTab('blog')}
//         >
//           Blog Management
//         </button>
//         <button
//           className={`mr-4 px-4 py-2 rounded ${activeTab === 'resources' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
//           onClick={() => setActiveTab('resources')}
//         >
//           Resource Management
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${activeTab === 'events' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
//           onClick={() => setActiveTab('events')}
//         >
//           Event Management
//         </button>
//       </div>
//       {renderContent()}
//     </div>
//   );
// }

// function BlogManagement() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Blog Management</h2>
//       {/* Add blog post creation and management functionality */}
//     </div>
//   );
// }

// function ResourceManagement() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Resource Management</h2>
//       {/* Add resource creation and management functionality */}
//     </div>
//   );
// }

// function EventManagement() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Event Management</h2>
//       {/* Add event creation and management functionality */}
//     </div>
//   );
// }

// export default AdminDashboard;


// src/pages/AdminDashboard.js
import React, { useState } from 'react';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('blog');

  const renderContent = () => {
    switch (activeTab) {
      case 'blog':
        return <BlogManagement />;
      case 'products':
        return <ProductManagement />;
      case 'users':
        return <UserManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="flex mb-6">
        <button
          className={`mr-4 px-4 py-2 rounded ${activeTab === 'blog' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('blog')}
        >
          Blog Management
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded ${activeTab === 'products' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('products')}
        >
          Product Management
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'users' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('users')}
        >
          User Management
        </button>
      </div>
      {renderContent()}
    </div>
  );
}

function BlogManagement() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Blog Management</h2>
      {/* Add blog post creation and management functionality */}
    </div>
  );
}

function ProductManagement() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
      {/* Add product creation and management functionality */}
    </div>
  );
}

function UserManagement() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      {/* Add user management functionality */}
    </div>
  );
}

export default AdminDashboard;