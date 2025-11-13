import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#344e41] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Footer Column 1 - Logo & Description */}
          <div className="col-span-2 space-y-4">
            <h3 className="text-2xl text-[#a3b18a]">Nivaran Upcyclers</h3>
            <p className="text-[#dad7cd]">
              Transforming waste into wonderful products. Join us in our mission to create a sustainable future through innovative upcycling and conscious living.
            </p>
            <div className="flex gap-3 pt-4">
              <a href="#" className="w-10 h-10 bg-[#3a5a40] hover:bg-[#588157] rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#3a5a40] hover:bg-[#588157] rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#3a5a40] hover:bg-[#588157] rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#3a5a40] hover:bg-[#588157] rounded-full flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Column 2 - Shop */}
          <div className="space-y-4">
            <h4 className="text-[#a3b18a] mb-4">Shop</h4>
            <div className="space-y-3">
              <a href="#" className="block text-[#dad7cd] hover:text-white transition-colors">All Products</a>
              <a href="#" className="block text-[#dad7cd] hover:text-white transition-colors">Bags & Pouches</a>
              <a href="#" className="block text-[#dad7cd] hover:text-white transition-colors">Notebooks</a>
              <a href="#" className="block text-[#dad7cd] hover:text-white transition-colors">Home Decor</a>
              <a href="#" className="block text-[#dad7cd] hover:text-white transition-colors">Gift Sets</a>
            </div>
          </div>

          {/* Footer Column 3 - About */}
          <div className="space-y-4">
            <h4 className="text-[#a3b18a] mb-4">About</h4>
            <div className="space-y-3">
              <a href="#" className="block text-[#dad7cd] hover:text-white transition-colors">Our Story</a>
              <a href="#" className="block text-[#dad7cd] hover:text-white transition-colors">Mission</a>
              <a href="#" className="block text-[#dad7cd] hover:text-white transition-colors">Workshops</a>
              <a href="#" className="block text-[#dad7cd] hover:text-white transition-colors">Sustainability</a>
              <a href="#" className="block text-[#dad7cd] hover:text-white transition-colors">Blog</a>
            </div>
          </div>

          {/* Footer Column 4 - Contact */}
          <div className="space-y-4">
            <h4 className="text-[#a3b18a] mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-[#dad7cd] hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@nivaran.in
              </a>
              <a href="#" className="flex items-center gap-2 text-[#dad7cd] hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +91 12345 67890
              </a>
              <div className="flex items-start gap-2 text-[#dad7cd]">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-[#3a5a40]">
          <div className="max-w-md">
            <h4 className="text-[#a3b18a] mb-4">Stay Updated</h4>
            <p className="text-[#dad7cd] text-sm mb-4">Subscribe to our newsletter for new products and exclusive offers</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-[#3a5a40] border border-[#588157] rounded focus:outline-none focus:border-[#a3b18a] text-white placeholder:text-[#dad7cd]/60"
              />
              <button className="px-6 py-2 bg-[#588157] hover:bg-[#a3b18a] rounded transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#3a5a40]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#dad7cd]">
            <p>© 2025 Nivaran Upcyclers. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
