

import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Heart, Edit2, Save, Star, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Bee Street, Honeyville, BZ 12345',
    favoriteHoney: 'Wildflower',
    allergies: 'None',
  });

  const [orders, setOrders] = useState([
    { id: '1001', date: '2023-07-15', total: 45.00, status: 'Delivered' },
    { id: '1002', date: '2023-08-02', total: 30.00, status: 'Processing' },
    { id: '1003', date: '2023-08-10', total: 60.00, status: 'Shipped' },
  ]);

  const [favorites, setFavorites] = useState([
    { id: '1', name: 'Pure Acacia Honey', rating: 4.8 },
    { id: '2', name: 'Wildflower Honey', rating: 4.9 },
    { id: '3', name: 'Manuka Honey', rating: 4.7 },
  ]);

  const [recentActivity, setRecentActivity] = useState([
    { id: 'a1', activity: 'Reviewed Pure Acacia Honey', date: '2024-07-30' },
    { id: 'a2', activity: 'Added Wildflower Honey to Favorites', date: '2024-07-25' },
    { id: 'a3', activity: 'Purchased Manuka Honey', date: '2024-07-20' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically send the updated user data to your backend
    console.log('Updated user data:', user);
  };

  return (
    <div>
      <Header/>
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8">Your Profile</h1> */}

      {/* Personal Information Section */}
      <div className="bg-page shadow-md rounded-lg p-6 mb-8 mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Personal Information</h2>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center text-amber-600 hover:text-amber-700"
            >
              <Edit2 className="h-5 w-5 mr-1" />
              Edit
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information Fields */}
            {Object.keys(user).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                <div className="flex items-center">
                  {key === 'name' && <User className="h-5 w-5 text-gray-400 mr-2" />}
                  {key === 'email' && <Mail className="h-5 w-5 text-gray-400 mr-2" />}
                  {key === 'phone' && <Phone className="h-5 w-5 text-gray-400 mr-2" />}
                  {key === 'address' && <MapPin className="h-5 w-5 text-gray-400 mr-2" />}
                  {key === 'favoriteHoney' && <Heart className="h-5 w-5 text-gray-400 mr-2" />}
                  {key === 'allergies' && <Edit2 className="h-5 w-5 text-gray-400 mr-2" />}
                  
                  {isEditing ? (
                    <input
                      type="text"
                      name={key}
                      value={user[key]}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                    />
                  ) : (
                    <span>{user[key]}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {isEditing && (
            <div className="mt-6">
              <button
                type="submit"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <Save className="h-5 w-5 mr-2" />
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Favorite Products Section */}
      <div className="bg-page shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Favorite Products</h2>
        <div className="space-y-4">
          {favorites.map(favorite => (
            <div key={favorite.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-amber-600 mr-4" />
                <span className="text-lg font-medium">{favorite.name}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <span>{favorite.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-page shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map(activity => (
            <div key={activity.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-amber-600 mr-4" />
                <span className="text-lg font-medium">{activity.activity}</span>
              </div>
              <span className="text-sm text-gray-500">{activity.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Order History Section */}
      <div className="bg-page shadow-md rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-6">Order History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total.toFixed(2)} JOD</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ProfilePage;
