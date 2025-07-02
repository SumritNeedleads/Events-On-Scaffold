
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const galleryImages = [
    {
      id: 1,
      src: "/images/20230121_000651.jpg",
      title: "Corporate Event Setup",
      category: "Events"
    },
    {
      id: 2,
      src: "/images/20230131_183232.jpg",
      title: "Wedding Stage Construction",
      category: "Weddings"
    },
    {
      id: 3,
      src: "/images/20230131_183311.jpg",
      title: "Industrial Scaffolding",
      category: "Construction"
    },
    {
      id: 4,
      src: "/images/20230131_214121.jpg",
      title: "Concert Stage Setup",
      category: "Entertainment"
    },
    {
      id: 5,
      src: "/images/20230929_195732.jpg",
      title: "Exhibition Platform",
      category: "Exhibitions"
    },
    {
      id: 6,
      src: "/images/20230929_201633.jpg",
      title: "Building Maintenance",
      category: "Maintenance"
    },
    {
      id: 7,
      src: "/images/20230929_214959.jpg",
      title: "High-rise Construction",
      category: "Construction"
    },
    {
      id: 8,
      src: "/images/20230929_215122.jpg",
      title: "Safety Installation",
      category: "Safety"
    },
    {
      id: 9,
      src: "/images/20231122_213828.jpg",
      title: "Safety Installation",
      category: "Safety"
    },
    {
      id: 10,
      src: "/images/20240103_154911.jpg",
      title: "Safety Installation",
      category: "Safety"
    }
  ];

  const imagesPerSlide = 5;
  const totalSlides = Math.ceil(galleryImages.length / imagesPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentImages = () => {
    const startIndex = currentSlide * imagesPerSlide;
    return galleryImages.slice(startIndex, startIndex + imagesPerSlide);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and see the quality of our scaffolding solutions in action.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Image Container */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {galleryImages
                      .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                      .map((image) => (
                        <div
                          key={image.id}
                          className="relative overflow-hidden rounded-lg shadow-md"
                        >
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-primary scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to See More of Our Work?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Visit our complete gallery to explore more projects and get inspiration for your next event or construction project.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium mr-4">
              View Full Gallery
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 font-medium">
              Request Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
