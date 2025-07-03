
import { Shield, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const CommitmentSection = () => {
  const commitments = [
    {
      icon: Shield,
      title: "Uncompromising Safety",
      description: "Safety is our top priority. All our scaffolding systems undergo rigorous quality checks and comply with international safety standards. We provide comprehensive safety training and support to ensure zero-accident projects.",
      position: "left"
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      description: "Every project is unique, and so are our solutions. We work closely with our clients to understand their specific requirements and deliver customized scaffolding systems that perfectly fit their needs and budget.",
      position: "right"
    },
    {
      icon: Lightbulb,
      title: "Innovative & Reliable",
      description: "We stay ahead of industry trends by incorporating the latest technologies and innovations in our scaffolding systems. Our reliable equipment and experienced team ensure your project stays on schedule.",
      position: "left"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-primary">Commitment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing exceptional scaffolding solutions that exceed expectations and deliver results.
          </p>
        </div>

        {/* Zigzag Layout */}
        <div className="space-y-16">
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon;
            const isLeft = commitment.position === "left";
            
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isLeft ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${!isLeft ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {commitment.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {commitment.description}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
                      Learn More
                    </button>
                    <Link to="/contact" className="text-primary border border-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 font-medium">
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`relative ${!isLeft ? "lg:col-start-1" : ""}`}>
                  <div className="relative">
                    {/* Main Image/Visual */}
                    <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center animate-float">
                        <IconComponent className="w-16 h-16 text-primary" />
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full" />
                    
                    {/* Stats or Additional Info */}
                    <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
