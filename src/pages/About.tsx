
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Clock, label: "Projects Completed", value: "1000+" },
    { icon: Shield, label: "Safety Record", value: "100%" }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "15+ years experience in scaffolding industry"
    },
    {
      name: "Priya Sharma",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "Expert in project planning and execution"
    },
    {
      name: "Suresh Reddy",
      position: "Safety Supervisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "Certified safety expert with 12+ years experience"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-primary">Events On Scaffold</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the scaffolding industry in Hyderabad with innovative solutions, 
              uncompromising safety standards, and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At <strong>Events On Scaffold</strong>, we specialize in providing state-of-the-art scaffolding rental solutions across a wide spectrum of industries. Whether you're orchestrating a high-energy concert, hosting a corporate gala, managing interior and AC work, or overseeing large-scale construction, our robust, safe, and innovative scaffolding systems are designed to support your vision.
                </p>
                <p>
                 Whether you’re looking to transform an event space or streamline a large construction project, <strong>Events On Scaffold</strong> is your trusted partner for scaffolding rental solutions that combine strength, innovation, and impeccable safety standards.
                </p>
                <p>
                  Feel free to let me know which name resonates with you or if you’d like further customization or additional options!
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Our company history"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide safe, reliable, and innovative scaffolding solutions that enable 
                our clients to achieve their project goals while maintaining the highest 
                standards of safety and quality. We strive to be the preferred partner for 
                all scaffolding needs in the region.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading scaffolding rental company in South India, recognized for 
                our commitment to safety, innovation, and customer satisfaction. We aim to 
                set new industry standards and contribute to the growth of the construction 
                and events sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of professionals is dedicated to delivering exceptional 
              scaffolding solutions and customer service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-20 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default About;
