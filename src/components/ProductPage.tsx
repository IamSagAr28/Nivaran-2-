import React, { useState, useEffect, useRef } from 'react';
import { Header } from './Header.tsx';
import { Footer } from './Footer';
import { useRouter } from '../utils/Router';
import '../styles/ProductPage.css';

export default function ProductPage() {
    const { navigateTo } = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('description');
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('Red');
    const [selectedSize, setSelectedSize] = useState('Small (12x12)');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isStickyBarVisible, setIsStickyBarVisible] = useState(false);

    const images = [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800',
        'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
        'https://images.unsplash.com/photo-1583847268991-ba48f0e69f7f?w=800'
    ];

    const actionButtonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (actionButtonsRef.current) {
                const rect = actionButtonsRef.current.getBoundingClientRect();
                if (rect.bottom < 0) {
                    setIsStickyBarVisible(true);
                } else {
                    setIsStickyBarVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeImage = (direction: number) => {
        let newIndex = currentImageIndex + direction;
        if (newIndex >= images.length) newIndex = 0;
        if (newIndex < 0) newIndex = images.length - 1;
        setCurrentImageIndex(newIndex);
    };

    const addToCart = () => {
        setIsCartOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeCart = () => {
        setIsCartOpen(false);
        document.body.style.overflow = '';
    };

    const handleQuantityChange = (delta: number) => {
        const newQty = quantity + delta;
        if (newQty >= 1) setQuantity(newQty);
    };

    return (
        <div className="product-page-container">
            <Header showCategories={false} />

            <main className="container">
                <div className="product-container">
                    {/* Product Image Gallery */}
                    <div className="product-gallery">
                        <div className="product-image-main">
                            <img 
                                id="mainImage" 
                                src={images[currentImageIndex]} 
                                alt="Eco-Friendly Cushion Cover" 
                                width="800" 
                                height="800" 
                                loading="eager" 
                            />
                            <div className="product-badge">New</div>
                            <div className="image-carousel-controls">
                                <button className="carousel-btn prev" onClick={() => changeImage(-1)} aria-label="Previous image">❮</button>
                                <button className="carousel-btn next" onClick={() => changeImage(1)} aria-label="Next image">❯</button>
                            </div>
                            <div className="carousel-dots" id="carouselDots">
                                {images.map((_, index) => (
                                    <button 
                                        key={index}
                                        className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="image-thumbnails">
                            {images.map((img, index) => (
                                <div 
                                    key={index}
                                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                    tabIndex={0}
                                    role="button"
                                    aria-label={`View image ${index + 1}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                    onKeyDown={(e) => { if(e.key === 'Enter') setCurrentImageIndex(index) }}
                                >
                                    <img src={img} alt={`View ${index + 1}`} width="150" height="150" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="product-info">
                        <p className="product-vendor">Nivaran Upcyclers</p>
                        <h1>Eco-Friendly Cushion Cover</h1>
                        
                        <div className="product-rating">
                            <span className="stars">★★★★★</span>
                            <span className="rating-value">4.5</span>
                            <button className="rating-count">(156 reviews)</button>
                        </div>

                        <div className="product-price">
                            <span className="price-current">Rs. 120.00</span>
                            <span className="price-original">Rs. 180.00</span>
                            <span className="price-discount">-33%</span>
                        </div>

                        <p className="product-description">
                            Experience eco-friendly comfort with our handmade cushion covers crafted from upcycled pooja waste cloth materials. Each piece is unique and adds a pop of color and patterns to your home while supporting sustainable living. Perfect for living rooms, bedrooms, or offices.
                        </p>

                        {/* Key Benefits */}
                        <div className="key-benefits">
                            <h3>Why Choose Our Cushion Cover?</h3>
                            <ul className="benefits-list">
                                <li><strong>Made from 100% Upcycled Materials</strong> – Reduces textile waste and supports sustainable practices</li>
                                <li><strong>Hand-Crafted Quality</strong> – Each piece is unique and made with traditional artisan techniques</li>
                                <li><strong>Durable & Washable</strong> – Built to last with easy machine wash care</li>
                                <li><strong>Eco-Friendly</strong> – Zero harmful chemicals, completely sustainable production</li>
                                <li><strong>Supports Artisans</strong> – Your purchase directly supports local artisan communities</li>
                            </ul>
                        </div>

                        {/* Product Options */}
                        <div className="product-options">
                            <div className="option-group">
                                <label className="option-label">
                                    <span>Color</span>
                                    <span style={{fontWeight: 400, color: 'var(--text-secondary)'}}>{selectedColor}</span>
                                </label>
                                <div className="option-values">
                                    {['Red', 'Red Patchwork', 'Lilac', 'Golden'].map(color => (
                                        <button 
                                            key={color}
                                            className={`option-value ${selectedColor === color ? 'active' : ''}`}
                                            onClick={() => setSelectedColor(color)}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="option-group">
                                <label className="option-label">
                                    <span>Size</span>
                                    <span style={{fontWeight: 400, color: 'var(--text-secondary)'}}>{selectedSize}</span>
                                </label>
                                <div className="option-values">
                                    {['Small (12x12)', 'Medium (16x16)', 'Large (20x20)'].map(size => (
                                        <button 
                                            key={size}
                                            className={`option-value ${selectedSize === size ? 'active' : ''}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div className="quantity-selector">
                            <label className="quantity-label">Quantity</label>
                            <div className="quantity-input">
                                <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>−</button>
                                <input 
                                    type="number" 
                                    value={quantity} 
                                    min="1" 
                                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                />
                                <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="action-buttons" ref={actionButtonsRef}>
                            <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
                            <button className="btn btn-secondary" onClick={() => alert('Proceeding to checkout...')}>Buy Now</button>
                        </div>

                        {/* Trust Signals */}
                        <div className="trust-signals-box">
                            <h3>Why Shop With Confidence</h3>
                            <div className="trust-signals-grid">
                                <div className="trust-signal-item">
                                    <div className="trust-signal-icon">🚚</div>
                                    <span className="trust-signal-text">Free Shipping on Orders Over Rs. 500</span>
                                </div>
                                <div className="trust-signal-item">
                                    <div className="trust-signal-icon">↩️</div>
                                    <span className="trust-signal-text">Easy Returns & Exchange Within 30 Days</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Footer */}
                        <div className="product-info-footer">
                            <div className="info-item">
                                <div className="info-icon">✓</div>
                                <span className="info-text">Free Shipping on Orders Over Rs. 500</span>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">✓</div>
                                <span className="info-text">Easy Returns & Exchange</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                <div className="product-tabs">
                    <div className="tab-buttons">
                        {['description', 'features', 'shipping'].map(tab => (
                            <button 
                                key={tab}
                                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                                style={{textTransform: 'capitalize'}}
                            >
                                {tab === 'features' ? 'Features & Benefits' : tab === 'shipping' ? 'Shipping & Returns' : tab}
                            </button>
                        ))}
                    </div>

                    <div id="description" className={`tab-content ${activeTab === 'description' ? 'active' : ''}`}>
                        <h3 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>Product Description</h3>
                        <p style={{color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '16px'}}>
                            Our Eco-Friendly Cushion Cover is more than just a home décor item – it's a statement about sustainability. Made from carefully selected upcycled pooja waste cloth materials, each cover is hand-crafted with attention to detail and quality.
                        </p>
                        <p style={{color: 'var(--text-secondary)', lineHeight: '1.8'}}>
                            Perfect for adding warmth and personality to any room, these covers are durable, washable, and designed to last. By choosing our cushion covers, you're supporting artisans and helping reduce textile waste in landfills.
                        </p>
                    </div>

                    <div id="features" className={`tab-content ${activeTab === 'features' ? 'active' : ''}`}>
                        <h3 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>Features & Benefits</h3>
                        <ul className="features-list">
                            <li>Made from 100% upcycled materials</li>
                            <li>Hand-crafted with traditional techniques</li>
                            <li>Completely washable and durable</li>
                            <li>Eco-friendly and sustainable</li>
                            <li>Unique patterns and colors</li>
                            <li>Supports artisan communities</li>
                        </ul>
                    </div>

                    <div id="shipping" className={`tab-content ${activeTab === 'shipping' ? 'active' : ''}`}>
                        <h3 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>Shipping & Returns</h3>
                        <p style={{color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '16px'}}>
                            <strong>Shipping:</strong> Free shipping on all orders! Your items will be carefully packaged and shipped within 2-3 business days.
                        </p>
                        <p style={{color: 'var(--text-secondary)', lineHeight: '1.8'}}>
                            <strong>Returns:</strong> Not satisfied? No problem! We offer easy returns within 30 days of purchase. Items must be unused and in original packaging.
                        </p>
                    </div>
                </div>

                {/* Related Products */}
                <section className="related-products">
                    <h2>You May Also Like</h2>
                    <div className="products-grid">
                        {[
                            { name: 'Bottle Cover', price: 'Rs. 80.00', img: 'https://images.unsplash.com/photo-1583847268991-ba48f0e69f7f?w=300' },
                            { name: 'File Cover', price: 'Rs. 100.00', img: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=300' },
                            { name: 'Coin Pouch', price: 'Rs. 50.00', img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300' },
                            { name: 'Wall Hanging', price: 'Rs. 950.00', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300' }
                        ].map((product, idx) => (
                            <div className="product-card" key={idx}>
                                <img src={product.img} alt={product.name} className="product-card-image" />
                                <div className="product-card-info">
                                    <p className="product-card-title">{product.name}</p>
                                    <p className="product-card-price">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Sticky Cart Bar */}
            <div className={`sticky-cart-bar ${isStickyBarVisible ? 'visible' : ''}`} id="stickyCartBar">
                <div className="sticky-product-info">
                    <img src={images[0]} alt="Product" className="sticky-product-img" />
                    <div className="sticky-product-details">
                        <h4>Eco-Friendly Cushion Cover</h4>
                        <p>Rs. 120.00</p>
                    </div>
                </div>
                <button className="btn btn-primary" style={{width: 'auto', padding: '12px 24px'}} onClick={addToCart}>Add to Cart</button>
            </div>

            {/* Cart Drawer */}
            <div className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`} onClick={closeCart}></div>
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <button className="close-cart" onClick={closeCart}>×</button>
                </div>
                <div className="cart-items">
                    {/* Cart Item Example */}
                    <div className="cart-item">
                        <img src={images[0]} alt="Product" className="cart-item-img" />
                        <div className="cart-item-details">
                            <h3 className="cart-item-title">Eco-Friendly Cushion Cover</h3>
                            <p className="cart-item-variant">Color: {selectedColor} / Size: {selectedSize}</p>
                            <div className="cart-item-controls">
                                <div className="quantity-input" style={{border: '1px solid #eee'}}>
                                    <button className="cart-qty-btn" onClick={() => handleQuantityChange(-1)}>−</button>
                                    <input type="text" value={quantity} readOnly style={{width: '30px', height: '24px', fontSize: '13px'}} />
                                    <button className="cart-qty-btn" onClick={() => handleQuantityChange(1)}>+</button>
                                </div>
                                <span className="cart-item-price">Rs. 120.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-footer">
                    <div className="cart-subtotal">
                        <span>Subtotal</span>
                        <span>Rs. {120 * quantity}.00</span>
                    </div>
                    <button className="checkout-btn" onClick={() => navigateTo('/cart')}>Proceed to Checkout</button>
                    <p style={{textAlign: 'center', fontSize: '12px', color: '#888', marginTop: '12px'}}>Shipping & taxes calculated at checkout</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
