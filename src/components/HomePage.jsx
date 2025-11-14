import React from 'react';
import Header from './Header.jsx';
import { HeroSlideshow } from "./HeroSlideshow.jsx";
import { FeatureIcons } from "./FeatureIcons";
import { CategoryShowcase } from "./CategoryShowcase";
import { ProductGrid } from "./ProductGrid";
import { InfoBlocks } from "./InfoBlocks";
import { MembershipPlans } from "./MembershipPlans";
import { SplitContentSection } from "./SplitContentSection";
import { FeaturedBanner } from "./FeaturedBanner";
import { Testimonials } from "./Testimonials";
import { CTABanner } from "./CTABanner";
import { Footer } from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Navigation */}
      <Header />

      {/* Hero Slideshow */}
      <section id="hero">
        <HeroSlideshow />
      </section>

      {/* Feature Icons */}
      <FeatureIcons />

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Product Grid Section 1 */}
      <section id="products">
        <ProductGrid 
          title="Featured Collection" 
          subtitle="Explore our handpicked selection of sustainable products"
          columns={5} 
          itemCount={10} 
        />
      </section>

      {/* Info Blocks */}
      <section id="about">
        <InfoBlocks />
      </section>

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
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* CTA Banner */}
      <CTABanner />

      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;