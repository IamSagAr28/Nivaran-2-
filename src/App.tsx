import Header from './components/Header.jsx'
import { HeroSlideshow } from "./components/HeroSlideshow.jsx";
import { FeatureIcons } from "./components/FeatureIcons";
import { CategoryShowcase } from "./components/CategoryShowcase";
import { ProductGrid } from "./components/ProductGrid";
import { InfoBlocks } from "./components/InfoBlocks";
import { MembershipPlans } from "./components/MembershipPlans";
import { SplitContentSection } from "./components/SplitContentSection";
import { FeaturedBanner } from "./components/FeaturedBanner";
import { Testimonials } from "./components/Testimonials";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Navigation */}
      <Header />

      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Feature Icons */}
      <FeatureIcons />

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Product Grid Section 1 */}
      <ProductGrid 
        title="Featured Collection" 
        subtitle="Explore our handpicked selection of sustainable products"
        columns={5} 
        itemCount={10} 
      />

      {/* Info Blocks */}
      <InfoBlocks />

      {/* Membership Plans */}
      <MembershipPlans />

      {/* Product Grid Section 2 */}
      <ProductGrid 
        title="Best Sellers" 
        subtitle="Our most loved eco-friendly products"
        columns={4} 
        itemCount={8} 
      />

      {/* Split Content Section */}
      <SplitContentSection />

      {/* Featured Banner */}
      <FeaturedBanner />

      {/* Product Grid Section 3 */}
      <ProductGrid 
        title="New Arrivals" 
        subtitle="Fresh designs, same sustainable values"
        columns={5} 
        itemCount={10} 
      />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
