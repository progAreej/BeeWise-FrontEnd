// // // src/pages/Community.js
// // import React, { useState, useEffect } from 'react';

// // function Community() {
// //   const [posts, setPosts] = useState([]);
// //   const [newPost, setNewPost] = useState('');

// //   useEffect(() => {
// //     // Fetch community posts from an API or database
// //     // For now, we'll use dummy data
// //     setPosts([
// //       { id: 1, author: 'John Doe', content: 'Has anyone tried using lavender near their hives?', date: '2024-07-26' },
// //       { id: 2, author: 'Jane Smith', content: 'Looking for recommendations on the best smoker fuel.', date: '2024-07-25' },
// //     ]);
// //   }, []);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Add new post to the list (in a real app, you'd send this to a server)
// //     const newPostObj = {
// //       id: posts.length + 1,
// //       author: 'Current User',
// //       content: newPost,
// //       date: new Date().toISOString().split('T')[0],
// //     };
// //     setPosts([newPostObj, ...posts]);
// //     setNewPost('');
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h1 className="text-4xl font-bold mb-8">Beekeeping Community</h1>
// //       <form onSubmit={handleSubmit} className="mb-8">
// //         <textarea
// //           value={newPost}
// //           onChange={(e) => setNewPost(e.target.value)}
// //           className="w-full px-3 py-2 border rounded-lg"
// //           rows="3"
// //           placeholder="Share your thoughts or ask a question..."
// //           required
// //         ></textarea>
// //         <button type="submit" className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Post</button>
// //       </form>
// //       <div className="space-y-6">
// //         {posts.map(post => (
// //           <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
// //             <p className="font-semibold">{post.author}</p>
// //             <p className="text-gray-600 text-sm mb-2">{post.date}</p>
// //             <p>{post.content}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Community;


// import React from 'react';

// const Community = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-6 text-center">Community</h1>

//       <section id="forum" className="mb-12">
//         <h2 className="text-3xl font-semibold mb-4">Forum</h2>
//         <p className="text-lg mb-4">
//           Engage with other beekeepers and enthusiasts in our community forum. Here, you can view posts, join discussions, and share your experiences.
//         </p>
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="text-2xl font-semibold mb-4">Recent Discussions</h3>
//           <ul className="list-disc list-inside ml-4">
//             <li className="mb-2">
//               <a href="#" className="text-blue-500 hover:underline">
//                 <strong>Tips for Beekeeping in Hot Weather</strong>
//               </a>
//               <p className="text-sm text-gray-600">Join the conversation about managing your hive during hot weather.</p>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-blue-500 hover:underline">
//                 <strong>Best Practices for Hive Inspections</strong>
//               </a>
//               <p className="text-sm text-gray-600">Discuss techniques and best practices for inspecting your hive effectively.</p>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-blue-500 hover:underline">
//                 <strong>Dealing with Pests and Predators</strong>
//               </a>
//               <p className="text-sm text-gray-600">Share your experiences and solutions for managing pests and predators in your apiary.</p>
//             </li>
//           </ul>
//           <a href="/forum" className="mt-6 inline-block bg-goldD text-white font-bold py-2 px-6 rounded-xl transition-colors duration-300 hover:bg-goldL">
//             Join the Forum
//           </a>
//         </div>
//       </section>

//       <section id="events">
//         <h2 className="text-3xl font-semibold mb-4">Events</h2>
//         <p className="text-lg mb-4">
//           Stay updated on upcoming beekeeping events, workshops, and meetups. Participate in events to connect with fellow beekeepers and enhance your skills.
//         </p>
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
//           <ul className="list-disc list-inside ml-4">
//             <li className="mb-4">
//               <div className="flex flex-col">
//                 <span className="text-xl font-semibold">Beekeeping Workshop</span>
//                 <span className="text-gray-600">August 15, 2024</span>
//                 <p className="mt-2 text-gray-700">A hands-on workshop covering essential beekeeping techniques. Perfect for beginners and experienced beekeepers alike.</p>
//               </div>
//             </li>
//             <li className="mb-4">
//               <div className="flex flex-col">
//                 <span className="text-xl font-semibold">Bee Festival</span>
//                 <span className="text-gray-600">September 10, 2024</span>
//                 <p className="mt-2 text-gray-700">Celebrate all things bees with activities, exhibits, and local honey tastings.</p>
//               </div>
//             </li>
//             <li>
//               <div className="flex flex-col">
//                 <span className="text-xl font-semibold">Advanced Beekeeping Techniques</span>
//                 <span className="text-gray-600">October 5, 2024</span>
//                 <p className="mt-2 text-gray-700">An advanced course on optimizing hive health and productivity.</p>
//               </div>
//             </li>
//           </ul>
//           <a href="/events" className="mt-6 inline-block bg-goldD text-white font-bold py-2 px-6 rounded-xl transition-colors duration-300 hover:bg-goldL">
//             View All Events
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Community;

