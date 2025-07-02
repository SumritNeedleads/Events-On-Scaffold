
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { useState } from "react";
import { ExternalLink, Filter } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Events", "Construction", "Weddings", "Corporate", "Industrial"];
  
  const projects = [
    {
      id: 1,
      title: "Corporate Conference Setup",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Multi-level scaffolding for corporate event in Hyderabad"
    },
    {
      id: 2,
      title: "Wedding Stage Construction",
      category: "Weddings",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Elegant wedding stage with premium scaffolding support"
    },
    {
      id: 3,
      title: "Industrial Platform",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Heavy-duty industrial scaffolding for manufacturing facility"
    },
    {
      id: 4,
      title: "Concert Stage Setup",
      category: "Events",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Large-scale concert stage with advanced scaffolding system"
    },
    {
      id: 5,
      title: "Building Construction Support",
      category: "Construction",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Multi-story building construction scaffolding"
    },
    {
      id: 6,
      title: "Exhibition Booth",
      category: "Events",
      image: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Custom exhibition booth with modular scaffolding"
    },
    {
      id: 7,
      title: "High-rise Maintenance",
      category: "Construction",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "High-rise building maintenance scaffolding system"
    },
    {
      id: 8,
      title: "Product Launch Event",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Corporate product launch event staging"
    },
    {
      id: 9,
      title: "Traditional Wedding Setup",
      category: "Weddings",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Traditional Indian wedding mandap with scaffolding support"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Project <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects across various industries. 
              From elegant wedding stages to robust construction support systems.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2">
            <div className="flex items-center text-gray-600 mr-4">
              <Filter className="w-5 h-5 mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg hover:bg-white/30 transition-colors duration-300 flex items-center justify-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you create something amazing. Contact our team for a free consultation 
            and quote for your next scaffolding project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium">
              Get Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors duration-300 font-medium">
              View Our Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Gallery;
