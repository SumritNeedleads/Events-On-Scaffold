
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        projectType: "",
        message: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["MN Scaffolding Services", "Hyderabad, Telangana", "India - 500001"],
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9958273993", "Available 24/7", "Emergency Support"],
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["eventsonscaffold@gmail.com", "Quick Response", "Professional Support"],
      color: "bg-orange-500"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9AM - 6PM", "Sunday: 10AM - 4PM", "Emergency: 24/7"],
      color: "bg-purple-500"
    }
  ];

  const projectTypes = [
    "Corporate Events",
    "Social Events",
    "Wedding Ceremonies",
    "Construction Support",
    "Industrial Projects",
    "Maintenance Work",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Get in touch with our experts for a free consultation 
              and personalized scaffolding solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours with a detailed quote.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-gray-700 font-medium mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium text-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Hyderabad, Telangana</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    MN Scaffolding Services, Hyderabad, Telangana
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-2" />
                    +91 8978438180
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-2" />
                    info@mnscaffolding.in
                  </p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Emergency Support</h3>
                <p className="text-red-700 mb-4">
                  Need immediate assistance? Our emergency support team is available 24/7 for urgent scaffolding requirements.
                </p>
                <button className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium">
                  Call Emergency Line
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our scaffolding services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">How quickly can you deliver scaffolding?</h4>
                <p className="text-gray-600">We typically deliver and set up scaffolding within 24-48 hours of confirmation, depending on project size and location.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Do you provide installation services?</h4>
                <p className="text-gray-600">Yes, we provide complete installation, maintenance, and dismantling services with our trained professionals.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">What safety certifications do you have?</h4>
                <p className="text-gray-600">All our equipment meets international safety standards and our team is certified in scaffolding safety protocols.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Can you handle large-scale projects?</h4>
                <p className="text-gray-600">Yes, we have experience with both small events and large industrial projects, with equipment capacity to match any requirement.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">What's included in your rental service?</h4>
                <p className="text-gray-600">Our service includes delivery, professional installation, regular maintenance checks, and safe dismantling after project completion.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Do you offer emergency support?</h4>
                <p className="text-gray-600">Yes, we provide 24/7 emergency support for urgent scaffolding needs and any safety concerns that may arise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Contact;
