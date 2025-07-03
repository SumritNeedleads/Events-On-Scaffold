
const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                About <span className="text-primary">Events On Scaffold</span>
              </h2>
              <h3 className="text-xl text-gray-600 mb-6">
                Your Trusted Partner for Safe & Reliable Scaffolding Solutions
              </h3>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                With years of experience in the scaffolding industry, Events On Scaffold has established 
                itself as Hyderabad's premier provider of scaffolding rental services. We specialize in 
                delivering safe, reliable, and innovative scaffolding solutions for both events and 
                construction projects.
              </p>
              
              <p>
                Our commitment to excellence is reflected in our comprehensive range of high-quality 
                scaffolding systems, including Aluminium, Cuplock, and Ringlock scaffolding. We understand 
                that every project is unique, which is why we offer tailored solutions that meet your 
                specific requirements while maintaining the highest safety standards.
              </p>
              
              <p>
                From corporate events and social gatherings to large-scale construction projects, we have 
                the expertise and equipment to support your vision. Our team of skilled professionals 
                ensures proper installation, maintenance, and timely delivery of all scaffolding systems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/homepage-about-us.jpg"
                alt="Professional scaffolding setup"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
