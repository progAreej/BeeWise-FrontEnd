
import React, { useState } from 'react';
import { Users, ShoppingBag, FileText, Settings, LogOut, Mail, Calendar, UserPlus, MessageSquare } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagement />;
      case 'products':
        return <ProductManagement />;
      case 'content':
        return <ContentManagement />;
      case 'settings':
        return <Settings />;
      case 'admins':
        return <AdminManagement />;
      case 'beekeepers':
        return <BeekeeperManagement />;
      case 'events':
        return <EventManagement />;
      case 'messages':
        return <MessageCenter />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-amber-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'users' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('users')}
              >
                <Users className="h-5 w-5" />
                <span>User Management</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'admins' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('admins')}
              >
                <UserPlus className="h-5 w-5" />
                <span>Admin Management</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'beekeepers' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('beekeepers')}
              >
                <Users className="h-5 w-5" />
                <span>Beekeeper Management</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'products' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('products')}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Product Management</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'content' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('content')}
              >
                <FileText className="h-5 w-5" />
                <span>Content Management</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'events' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('events')}
              >
                <Calendar className="h-5 w-5" />
                <span>Event Management</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'messages' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('messages')}
              >
                <MessageSquare className="h-5 w-5" />
                <span>Message Center</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'settings' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </nav>
        <button className="flex items-center space-x-2 mt-8 text-red-300 hover:text-red-100">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
        </h1>
        {renderContent()}
      </main>
    </div>
  );
};

const UserManagement = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">User List</h2>
    {/* Add user management functionality here */}
  </div>
);

const AdminManagement = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Admin List</h2>
    {/* Add admin management functionality here */}
    <button className="bg-green-500 text-white px-4 py-2 rounded">Add New Admin</button>
  </div>
);

const BeekeeperManagement = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Beekeeper List</h2>
    {/* Add beekeeper management functionality here */}
    <div className="flex space-x-4 mb-4">
      <button className="bg-green-500 text-white px-4 py-2 rounded">Active Beekeepers</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Inactive Beekeepers</button>
    </div>
  </div>
);

const ProductManagement = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Product List</h2>
    {/* Add product management functionality here */}
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Approve New Products</button>
  </div>
);

const ContentManagement = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Community Posts</h2>
    {/* Add content management functionality here */}
    <div className="flex space-x-4 mb-4">
      <button className="bg-green-500 text-white px-4 py-2 rounded">Approve Posts</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Remove Posts</button>
    </div>
  </div>
);

const EventManagement = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Event List</h2>
    {/* Add event management functionality here */}
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Download Events</button>
  </div>
);

const MessageCenter = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Contact Messages</h2>
    {/* Add message center functionality here */}
    <div className="bg-white shadow rounded-lg p-4">
      <p>You have 5 new messages</p>
    </div>
  </div>
);

export default AdminDashboard;