export function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#3a5a40] to-[#588157] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl">Join the Sustainable Revolution</h2>
          <p className="text-xl text-[#dad7cd]">
            Subscribe to our newsletter and get 10% off your first purchase. Stay updated with new collections, workshops, and sustainability tips.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-[#344e41] placeholder:text-[#3a5a40]/60"
            />
            <button className="px-10 py-3 bg-white text-[#3a5a40] hover:bg-[#dad7cd] rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}