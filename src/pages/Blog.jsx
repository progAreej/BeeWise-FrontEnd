// // src/pages/Blog.js
// import React, { useState, useEffect } from 'react';

// function Blog() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch blog posts from an API or database
//     // For now, we'll use dummy data
//     setPosts([
//       { id: 1, title: 'Getting Started with Beekeeping', content: 'Lorem ipsum...', date: '2024-07-26' },
//       { id: 2, title: 'Best Practices for Honey Harvesting', content: 'Lorem ipsum...', date: '2024-07-25' },
//       { id: 3, title: 'Protecting Your Hives from Pests', content: 'Lorem ipsum...', date: '2024-07-24' },
//     ]);
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8">Beekeeping Blog</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {posts.map(post => (
//           <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
//               <p className="text-gray-600 mb-4">{post.date}</p>
//               <p className="text-gray-800">{post.content.substring(0, 150)}...</p>
//               <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Read More</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Blog;

// src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import FeaturedPost from '../components/blog/FeaturedPost';
import PostGrid from '../components/blog/PostGrid';
import CategoryList from '../components/blog/CategoryList';
import SearchBar from '../components/blog/SearchBar';
import NewsletterSignup from '../components/blog/NewsletterSignup';
import PopularTags from '../components/blog/PopularTags';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BlogHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const MainContent = styled.div`
  display: flex;
  gap: 2rem;
`;

const BlogPosts = styled.main`
  flex: 3;
`;

const Sidebar = styled.aside`
  flex: 1;
`;

function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Fetch blog posts, categories, and tags from your API
    // For now, we'll use dummy data
    setPosts(dummyPosts);
    setCategories(dummyCategories);
    setTags(dummyTags);
  }, []);

  return (
    <BlogContainer>
      <BlogHeader>
        <h1>BeeWise Blog</h1>
        <p>Expert advice, tips, and insights for beekeepers of all levels</p>
      </BlogHeader>
      <SearchBar />
      <MainContent>
        <BlogPosts>
          {/* <FeaturedPost post={posts[0]} /> */}
          <PostGrid posts={posts.slice(1)} />
        </BlogPosts>
        <Sidebar>
          <CategoryList categories={categories} />
          <PopularTags tags={tags} />
          <NewsletterSignup />
        </Sidebar>
      </MainContent>
    </BlogContainer>
  );
}

export default Blog;

// Dummy data (replace with API calls in production)
const dummyPosts = [
  {
    id: 1,
    title: "Getting Started with Beekeeping in Jordan",
    excerpt: "Learn the basics of beekeeping and how to set up your first hive in Jordan's unique climate.",
    imageUrl: "https://example.com/beekeeping-jordan.jpg",
    author: "Ahmed Mahmoud",
    date: "2024-07-15",
    category: "Beginners"
  },
  // Add more dummy posts...
];

const dummyCategories = [
  "Beginners", "Hive Management", "Honey Production", "Pest Control", "Equipment"
];

const dummyTags = [
  "Bees", "Honey", "Hives", "Queen Bee", "Pollination", "Wax", "Propolis"
];