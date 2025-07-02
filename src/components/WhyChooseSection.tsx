
import { Award, Clock, Wrench } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Our scaffolding systems are certified and comply with all safety regulations. We maintain the highest standards of quality and safety in all our projects.",
      color: "bg-blue-500"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand the importance of project timelines. Our efficient logistics and planning ensure on-time delivery and setup of all scaffolding equipment.",
      color: "bg-green-500"
    },
    {
      icon: Wrench,
      title: "Expert Support",
      description: "Our experienced team provides comprehensive support from planning to dismantling. We offer technical guidance and maintenance throughout your project.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-primary">Us?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand out in the scaffolding industry through our commitment to quality, safety, and customer satisfaction.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 ${reason.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors duration-300">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Get in touch with our experts today and let us help you build something amazing with our premium scaffolding solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium">
              Get Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors duration-300 font-medium">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
