import React, { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaUser, FaClock, FaThumbtack, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import Header from "../components/Header";
import Footer from "../components/Footer";

const forumCategories = [
  { id: 1, name: 'General Discussion', icon: '🐝' },
  { id: 2, name: 'Beekeeping Tips', icon: '🍯' },
  { id: 3, name: 'Equipment & Tools', icon: '🧰' },
  { id: 4, name: 'Honey Production', icon: '🥄' },
  { id: 5, name: 'Health & Diseases', icon: '🩺' },
];

const initialPosts = [
  {
    id: 1,
    title: 'Welcome to the Bee Wise Community!',
    description: 'Introduce yourself and get to know the community.',
    author: 'Admin',
    date: '2024-03-01',
    category: 1,
    replies: [],
    views: 230,
    isPinned: true,
  },
  // Add other initial posts here
];

const ReplyForm = ({ onSubmit, initialContent = '', onCancel }) => {
  const [content, setContent] = useState(initialContent);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        className="w-full p-2 border border-goldL rounded"
        placeholder="Type your reply..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-goldD text-white rounded">Reply</button>
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="ml-2 px-4 py-2 bg-gray-500 text-white rounded"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

const ForumPost = ({ post, onReply, onUpdatePost, onDeletePost, onUpdateReply, onDeleteReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [editingPost, setEditingPost] = useState(false);
  const [editingReply, setEditingReply] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [replyToReply, setReplyToReply] = useState(null);

  const handleReplySubmit = (content) => {
    onReply(post.id, content, replyToReply);
    setReplyContent('');
    setReplyToReply(null);
    setShowReplyForm(false);
  };

  const handleUpdatePost = () => {
    onUpdatePost(post.id, replyContent, post.description, post.category);
    setReplyContent('');
    setEditingPost(false);
  };

  const handleUpdateReply = (replyId) => {
    onUpdateReply(post.id, replyId, replyContent);
    setReplyContent('');
    setEditingReply(null);
  };

  const renderReplies = (replies, parentId = null) => {
    return replies
      .filter(reply => reply.parentId === parentId)
      .map((reply) => (
        <div key={reply.id} className="ml-6 mt-2 border-l-2 border-goldL pl-4">
          {editingReply === reply.id ? (
            <ReplyForm
              initialContent={reply.content}
              onSubmit={(content) => handleUpdateReply(reply.id)}
              onCancel={() => setEditingReply(null)}
            />
          ) : (
            <>
              <div className="text-sm text-gray-600">{reply.author}</div>
              <div>{reply.content}</div>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => {
                    setReplyContent(reply.content);
                    setEditingReply(reply.id);
                  }}
                  className="text-sm text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteReply(post.id, reply.id)}
                  className="text-sm text-red-500"
                >
                  Delete
                </button>
                <button
                  onClick={() => setReplyToReply(reply.id)}
                  className="text-sm text-blue-500"
                >
                  Reply
                </button>
              </div>
              {replyToReply === reply.id && (
                <ReplyForm
                  onSubmit={handleReplySubmit}
                  onCancel={() => setReplyToReply(null)}
                />
              )}
              {renderReplies(replies, reply.id)}
            </>
          )}
        </div>
      ));
  };

  return (
    <motion.div
      className="bg-page rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      layout
    >
      {editingPost ? (
        <ReplyForm
          initialContent={post.title}
          onSubmit={handleUpdatePost}
          onCancel={() => setEditingPost(false)}
        />
      ) : (
        <>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-brown">
              {post.isPinned && <FaThumbtack className="inline-block mr-2 text-goldD" />}
              {post.title}
            </h3>
            <span className="text-sm text-gray-500">
              {forumCategories.find(cat => cat.id === post.category).icon}
            </span>
          </div>
          <p className="text-gray-800">{post.description}</p>
          <div className="flex justify-between text-sm text-brown">
            <span><FaUser className="inline-block mr-1" /> {post.author}</span>
            <span>
            <div><FaComments className="inline-block mr-1" /> {post.replies.length} replies</div>
            <div><FaClock className="inline-block mr-1" /> {post.date}</div>
            </span>
          </div>

        </>
      )}

      {/* Edit and Delete buttons for the post */}
      <div className="flex space-x-2 mt-2">
        <button
          onClick={() => setEditingPost(!editingPost)}
          className="text-sm text-blue-500 font-bold"
        >
          {editingPost ? 'Cancel' : 'Edit'}
        </button>
        <button
          onClick={() => onDeletePost(post.id)}
          className="text-sm text-red-500 font-bold"
        >
          Delete
        </button>
        <button
          onClick={() => setShowReplyForm(!showReplyForm)}
          className="text-sm text-goldD font-bold"
        >
          {showReplyForm ? 'Cancel' : 'Reply'}
        </button>
      </div>

      {/* Replies */}
      <div className="mt-4">
        {renderReplies(post.replies)}
      </div>

      {/* Reply form */}
      {showReplyForm && (
        <ReplyForm
          onSubmit={handleReplySubmit}
          onCancel={() => setShowReplyForm(false)}
        />
      )}
    </motion.div>
  );
};

const Community = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostDescription, setNewPostDescription] = useState('');
  const [newPostCategory, setNewPostCategory] = useState(null);

  useEffect(() => {
    const filtered = posts.filter(post =>
      (!selectedCategory || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm, posts]);

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    if (newPostTitle.trim() && newPostDescription.trim() && newPostCategory) {
      const newPost = {
        id: posts.length + 1,
        title: newPostTitle,
        description: newPostDescription,
        author: 'User', // Replace with the actual user's name
        date: new Date().toISOString().split('T')[0],
        category: newPostCategory,
        replies: [],
        views: 0,
        isPinned: false,
      };
      setPosts([...posts, newPost]);
      setNewPostTitle('');
      setNewPostDescription('');
      setNewPostCategory(null);
    }
  };

  const handleReply = (postId, replyContent, parentId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const newReply = { id: post.replies.length + 1, author: 'User', content: replyContent, parentId: parentId || null };
        return {
          ...post,
          replies: [...post.replies, newReply],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleUpdatePost = (postId, newTitle, newDescription, newCategory) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          title: newTitle,
          description: newDescription,
          category: newCategory,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleUpdateReply = (postId, replyId, content) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const updatedReplies = post.replies.map(reply => {
          if (reply.id === replyId) {
            return {
              ...reply,
              content,
            };
          }
          return reply;
        });
        return {
          ...post,
          replies: updatedReplies,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleDeleteReply = (postId, replyId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const updatedReplies = post.replies.filter(reply => reply.id !== replyId);
        return {
          ...post,
          replies: updatedReplies,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-3xl font-bold text-goldD mb-8 text-center ">Bee Wise Community</h1>

        {/* Search and Category Filters */}
        <div className=" items-center space-y-4 mb-4">
          <div className="mb-8">
           <div className="relative">
             <input
              type="text"
              placeholder="Search forum..."
              className="w-full p-3 pl-10 rounded-xl border-2 border-goldL focus:border-goldD focus:outline-none transition-colors duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-goldD" />
          </div>
        </div>
          <div className="mb-8">
           {/* <h2 className="text-2xl font-bold text-brown mb-4">Categories</h2> */}
           <div className="flex flex-wrap gap-6  text-center justify-center">
             {forumCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-4 rounded-xl text-white transition-colors duration-300 ${
                  selectedCategory === category.id ? 'bg-brown' : 'bg-goldL hover:bg-goldD'
                }`}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon} {category.name}
              </motion.button>
            ))}
          </div>
        </div>
        </div>

       

        {/* Posts */}
        <div>
          <h2 className="text-2xl font-bold text-brown mb-4">Posts</h2>
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <ForumPost
                key={post.id}
                post={post}
                onReply={handleReply}
                onUpdatePost={handleUpdatePost}
                onDeletePost={handleDeletePost}
                onUpdateReply={handleUpdateReply}
                onDeleteReply={handleDeleteReply}
              />
            ))}
          </AnimatePresence>
        </div>
        {/* New Post Form */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-brown mb-4">Create a New Post</h2>
          <form onSubmit={handleNewPostSubmit} className="bg-page rounded-lg p-4 shadow-md">
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Post Title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Post Description"
                value={newPostDescription}
                onChange={(e) => setNewPostDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={newPostCategory}
                onChange={(e) => setNewPostCategory(parseInt(e.target.value))}
              >
                <option value="">Select Category</option>
                {forumCategories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="w-full py-2 bg-goldD text-white rounded">Create Post</button>
          </form>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Community;
