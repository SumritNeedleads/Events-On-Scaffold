
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Essential Safety Guidelines for Scaffolding in Events",
      excerpt: "Learn about the critical safety measures and best practices when using scaffolding for event setups. Our comprehensive guide covers everything from planning to execution.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      author: "Rajesh Kumar",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Safety"
    },
    {
      id: 2,
      title: "Choosing the Right Scaffolding System for Your Project",
      excerpt: "Compare different types of scaffolding systems including Aluminium, Cuplock, and Ringlock. Understand which system works best for your specific project requirements.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      author: "Priya Sharma",
      date: "2025-01-10",
      readTime: "7 min read",
      category: "Guide"
    },
    {
      id: 3,
      title: "Wedding Stage Setup: Creating Memorable Moments",
      excerpt: "Discover how professional scaffolding can transform your wedding venue. From traditional mandaps to modern stage designs, we cover all aspects of wedding scaffolding.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      author: "Suresh Reddy",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Events"
    },
    {
      id: 4,
      title: "Cost-Effective Scaffolding Solutions for Construction",
      excerpt: "Learn how to optimize your construction budget with smart scaffolding choices. We share tips on rental vs purchase decisions and cost-saving strategies.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      author: "Rajesh Kumar",
      date: "2025-01-01",
      readTime: "8 min read",
      category: "Construction"
    },
    {
      id: 5,
      title: "Maintenance Tips for Long-term Scaffolding Projects",
      excerpt: "Essential maintenance practices to ensure your scaffolding remains safe and functional throughout extended project timelines. Preventive care saves money.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      author: "Priya Sharma",
      date: "2024-12-28",
      readTime: "4 min read",
      category: "Maintenance"
    },
    {
      id: 6,
      title: "Environmental Impact of Modern Scaffolding Systems",
      excerpt: "Explore how contemporary scaffolding solutions contribute to sustainable construction practices and reduce environmental footprint in the building industry.",
      image: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      author: "Suresh Reddy",
      date: "2024-12-25",
      readTime: "6 min read",
      category: "Sustainability"
    }
  ];

  const categories = ["All", "Safety", "Guide", "Events", "Construction", "Maintenance", "Sustainability"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Scaffolding <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and best practices in the scaffolding industry. 
              Expert insights from our experienced team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Article</h2>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium flex items-center space-x-2 w-fit">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Articles</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <button className="text-primary font-medium text-sm flex items-center space-x-1 hover:text-accent transition-colors duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest scaffolding tips, safety guidelines, 
            and industry updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Blog;
