// import React, { useState } from 'react';
// import { Trash2, Plus, Minus, CreditCard } from 'lucide-react';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Wildflower Honey', price: 10, quantity: 2, image: '/api/placeholder/100/100' },
//     { id: 2, name: 'Acacia Honey', price: 12, quantity: 1, image: '/api/placeholder/100/100' },
//     { id: 3, name: 'Manuka Honey', price: 25, quantity: 1, image: '/api/placeholder/100/100' },
//   ]);

//   const updateQuantity = (id, change) => {
//     setCartItems(cartItems.map(item => 
//       item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
//     ).filter(item => item.quantity > 0));
//   };

//   const removeItem = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p className="text-xl">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
//             <table className="w-full">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {cartItems.map((item) => (
//                   <tr key={item.id}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <img className="h-10 w-10 rounded-full mr-4" src={item.image} alt={item.name} />
//                         <div className="text-sm font-medium text-gray-900">{item.name}</div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">${item.price.toFixed(2)}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-gray-700">
//                           <Minus className="h-5 w-5" />
//                         </button>
//                         <span className="mx-2 text-sm">{item.quantity}</span>
//                         <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-gray-700">
//                           <Plus className="h-5 w-5" />
//                         </button>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-900">
//                         <Trash2 className="h-5 w-5" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-lg font-semibold">Total:</span>
//               <span className="text-2xl font-bold">${total.toFixed(2)}</span>
//             </div>
//             <button className="w-full bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors">
//               <CreditCard className="h-5 w-5 mr-2" />
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React, { useState } from 'react';
import { Trash2, Plus, Minus, CreditCard, Link } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { Link } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Wildflower Honey', price: 10, quantity: 2, image: '/api/placeholder/100/100' },
    { id: 2, name: 'Acacia Honey', price: 12, quantity: 1, image: '/api/placeholder/100/100' },
    { id: 3, name: 'Manuka Honey', price: 25, quantity: 1, image: '/api/placeholder/100/100' },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Header/>
    <div className="container mx-auto px-4 py-8">
      <div className="bg-page shadow-lg rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-goldD mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-xl text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brown text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img className="h-16 w-16 rounded-full mr-4" src={item.image} alt={item.name} />
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.price.toFixed(2)} JOD</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-gray-700">
                            <Minus className="h-5 w-5" />
                          </button>
                          <span className="mx-2 text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-gray-700">
                            <Plus className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{(item.price * item.quantity).toFixed(2)} JOD</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mt-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Subtotal:</span>
                <span className="text-2xl font-bold">{total.toFixed(2)} JOD</span>
              </div>
              {/* <Link to="/SubscriptionPage">
    <button className="w-full bg-brown text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-brown transition-colors mb-4">
      <CreditCard className="h-5 w-5 mr-2" />
      Proceed to Checkout
    </button>
  </Link> */}
              <button className="w-full bg-brown text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-brown transition-colors mb-4">
                <CreditCard className="h-5 w-5 mr-2" />
                Proceed to Checkout
              </button>
              <button className="w-full bg-goldD text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-goldL transition-colors">
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Cart;
