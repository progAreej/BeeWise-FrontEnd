import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch, FaTag, FaEnvelope } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f3e5;
`;

const BlogHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
`;

const MainContent = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BlogPosts = styled.main`
  flex: 3;
`;

const Sidebar = styled.aside`
  flex: 1;
`;

const SearchBar = styled.div`
  display: flex;
  margin-bottom: 2rem;
  input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
  }
  button {
    background-color: #ffa500;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }
`;

const FeaturedPost = styled.div`
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const PostCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .content {
    padding: 1rem;
  }
`;

const SidebarSection = styled.section`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
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
    <>
      <Header />
      <BlogContainer>
        <BlogHeader>
          <h1 style={{ color: '#ffa500', fontSize: '3rem', marginBottom: '1rem' }}>BeeWise Blog</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Expert advice, tips, and insights for beekeepers of all levels</p>
        </BlogHeader>
        <SearchBar>
          <input type="text" placeholder="Search blog posts..." />
          <button><FaSearch /></button>
        </SearchBar>
        <MainContent>
          <BlogPosts>
            <FeaturedPost>
              <img src={posts[0]?.imageUrl} alt={posts[0]?.title} />
              <h2>{posts[0]?.title}</h2>
              <p>{posts[0]?.excerpt}</p>
              <button style={{ backgroundColor: '#ffa500', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>Read More</button>
            </FeaturedPost>
            <h2 style={{ marginBottom: '1rem', color: '#333' }}>Latest Posts</h2>
            <PostGrid>
              {posts.slice(1).map(post => (
                <PostCard key={post.id}>
                  <img src={post.imageUrl} alt={post.title} />
                  <div className="content">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <small>{post.date} | By {post.author}</small>
                  </div>
                </PostCard>
              ))}
            </PostGrid>
          </BlogPosts>
          <Sidebar>
            <SidebarSection>
              <h3>Categories</h3>
              <ul>
                {categories.map(category => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </SidebarSection>
            <SidebarSection>
              <h3>Popular Tags</h3>
              {tags.map(tag => (
                <Tag key={tag}><FaTag /> {tag}</Tag>
              ))}
            </SidebarSection>
            <SidebarSection>
              <h3>Newsletter</h3>
              <p>Stay updated with our latest beekeeping tips and news!</p>
              <input type="email" placeholder="Your email" style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
              <button style={{ backgroundColor: '#ffa500', color: 'white', border: 'none', padding: '0.5rem 1rem', width: '100%', borderRadius: '5px', cursor: 'pointer' }}><FaEnvelope /> Subscribe</button>
            </SidebarSection>
          </Sidebar>
        </MainContent>
        <section style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#333', marginBottom: '1rem' }}>Join Our Beekeeping Community</h2>
          <p>Connect with fellow beekeepers, share your experiences, and learn from experts.</p>
          <button style={{ backgroundColor: '#ffa500', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', marginTop: '1rem' }}>Join Now</button>
        </section>
      </BlogContainer>
      <Footer />
    </>
  );
}

export default Blog;

// Dummy data (replace with API calls in production)
const dummyPosts = [
  {
    id: 1,
    title: "Getting Started with Beekeeping in Jordan",
    excerpt: "Learn the basics of beekeeping and how to set up your first hive in Jordan's unique climate.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/beekeeping_101.jpg?w=1200&fit=fill",
    author: "Ahmed Mahmoud",
    date: "2024-07-15",
    category: "Beginners"
  },
  {
    id: 2,
    title: "The Best Flowers for Honey Production",
    excerpt: "Discover which flowers produce the most honey and how to cultivate them in your garden.",
    imageUrl: "https://pw4kcdn-gvcydfg3b6hng4f7.z02.azurefd.net/media/bonlpgrh/2022_720x480headers_0006_small_bee-honeycomb.jpg?preset=fullWidth360",
    author: "Sarah Ali",
    date: "2024-07-10",
    category: "Honey Production"
  },
  {
    id: 3,
    title: "Managing Hive Pests and Diseases",
    excerpt: "Tips on identifying and controlling common hive pests and diseases.",
    imageUrl: "https://pw4kcdn-gvcydfg3b6hng4f7.z02.azurefd.net/media/bonlpgrh/2022_720x480headers_0006_small_bee-honeycomb.jpg?preset=fullWidth360",
    author: "Khaled Mansour",
    date: "2024-07-05",
    category: "Pest Control"
  },
  {
    id: 4,
    title: "How to Extract and Process Beeswax",
    excerpt: "A step-by-step guide to extracting and processing beeswax for various uses.",
    imageUrl: "https://pw4kcdn-gvcydfg3b6hng4f7.z02.azurefd.net/media/bonlpgrh/2022_720x480headers_0006_small_bee-honeycomb.jpg?preset=fullWidth360",
    author: "Laila Omar",
    date: "2024-06-30",
    category: "Beeswax"
  },
  {
    id: 5,
    title: "Understanding Bee Behavior",
    excerpt: "Learn about the fascinating behaviors of bees and how they communicate within the hive.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/bee_behavior.jpg?w=1200&fit=fill",
    author: "Omar Khaled",
    date: "2024-06-25",
    category: "Bee Behavior"
  },
  {
    id: 6,
    title: "Sustainable Beekeeping Practices",
    excerpt: "How to maintain a sustainable beekeeping operation that benefits both bees and the environment.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/sustainable_beekeeping.jpg?w=1200&fit=fill",
    author: "Maya Hussein",
    date: "2024-06-20",
    category: "Sustainability"
  },
  {
    id: 7,
    title: "The Role of the Queen Bee",
    excerpt: "An in-depth look at the queen bee's role in the hive and how to care for her.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/queen_bee.jpg?w=1200&fit=fill",
    author: "Fatima Al-Saleh",
    date: "2024-06-15",
    category: "Queen Bee"
  },
  {
    id: 8,
    title: "Essential Beekeeping Equipment",
    excerpt: "A guide to the essential equipment every beekeeper needs to start their journey.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/beekeeping_equipment.jpg?w=1200&fit=fill",
    author: "Hassan Ahmed",
    date: "2024-06-10",
    category: "Equipment"
  },
  {
    id: 9,
    title: "How to Harvest Honey",
    excerpt: "Step-by-step instructions for harvesting honey and preparing it for sale or personal use.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/honey_harvest.jpg?w=1200&fit=fill",
    author: "Noura Ali",
    date: "2024-06-05",
    category: "Honey Production"
  },
  {
    id: 10,
    title: "The Importance of Pollination",
    excerpt: "Explore the crucial role of bees in pollination and the impact on our food supply.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/pollination.jpg?w=1200&fit=fill",
    author: "Zainab Mahmoud",
    date: "2024-06-01",
    category: "Pollination"
  },
  {
    id: 11,
    title: "Winterizing Your Hives",
    excerpt: "How to prepare your hives for winter and ensure your bees survive the cold months.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/winterizing_hives.jpg?w=1200&fit=fill",
    author: "Ali Jaber",
    date: "2024-05-28",
    category: "Hive Management"
  },
  {
    id: 12,
    title: "Creating a Bee-Friendly Garden",
    excerpt: "Tips for designing a garden that attracts and supports bees and other pollinators.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/bee_friendly_garden.jpg?w=1200&fit=fill",
    author: "Dina Hassan",
    date: "2024-05-22",
    category: "Gardening"
  },
  {
    id: 13,
    title: "Understanding Propolis and Its Uses",
    excerpt: "Learn about propolis, its benefits, and how to harvest and use it.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/propolis.jpg?w=1200&fit=fill",
    author: "Yasmin Nabil",
    date: "2024-05-18",
    category: "Propolis"
  },
  {
    id: 14,
    title: "The Lifecycle of a Bee",
    excerpt: "Explore the fascinating lifecycle of a bee from egg to adult.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/bee_lifecycle.jpg?w=1200&fit=fill",
    author: "Mohammed Amin",
    date: "2024-05-12",
    category: "Bee Biology"
  },
  {
    id: 15,
    title: "The Benefits of Raw Honey",
    excerpt: "Discover the numerous health benefits of consuming raw honey.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/raw_honey.jpg?w=1200&fit=fill",
    author: "Layla Jamal",
    date: "2024-05-05",
    category: "Health"
  },
  {
    id: 16,
    title: "Building a Community of Beekeepers",
    excerpt: "How to connect with other beekeepers and share knowledge and resources.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/beekeeping_community.jpg?w=1200&fit=fill",
    author: "Hassan Youssef",
    date: "2024-04-28",
    category: "Community"
  },
  {
    id: 17,
    title: "Exploring Different Honey Varieties",
    excerpt: "A guide to the different types of honey and their unique flavors and uses.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/honey_varieties.jpg?w=1200&fit=fill",
    author: "Amira Said",
    date: "2024-04-22",
    category: "Honey Varieties"
  },
  {
    id: 18,
    title: "Starting a Beekeeping Business",
    excerpt: "Steps to start your own beekeeping business, from planning to marketing.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/beekeeping_business.jpg?w=1200&fit=fill",
    author: "Zayd Omar",
    date: "2024-04-15",
    category: "Business"
  },
  {
    id: 19,
    title: "Harvesting Bee Pollen",
    excerpt: "How to harvest and use bee pollen for health and wellness.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/bee_pollen.jpg?w=1200&fit=fill",
    author: "Nour El-Din",
    date: "2024-04-10",
    category: "Bee Products"
  },
  {
    id: 20,
    title: "The Impact of Climate Change on Beekeeping",
    excerpt: "Understanding the effects of climate change on bee populations and beekeeping practices.",
    imageUrl: "https://images.ctfassets.net/pujs1b1v0165/2gPkizvOnFfZqOWcSnFIhf/1c5050089cb009399d78aee835eab741/climate_change.jpg?w=1200&fit=fill",
    author: "Rania Fadel",
    date: "2024-04-05",
    category: "Climate Change"
  }
];


const dummyCategories = [
  "Beginners", "Hive Management", "Honey Production", "Pest Control", "Equipment"
];

const dummyTags = [
  "Bees", "Honey", "Hives", "Queen Bee", "Pollination", "Wax", "Propolis"
];