import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // Updated import statement
import { FaUserFriends, FaComments, FaShareAlt, FaCalendarAlt } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Community = () => {
  // Animation for the page transitions
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <animated.div style={fadeIn} className="container mx-auto px-6 py-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <Header />
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-800">Community</h1>

      {/* Introduction Section */}
      <section id="introduction" className="mb-14">
        <div className="flex items-center mb-6">
          <FaUserFriends className="text-4xl text-blue-700 mr-4 animate-pulse" />
          <h2 className="text-3xl font-semibold text-blue-700">Welcome to the BeeWise Community</h2>
        </div>
        <p className="text-base mb-6 text-gray-800">
          Join our vibrant community of beekeepers and enthusiasts! Here, you can connect, share experiences, and learn from each other.
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Get Involved</h3>
          <p className="text-gray-700">
            Whether you're a seasoned beekeeper or just starting, our community is here to support you. Explore discussions, join events, and share your beekeeping journey.
          </p>
        </div>
      </section>

      {/* Discussion Forum Section */}
      <section id="discussion-forum" className="mb-14">
        <div className="flex items-center mb-6">
          <FaComments className="text-4xl text-green-700 mr-4 animate-bounce" />
          <h2 className="text-3xl font-semibold text-blue-700">Discussion Forum</h2>
        </div>
        <p className="text-base mb-6 text-gray-800">
          Engage in meaningful discussions with fellow beekeepers. Share your questions, solutions, and experiences in our dedicated forums.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "General Beekeeping", description: "Discuss various aspects of beekeeping, from hive management to bee health." },
            { title: "Honey Production", description: "Share tips and techniques for producing high-quality honey." },
            { title: "Equipment & Tools", description: "Talk about beekeeping equipment and tools, and share reviews and recommendations." },
            { title: "Pests & Diseases", description: "Get advice on managing pests and diseases that affect bees and hives." }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3 text-green-600">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="mb-14">
        <div className="flex items-center mb-6">
          <FaCalendarAlt className="text-4xl text-orange-700 mr-4 animate-pulse" />
          <h2 className="text-3xl font-semibold text-blue-700">Upcoming Events</h2>
        </div>
        <p className="text-base mb-6 text-gray-800">
          Participate in community events to learn more and connect with other beekeepers. Check out our upcoming events and mark your calendar!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Beekeeping Workshop", date: "August 15, 2024", description: "A hands-on workshop covering essential beekeeping skills." },
            { title: "Honey Tasting Event", date: "September 10, 2024", description: "Sample various honey types and learn about their unique flavors." },
            { title: "Pest Management Seminar", date: "October 5, 2024", description: "Learn about effective strategies for managing common bee pests." },
            { title: "Community Meetup", date: "November 20, 2024", description: "Network with other beekeepers and discuss latest trends and challenges." }
          ].map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">{event.title}</h3>
              <p className="text-gray-700 mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Share & Connect Section */}
      <section id="share-connect" className="mb-14">
        <div className="flex items-center mb-6">
          <FaShareAlt className="text-4xl text-blue-700 mr-4 animate-pulse" />
          <h2 className="text-3xl font-semibold text-blue-700">Share & Connect</h2>
        </div>
        <p className="text-base mb-6 text-gray-800">
          Share your beekeeping story and connect with others in the community. Use our social media channels to stay updated and engaged.
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Connect with Us</h3>
          <p className="text-gray-700 mb-4">Follow us on social media to keep up with the latest news and events, and join our online community.</p>
          <a href="#" className="text-blue-600 hover:underline">Follow us on Facebook →</a><br />
          <a href="#" className="text-blue-600 hover:underline">Follow us on Twitter →</a>
        </div>
      </section>

      <Footer />
    </animated.div>
  );
};

export default Community;
