import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Professional Scaffolding Solutions",
      subtitle: "Safe & Reliable Event Infrastructure",
      link: "/services/scaffolding"
    },
    {
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Premium Event Staging",
      subtitle: "Creating Memorable Experiences",
      link: "/services/event-staging"
    },
    {
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Construction Grade Support",
      subtitle: "Built for Safety & Durability",
      link: "/services/construction"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden mt-20">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="relative text-center px-4">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8">
                    {slide.subtitle}
                  </p>
                  <a href={slide.link}>
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg"
                    >
                      Read More
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div> */}

      {/* CTA Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-95 text-white py-4 z-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Rent Shuttering & Scaffolding for Your Next Project</h3>
            <p className="text-blue-200">Professional equipment rental services in Hyderabad</p>
          </div>
          <a href="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
            >
              Get a Quote
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
