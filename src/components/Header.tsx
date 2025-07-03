import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Clock, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Close on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsEventDropdownOpen(false);
    setActiveSubDropdown(null);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsEventDropdownOpen(false);
        setActiveSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Event",
      path: "#",
      dropdown: [
        {
          name: "Corporate Events",
          subItems: ["Conference Staging", "Product Launches"]
        },
        {
          name: "Social Events",
          subItems: ["Wedding Stages", "Cultural Programs"]
        }
      ]
    },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91 9958273993</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>eventsonscaffold@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>Mon-Sat: 9AM-6PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">EVENTS ON</h1>
              <p className="text-sm text-gray-600">SCAFFOLD</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div ref={dropdownRef}>
                    {/* Main Dropdown Toggle */}
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium"
                      onClick={() => setIsEventDropdownOpen(!isEventDropdownOpen)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown Panel */}
                    {isEventDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg border z-50">
                        {item.dropdown.map((dropdownItem, index) => (
                          <div
                            key={index}
                            className="relative"
                            onMouseEnter={() => {
                              if (closeTimeout.current) clearTimeout(closeTimeout.current);
                              setActiveSubDropdown(dropdownItem.name);
                            }}
                            onMouseLeave={() => {
                              closeTimeout.current = setTimeout(() => setActiveSubDropdown(null), 200);
                            }}
                          >
                            <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary border-b last:border-none">
                              {dropdownItem.name}
                            </button>

                            {/* Submenu */}
                            {activeSubDropdown === dropdownItem.name && (
                              <div
                                className="absolute top-0 left-full ml-2 w-48 bg-white shadow-xl rounded-lg border z-50"
                                onMouseEnter={() => {
                                  if (closeTimeout.current) clearTimeout(closeTimeout.current);
                                }}
                                onMouseLeave={() => {
                                  closeTimeout.current = setTimeout(() => setActiveSubDropdown(null), 200);
                                }}
                              >
                                {dropdownItem.subItems.map((subItem, subIndex) => (
                                  <button
                                    key={subIndex}
                                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary border-b last:border-none"
                                  >
                                    {subItem}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                      location.pathname === item.path ? "text-primary" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-[#5d5d5d] transition-colors font-medium"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
