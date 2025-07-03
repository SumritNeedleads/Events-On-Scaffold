
import { useState } from "react";

const ExpertiseSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const expertiseAreas = [
    {
      id: 1,
      title: "Aluminium Scaffolding",
      description: "Lightweight, corrosion-resistant scaffolding systems perfect for events and temporary structures. Easy to assemble and dismantle with excellent load-bearing capacity.",
      image: "/images/aluminium-scaffolding.png",
      features: ["Lightweight & Portable", "Weather Resistant", "Quick Assembly"]
    },
    {
      id: 2,
      title: "Cuplock Scaffolding",
      description: "Versatile and secure scaffolding system with unique cup and wedge locking mechanism. Ideal for complex structures and long-term construction projects.",
      image: "/images/cuplock-scaffolding.png",
      features: ["Secure Locking System", "High Load Capacity", "Versatile Design"]
    },
    {
      id: 3,
      title: "Ringlock Scaffolding",
      description: "Heavy-duty scaffolding system designed for high-rise construction and industrial applications. Provides maximum safety and stability for demanding projects.",
      image: "/images/ringlock-scaffolding.png",
      features: ["Heavy-Duty Construction", "Maximum Stability", "Industrial Grade"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in three main types of scaffolding systems, each designed to meet specific project requirements and safety standards.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => (
            <div
              key={area.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform ${
                hoveredCard === area.id ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredCard(area.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={area.image}
                  alt={area.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    hoveredCard === area.id ? "scale-110" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{area.title}</h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {area.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {area.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Help Choosing the Right Scaffolding System?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experts are here to help you select the perfect scaffolding solution for your project requirements.
            </p>
            <button className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-[#5d5d5d] transition-colors duration-300 font-medium">
              Consult Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
