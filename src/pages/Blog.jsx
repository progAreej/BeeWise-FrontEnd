
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaSearch, FaTag, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const BlogContainer = styled.div`
  max-width: full;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f7e7cc;
  animation: ${fadeIn} 0.5s ease-out;
`;

const BlogHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: perspective(1000px) rotateX(5deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: perspective(1000px) rotateX(0deg);
  }
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
    transition: box-shadow 0.3s ease;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #DB8802;
    }
  }
  button {
    background-color: #DB8802;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #DB8802;
    }
  }
`;

const FeaturedPost = styled.div`
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
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
  transition: all 0.3s ease;
  animation: ${slideIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px) rotate(1deg);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
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
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
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
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #DB8802;
    color: white;
    transform: scale(1.1);
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  background-color:#DB8802;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #DB8802;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PageNumber = styled.span`
  font-size: 1rem;
  margin: 0 1rem;
`;

function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch blog posts, categories, and tags from your API
    // For now, we'll use dummy data
    setPosts(dummyPosts);
    setCategories(dummyCategories);
    setTags(dummyTags);
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  // Filter posts based on search query
  const filteredPosts = posts.filter(
    post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle tag click
  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    setCurrentPage(1); // Reset to the first page when a new search is made
  };

  return (
    <div className='bg-page'>
      <Header />
      <BlogContainer>
        <BlogHeader>
          <h1 style={{ color: '#DB8802', fontSize: '3rem', marginBottom: '1rem' }}>BeeWise Education Hub</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Expert advice, tips, and insights for starting your beekeeping business in Jordan</p>
        </BlogHeader>
        <SearchBar>
          <input 
            type="text" 
            placeholder="Search articles..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button><FaSearch /></button>
        </SearchBar>
        <MainContent>
          <BlogPosts>
            {currentPosts.length === 0 ? (
              <FeaturedPost>
                <img src="https://www.wkbn.com/wp-content/uploads/sites/48/2022/04/yellow-bee-on-a-flower.jpg" alt="Featured Post" />
                <div className="content">
                  <h2>No Posts Found</h2>
                  <p>Sorry, we couldn't find any posts matching your search criteria. Try searching for something else.</p>
                  <Link to="/blog">
                  <button style={{ backgroundColor: '#DB8802', color: 'white', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}>Go Back</button>
                  </Link>
                </div>
              </FeaturedPost>
            ) : (
              <PostGrid >
                {currentPosts.map((post, index) => (
                  <PostCard key={index} className="border border-goldD">
                    <img src={post.imageUrl} alt={post.title} className="border border-goldD" />
                    <div className="content">
                      <h3 className='text-goldL text-xl '>{post.title}</h3> <br />
                      <p>{post.excerpt}</p>
                      {/* <button style={{ backgroundColor: '#ffa500', color: 'white', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}>Read More</button> */}
                      {/* <Link
              to="/details"
              className="inline-block bg-goldD hover:bg-goldL text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </Link> */}
                    </div>
                  </PostCard>
                ))}
              </PostGrid>
            )}
            <PaginationContainer>
              <PaginationButton
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaChevronLeft />
              </PaginationButton>
              <PageNumber> {currentPage}</PageNumber>
              <PaginationButton
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastPost >= filteredPosts.length}
              >
                <FaChevronRight />
              </PaginationButton>
            </PaginationContainer>
          </BlogPosts>
          <Sidebar>
            <SidebarSection>
              <h3>Categories</h3>
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
            </SidebarSection>
            <SidebarSection>
              <h3>Tags</h3>
              <div>
                {tags.map((tag, index) => (
                  <Tag key={index} onClick={() => handleTagClick(tag)}><FaTag style={{ marginRight: '5px' }} />{tag}</Tag>
                ))}
              </div>
            </SidebarSection>
            <SidebarSection>
              <h3>Subscribe</h3>
              <p>Get the latest articles and updates right to your inbox.</p>
              <form>
                <input type="email" placeholder="Your email address" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '5px' }} />
                <button style={{ backgroundColor: '#DB8802', color: 'white', border: 'none', padding: '0.5rem 1rem', width: '100%', cursor: 'pointer' }}><FaEnvelope style={{ marginRight: '5px' }} />Subscribe</button>
              </form>
            </SidebarSection>
          </Sidebar>
        </MainContent>
      </BlogContainer>
      <Footer />
    </div>
  );
}

export default Blog;

// Dummy data for posts, categories, and tags
const dummyPosts = [
  {
    id: 1,
    title: "Getting Started with Beekeeping in Jordan",
    excerpt: "Learn the basics of beekeeping and how to set up your first hive in Jordan's unique climate.",
    imageUrl: "https://barakadestinations.com/wp-content/uploads/2022/02/Ali-Barqawi-Studios-Explore-Series-Travel-Adventure-Culture-Tourism-Baraka-Destinations-01-Um-Qais-04-Beekeeping-0064-1024x683.jpg",
    author: "Ahmed Mahmoud",
    date: "2024-07-15",
    category: "Beginners"
  },
  {
    id: 2,
    title: "The Best Flowers for Honey Production",
    excerpt: "Discover which flowers produce the most honey and how to cultivate them in your garden.",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5f7e43da4d593f18076b4d29/1608857748540-X0DJ9BZGC3H9SFITQWJQ/Bee+drinking+from+a+flower+it+likes.jpg",
    author: "Sarah Ali",
    date: "2024-07-10",
    category: "Honey Production"
  },
  {
    id: 3,
    title: "Managing Hive Pests and Diseases",
    excerpt: "Tips on identifying and controlling common hive pests and diseases.",
    imageUrl: "https://www.uaex.uada.edu/farm-ranch/special-programs/beekeeping/Zawislak_varroa-lifecycle_320x313.jpg",
    author: "Khaled Mansour",
    date: "2024-07-05",
    category: "Pest Control"
  },
  {
    id: 4,
    title: "How to Extract and Process Beeswax",
    excerpt: "A step-by-step guide to extracting and processing beeswax for various uses.",
    imageUrl: "https://ars.els-cdn.com/content/image/1-s2.0-S2352186421002546-fx1.jpg",
    author: "Laila Omar",
    date: "2024-06-30",
    category: "Beeswax"
  },
  {
    id: 5,
    title: "Understanding Bee Behavior",
    excerpt: "Learn about the fascinating behaviors of bees and how they communicate within the hive.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-DFmjE-2itCTovKFciicWg9L2xuPC07KkQ&s",
    author: "Omar Khaled",
    date: "2024-06-25",
    category: "Bee Behavior"
  },
  {
    id: 6,
    title: "Sustainable Beekeeping Practices",
    excerpt: "How to maintain a sustainable beekeeping operation that benefits both bees and the environment.",
    imageUrl: "https://dyfedpermaculturefarmtrust.org.uk/wp-content/uploads/2021/05/106596916_2907576076144614_3212188766339855342_n.jpg",
    author: "Maya Hussein",
    date: "2024-06-20",
    category: "Sustainability"
  },
  {
    id: 7,
    title: "The Role of the Queen Bee",
    excerpt: "An in-depth look at the queen bee's role in the hive and how to care for her.",
    imageUrl: "https://beefarm.co.in/wp-content/uploads/2023/06/Queen.webp",
    author: "Fatima Al-Saleh",
    date: "2024-06-15",
    category: "Queen Bee"
  },
  {
    id: 8,
    title: "Essential Beekeeping Equipment",
    excerpt: "A guide to the essential equipment every beekeeper needs to start their journey.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9yG8c53QltT8qGYrnpqtRMhPJkCwEZvK-g&s",
    author: "Hassan Ahmed",
    date: "2024-06-10",
    category: "Equipment"
  },
  {
    id: 9,
    title: "How to Harvest Honey",
    excerpt: "Step-by-step instructions for harvesting honey and preparing it for sale or personal use.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqBjcKlC7llRAar3Ouxqqod5k3zh5fW-W5w&s",
    author: "Noura Ali",
    date: "2024-06-05",
    category: "Honey Production"
  },
  {
    id: 10,
    title: "The Importance of Pollination",
    excerpt: "Explore the crucial role of bees in pollination and the impact on our food supply.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEA3xbV7nzOzLnPga1ZLoGBGxSlzme90EbA&s",
    author: "Zainab Mahmoud",
    date: "2024-06-01",
    category: "Pollination"
  },
  {
    id: 11,
    title: "Winterizing Your Hives",
    excerpt: "How to prepare your hives for winter and ensure your bees survive the cold months.",
    imageUrl: "https://backyardhive.com/cdn/shop/products/Cozy-Cover-insulation-winterizing-BackYardHive_600x.jpg?v=1570149140",
    author: "Ali Jaber",
    date: "2024-05-28",
    category: "Hive Management"
  },
  {
    id: 12,
    title: "Creating a Bee-Friendly Garden",
    excerpt: "Tips for designing a garden that attracts and supports bees and other pollinators.",
    imageUrl: "https://i0.wp.com/meonvalleybeekeepers.co.uk/wp-content/uploads/2019/03/Wildlife-garden-annotated-2-1.jpg?resize=2246%2C1303",
    author: "Dina Hassan",
    date: "2024-05-22",
    category: "Gardening"
  },
  {
    id: 13,
    title: "Understanding Propolis and Its Uses",
    excerpt: "Learn about propolis, its benefits, and how to harvest and use it.",
    imageUrl: "https://draxe.com/wp-content/uploads/2017/02/BeePropolisGraphic2-1.jpg",
    author: "Yasmin Nabil",
    date: "2024-05-18",
    category: "Propolis"
  },
  {
    id: 14,
    title: "The Lifecycle of a Bee",
    excerpt: "Explore the fascinating lifecycle of a bee from egg to adult.",
    imageUrl: "https://www.buzzaboutbees.net/images/honeybeelifecycle.jpg",
    author: "Mohammed Amin",
    date: "2024-05-12",
    category: "Bee Biology"
  },
  {
    id: 15,
    title: "The Benefits of Raw Honey",
    excerpt: "Discover the numerous health benefits of consuming raw honey.",
    imageUrl: "https://i.pinimg.com/originals/db/ee/a3/dbeea3b2331ac16f9d5d6b6eeb3a82fd.jpg",
    author: "Layla Jamal",
    date: "2024-05-05",
    category: "Health"
  },
  {
    id: 16,
    title: "Building a Community of Beekeepers",
    excerpt: "How to connect with other beekeepers and share knowledge and resources.",
    imageUrl: "https://www.culturalsurvival.org/sites/default/files/download%20%2810%29.png",
    author: "Hassan Youssef",
    date: "2024-04-28",
    category: "Community"
  },
  {
    id: 17,
    title: "Exploring Different Honey Varieties",
    excerpt: "A guide to the different types of honey and their unique flavors and uses.",
    imageUrl: "https://www.thedailymeal.com/img/gallery/the-ultimate-guide-to-different-types-of-honey/l-intro-1682348260.jpg",
    author: "Amira Said",
    date: "2024-04-22",
    category: "Honey Varieties"
  },
  {
    id: 18,
    title: "Starting a Beekeeping Business",
    excerpt: "Steps to start your own beekeeping business, from planning to marketing.",
    imageUrl: "https://i.ytimg.com/vi/8OB2CuAe5cA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFbnsw7FvckyJBHmiJ8tIyTnTvNw",
    author: "Zayd Omar",
    date: "2024-04-15",
    category: "Business"
  },
  {
    id: 19,
    title: "Harvesting Bee Pollen",
    excerpt: "How to harvest and use bee pollen for health and wellness.",
    imageUrl: "https://i.ebayimg.com/images/g/sHQAAOSweHpgA0I6/s-l1200.jpg",
    author: "Nour El-Din",
    date: "2024-04-10",
    category: "Bee Products"
  },
  {
    id: 20,
    title: "The Impact of Climate Change on Beekeeping",
    excerpt: "Understanding the effects of climate change on bee populations and beekeeping practices.",
    imageUrl: "https://www.researchgate.net/publication/339052985/figure/fig2/AS:960347754205222@1605976155993/Climate-change-impacts-on-bee-species-include-reducing-their-habitat-suitability-Bee.png",
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