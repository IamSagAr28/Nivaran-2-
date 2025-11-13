import { Search, ShoppingBag, User, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-[#a3b18a]/30">
      {/* Top Navigation Bar */}
      <div className="bg-[#3a5a40] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <span>Free Shipping on Orders Above ₹999</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#a3b18a] transition-colors">Track Order</a>
            <a href="#" className="hover:text-[#a3b18a] transition-colors">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - REPLACE WITH YOUR LOGO */}
          {/* Example: import logo from "figma:asset/YOUR_LOGO_HASH.png"; */}
          <div className="flex items-center">
            <h1 className="text-2xl text-[#3a5a40]">Nivaran Upcyclers</h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-[#344e41] hover:text-[#588157] transition-colors">Home</a>
            <a href="#" className="text-[#344e41] hover:text-[#588157] transition-colors">Products</a>
            <a href="#" className="text-[#344e41] hover:text-[#588157] transition-colors">About Us</a>
            <a href="#" className="text-[#344e41] hover:text-[#588157] transition-colors">Our Story</a>
            <a href="#" className="text-[#344e41] hover:text-[#588157] transition-colors">Workshops</a>
            <a href="#" className="text-[#344e41] hover:text-[#588157] transition-colors">Contact</a>
          </nav>

          {/* Action Icons */}
          <div className="flex gap-4 items-center">
            <button className="text-[#344e41] hover:text-[#588157] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-[#344e41] hover:text-[#588157] transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="text-[#344e41] hover:text-[#588157] transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="md:hidden text-[#344e41] hover:text-[#588157] transition-colors">
              <Menu className="w-5 h-5" />
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
}
