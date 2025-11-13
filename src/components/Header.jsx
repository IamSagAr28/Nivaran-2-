import React from 'react';
import { ShoppingBag, Phone, Mail, MapPin, Menu, Search, User, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-[#a3b18a]/30">
      {/* Top Navigation Bar */}
      <div className="bg-[#3a5a40] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@nivarn.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Free shipping on orders above ₹999</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-8 w-8 text-[#3a5a40]" />
            <h1 className="text-2xl font-bold text-[#3a5a40]">Nivarn</h1>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[#3a5a40] hover:text-[#588157] transition-colors font-medium">Home</a>
            <div className="relative group">
              <a href="#" className="text-[#3a5a40] hover:text-[#588157] transition-colors font-medium">Products</a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#a3b18a]/30 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-[#3a5a40] hover:bg-[#dad7cd] transition-colors">Eco-Friendly Bags</a>
                <a href="#" className="block px-4 py-2 text-[#3a5a40] hover:bg-[#dad7cd] transition-colors">Sustainable Notebooks</a>
                <a href="#" className="block px-4 py-2 text-[#3a5a40] hover:bg-[#dad7cd] transition-colors">Green Home Decor</a>
                <a href="#" className="block px-4 py-2 text-[#3a5a40] hover:bg-[#dad7cd] transition-colors">Bamboo Accessories</a>
              </div>
            </div>
            <a href="#" className="text-[#3a5a40] hover:text-[#588157] transition-colors font-medium">About</a>
            <a href="#" className="text-[#3a5a40] hover:text-[#588157] transition-colors font-medium">Sustainability</a>
            <a href="#" className="text-[#3a5a40] hover:text-[#588157] transition-colors font-medium">Contact</a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="h-5 w-5 text-[#3a5a40] cursor-pointer hover:text-[#588157] transition-colors" />
            </div>
            <div className="relative">
              <User className="h-5 w-5 text-[#3a5a40] cursor-pointer hover:text-[#588157] transition-colors" />
            </div>
            <div className="relative">
              <ShoppingCart className="h-5 w-5 text-[#3a5a40] cursor-pointer hover:text-[#588157] transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#588157] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-[#3a5a40]" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Icons Strip */}
      <div className="border-t border-[#a3b18a]/30 bg-[#dad7cd]/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center gap-8 overflow-x-auto">
            {[
              {
                name: "Bags & Pouches",
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center"
              },
              {
                name: "Notebooks",
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&crop=center"
              },
              {
                name: "Home Decor",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center"
              },
              {
                name: "Accessories",
                image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center"
              },
              {
                name: "Gift Sets",
                image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop&crop=center"
              },
              {
                name: "Corporate Gifts",
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&crop=center"
              },
              {
                name: "Stationery",
                image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center"
              },
              {
                name: "Wallets",
                image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&crop=center"
              }
            ].map((category) => (
              <a
                key={category.name}
                href="#"
                className="flex flex-col items-center gap-2 min-w-[80px] text-[#344e41] hover:text-[#588157] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#a3b18a]/40 group-hover:bg-[#588157] rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 shadow-sm">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-6 h-6 bg-[#588157] group-hover:bg-white rounded transition-colors"></div>';
                    }}
                  />
                </div>
                <span className="text-xs text-center">{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;