// // src/pages/Community.js
// import React, { useState, useEffect } from 'react';

// function Community() {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState('');

//   useEffect(() => {
//     // Fetch community posts from an API or database
//     // For now, we'll use dummy data
//     setPosts([
//       { id: 1, author: 'John Doe', content: 'Has anyone tried using lavender near their hives?', date: '2024-07-26' },
//       { id: 2, author: 'Jane Smith', content: 'Looking for recommendations on the best smoker fuel.', date: '2024-07-25' },
//     ]);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add new post to the list (in a real app, you'd send this to a server)
//     const newPostObj = {
//       id: posts.length + 1,
//       author: 'Current User',
//       content: newPost,
//       date: new Date().toISOString().split('T')[0],
//     };
//     setPosts([newPostObj, ...posts]);
//     setNewPost('');
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8">Beekeeping Community</h1>
//       <form onSubmit={handleSubmit} className="mb-8">
//         <textarea
//           value={newPost}
//           onChange={(e) => setNewPost(e.target.value)}
//           className="w-full px-3 py-2 border rounded-lg"
//           rows="3"
//           placeholder="Share your thoughts or ask a question..."
//           required
//         ></textarea>
//         <button type="submit" className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Post</button>
//       </form>
//       <div className="space-y-6">
//         {posts.map(post => (
//           <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
//             <p className="font-semibold">{post.author}</p>
//             <p className="text-gray-600 text-sm mb-2">{post.date}</p>
//             <p>{post.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Community;


import React from 'react';

const Community = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Community</h1>

      <section id="forum" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Forum</h2>
        <p className="text-lg mb-4">
          Engage with other beekeepers and enthusiasts in our community forum. Here, you can view posts, join discussions, and share your experiences.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Recent Discussions</h3>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
                <strong>Tips for Beekeeping in Hot Weather</strong>
              </a>
              <p className="text-sm text-gray-600">Join the conversation about managing your hive during hot weather.</p>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
                <strong>Best Practices for Hive Inspections</strong>
              </a>
              <p className="text-sm text-gray-600">Discuss techniques and best practices for inspecting your hive effectively.</p>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
                <strong>Dealing with Pests and Predators</strong>
              </a>
              <p className="text-sm text-gray-600">Share your experiences and solutions for managing pests and predators in your apiary.</p>
            </li>
          </ul>
          <a href="/forum" className="mt-6 inline-block bg-goldD text-white font-bold py-2 px-6 rounded-xl transition-colors duration-300 hover:bg-goldL">
            Join the Forum
          </a>
        </div>
      </section>

      <section id="events">
        <h2 className="text-3xl font-semibold mb-4">Events</h2>
        <p className="text-lg mb-4">
          Stay updated on upcoming beekeeping events, workshops, and meetups. Participate in events to connect with fellow beekeepers and enhance your skills.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-4">
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Beekeeping Workshop</span>
                <span className="text-gray-600">August 15, 2024</span>
                <p className="mt-2 text-gray-700">A hands-on workshop covering essential beekeeping techniques. Perfect for beginners and experienced beekeepers alike.</p>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Bee Festival</span>
                <span className="text-gray-600">September 10, 2024</span>
                <p className="mt-2 text-gray-700">Celebrate all things bees with activities, exhibits, and local honey tastings.</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Advanced Beekeeping Techniques</span>
                <span className="text-gray-600">October 5, 2024</span>
                <p className="mt-2 text-gray-700">An advanced course on optimizing hive health and productivity.</p>
              </div>
            </li>
          </ul>
          <a href="/events" className="mt-6 inline-block bg-goldD text-white font-bold py-2 px-6 rounded-xl transition-colors duration-300 hover:bg-goldL">
            View All Events
          </a>
        </div>
      </section>
    </div>
  );
};

export default Community;
