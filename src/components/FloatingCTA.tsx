import { MessageCircle, Phone } from "lucide-react";

const FloatingCTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919958273993", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919958273993";
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col space-y-4 pointer-events-none">
      {/* WhatsApp Button */}
      <div className="relative group pointer-events-auto">
        {/* Ping Animation */}
        <span className="absolute top-0 left-0 w-14 h-14 rounded-full border-2 border-green-500 opacity-20 animate-ping pointer-events-none" />

        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center hover:animate-none z-[1]"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </button>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
          Chat on WhatsApp
        </div>
      </div>

      {/* Call Button */}
      <div className="relative group pointer-events-auto">
        {/* Ping Animation */}
        <span className="absolute top-0 left-0 w-14 h-14 rounded-full border-2 border-blue-500 opacity-20 animate-ping pointer-events-none" />

        <button
          onClick={handleCallClick}
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-[1]"
          title="Call Now"
        >
          <Phone className="w-7 h-7" />
        </button>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
          Call Now
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
