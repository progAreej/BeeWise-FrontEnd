import React from 'react';

const CommunityForum = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Community Forum</h2>
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Latest Posts</h3>
      <ul>
        <li className="border-b py-2">
          <a href="#" className="text-blue-600 hover:underline">Post Title 1</a> - <span>Author</span>
        </li>
        <li className="border-b py-2">
          <a href="#" className="text-blue-600 hover:underline">Post Title 2</a> - <span>Author</span>
        </li>
        {/* Add more posts as needed */}
      </ul>
    </div>
  </div>
);

export default CommunityForum;


// import React, { useState } from 'react';

// const CommunityForum = () => {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       title: 'Post Title 1',
//       author: 'Author 1',
//       content: 'This is the content of post 1.',
//       replies: [
//         { id: 1, author: 'Reply Author 1', content: 'This is a reply to post 1.' }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Post Title 2',
//       author: 'Author 2',
//       content: 'This is the content of post 2.',
//       replies: []
//     }
//   ]);

//   const [newPost, setNewPost] = useState({
//     title: '',
//     author: '',
//     content: ''
//   });

//   const [newReply, setNewReply] = useState({
//     postId: null,
//     author: '',
//     content: ''
//   });

//   const handlePostInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
//   };

//   const handleReplyInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewReply((prevReply) => ({ ...prevReply, [name]: value }));
//   };

//   const handleAddPost = () => {
//     setPosts((prevPosts) => [
//       ...prevPosts,
//       {
//         ...newPost,
//         id: prevPosts.length + 1,
//         replies: []
//       }
//     ]);
//     setNewPost({ title: '', author: '', content: '' });
//   };

//   const handleAddReply = (postId) => {
//     setPosts((prevPosts) =>
//       prevPosts.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               replies: [
//                 ...post.replies,
//                 { id: post.replies.length + 1, ...newReply }
//               ]
//             }
//           : post
//       )
//     );
//     setNewReply({ postId: null, author: '', content: '' });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-xl font-semibold mb-4">Community Forum</h2>

//       <div className="bg-white p-6 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2">Latest Posts</h3>
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id} className="border-b py-4">
//               <h4 className="text-lg font-semibold mb-2">
//                 <a href="#" className="text-blue-600 hover:underline">{post.title}</a>
//               </h4>
//               <p className="mb-2">By: {post.author}</p>
//               <p className="mb-4">{post.content}</p>
//               <div>
//                 <h5 className="text-md font-semibold mb-2">Replies</h5>
//                 <ul>
//                   {post.replies.map((reply) => (
//                     <li key={reply.id} className="border-t py-2">
//                       <p className="font-semibold">{reply.author}:</p>
//                       <p>{reply.content}</p>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="mt-4">
//                 <h5 className="text-md font-semibold mb-2">Add Reply</h5>
//                 <input
//                   type="text"
//                   name="author"
//                   placeholder="Your Name"
//                   value={newReply.author}
//                   onChange={(e) => {
//                     setNewReply({ ...newReply, author: e.target.value });
//                   }}
//                   className="border border-gray-300 p-2 rounded mb-2 w-full"
//                 />
//                 <textarea
//                   name="content"
//                   placeholder="Your Reply"
//                   value={newReply.content}
//                   onChange={(e) => {
//                     setNewReply({ ...newReply, content: e.target.value });
//                   }}
//                   className="border border-gray-300 p-2 rounded mb-2 w-full"
//                 />
//                 <button
//                   onClick={() => handleAddReply(post.id)}
//                   className="bg-amber-600 text-white px-4 py-2 rounded"
//                 >
//                   Add Reply
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mt-8">
//         <h3 className="text-lg font-semibold mb-2">Add New Post</h3>
//         <input
//           type="text"
//           name="title"
//           placeholder="Post Title"
//           value={newPost.title}
//           onChange={handlePostInputChange}
//           className="border border-gray-300 p-2 rounded mb-2 w-full"
//         />
//         <input
//           type="text"
//           name="author"
//           placeholder="Your Name"
//           value={newPost.author}
//           onChange={handlePostInputChange}
//           className="border border-gray-300 p-2 rounded mb-2 w-full"
//         />
//         <textarea
//           name="content"
//           placeholder="Post Content"
//           value={newPost.content}
//           onChange={handlePostInputChange}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         />
//         <button
//           onClick={handleAddPost}
//           className="bg-amber-600 text-white px-4 py-2 rounded"
//         >
//           Add Post
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CommunityForum;
