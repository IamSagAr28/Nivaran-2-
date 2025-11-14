import { useState, useEffect } from 'react';

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1588766381125-c29bced9d2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cGN5Y2xlZCUyMGNyYWZ0cyUyMGhhbmRtYWRlfGVufDF8fHx8MTc2MzAzMTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Sustainable Living",
      title: "Transform Waste into",
      highlight: "Wonder",
      description: "We are a social impact startup working in pooja waste disposal management and production of upcycled handicrafts.",
      primaryCTA: "Shop Now",
      secondaryCTA: "Learn More"
    },
    {
      image: "https://images.unsplash.com/photo-1681418660057-3210f48689d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjMwMzE4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Cultural Preservation",
      title: "Revolutionizing Pooja",
      highlight: "Waste Management",
      description: "Transforming traditional practices into opportunities for positive social and environmental impact.",
      primaryCTA: "Explore Collection",
      secondaryCTA: "Our Story"
    },
    {
      image: "https://images.unsplash.com/photo-1686946112728-5c4ad72aad55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHByb2R1Y3RzJTIwZmxhdCUyMGxheXxlbnwxfHx8fDE3NjMwMzE4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Circular Economy",
      title: "Building a Healthier",
      highlight: "Planet",
      description: "Creating a circular economy where waste is reimagined as a valuable resource for sustainable living.",
      primaryCTA: "Get Started",
      secondaryCTA: "Join As Volunteer"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section style={{
      width: '100%',
      height: '600px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 0.7s ease-in-out',
            transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
          }}
        />
      ))}

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, rgba(52, 78, 65, 0.4), rgba(58, 90, 64, 0.5))',
        zIndex: 1
      }} />

      {/* Content */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          width: '100%'
        }}>
          <div style={{ maxWidth: '672px' }}>
            {/* Tag */}
            <div 
              key={`tag-${currentSlide}`}
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                backgroundColor: '#a3b18a',
                color: '#344e41',
                borderRadius: '9999px',
                fontSize: '14px',
                marginBottom: '24px',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 0.6s ease-out 0s forwards'
              }}
            >
              {currentSlideData.tag}
            </div>

            {/* Title */}
            <h1 
              key={`title-${currentSlide}`}
              style={{
                fontSize: '48px',
                lineHeight: '1.2',
                fontWeight: '600',
                margin: '0 0 24px 0',
                color: 'white',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 0.6s ease-out 0.1s forwards'
              }}
            >
              {currentSlideData.title}{' '}
              <span style={{ color: '#a3b18a' }}>{currentSlideData.highlight}</span>
            </h1>

            {/* Description */}
            <p 
              key={`desc-${currentSlide}`}
              style={{
                fontSize: '18px',
                color: '#dad7cd',
                marginBottom: '32px',
                lineHeight: '1.6',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 0.6s ease-out 0.2s forwards'
              }}
            >
              {currentSlideData.description}
            </p>

            {/* Buttons */}
            <div 
              key={`cta-${currentSlide}`}
              style={{ 
                display: 'flex', 
                gap: '16px', 
                flexWrap: 'wrap',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 0.6s ease-out 0.3s forwards'
              }}
            >
              <button style={{
                padding: '12px 32px',
                backgroundColor: '#588157',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#a3b18a';
                e.target.style.color = '#344e41';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#588157';
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1)';
              }}>
                {currentSlideData.primaryCTA}
              </button>
              <button style={{
                padding: '12px 32px',
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#3a5a40';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}>
                {currentSlideData.secondaryCTA}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '48px',
          height: '48px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          color: '#3a5a40',
          zIndex: 3,
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        &#8249;
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '48px',
          height: '48px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          color: '#3a5a40',
          zIndex: 3,
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        &#8250;
      </button>

      {/* Dot Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 3
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: index === currentSlide ? '32px' : '12px',
              height: '12px',
              backgroundColor: index === currentSlide ? '#a3b18a' : 'rgba(255, 255, 255, 0.7)',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              if (index !== currentSlide) {
                e.target.style.backgroundColor = 'white';
              }
            }}
            onMouseOut={(e) => {
              if (index !== currentSlide) {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}