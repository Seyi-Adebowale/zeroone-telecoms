import { Link } from 'react-router-dom'
import { PRODUCTS, DEALS } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import HeroCarousel from '../components/HeroCarousel.jsx'
import ReviewsCarousel from '../components/ReviewsCarousel.jsx'
import earbudsOpen from '../assets/products/zeroone-buds-open-cutout.png'
import earbudsClosed from '../assets/products/zeroone-buds-closed-cutout.png'
import phoneHeroDesktop from '../assets/products/hero-phone-desktop.jpg'
import phoneHeroMobile from '../assets/products/hero-phone-mobile.jpg'
import laptopHeroDesktop from '../assets/products/hero-laptop-desktop.jpg'
import laptopHeroMobile from '../assets/products/hero-laptop-mobile.jpg'
import earbudsHeroDesktop from '../assets/products/hero-earbuds-desktop.jpg'
import earbudsHeroMobile from '../assets/products/hero-earbuds-mobile.jpg'
import deliveryBoxes from '../assets/delivery-boxes.png'
import repairBanner from '../assets/repair-banner.jpg'
import './Home.css'

const SLIDES = [
    {
        id: 'new',
        eyebrow: 'New Devices',
        heading: (
            <>
                BRAND NEW.
                <br />
                <span className="hero-carousel__blue">READY TO GO.</span>
            </>
        ),
        description:
            'The latest phones, laptops and tablets from Apple, Samsung, HP, Lenovo and Dell — all brand new, all in stock.',
        ctaText: 'Shop New Devices',
        ctaTo: '/shop?category=new-devices',
        desktopImage: phoneHeroDesktop,
        mobileImage: phoneHeroMobile,
        imageAlt: 'iPhone 16',
    },
    {
        id: 'pre-owned',
        eyebrow: 'Pre-Owned',
        heading: (
            <>
                LOOKS NEW.
                <br />
                <span className="hero-carousel__orange">COSTS LESS.</span>
            </>
        ),
        description:
            'Every pre-owned device is quality-checked and inspected before it reaches you — same reliability, better price.',
        ctaText: 'Shop Pre-Owned Devices',
        ctaTo: '/shop?category=pre-owned',
        desktopImage: laptopHeroDesktop,
        mobileImage: laptopHeroMobile,
        mobileObjectPosition: 'center 25%',
        imageAlt: 'HP laptop, pre-owned',
    },
    {
        id: 'accessories',
        eyebrow: 'Accessories',
        heading: (
            <>
                SMALL EXTRAS.
                <br />
                <span className="hero-carousel__blue">BIG DIFFERENCE.</span>
            </>
        ),
        description:
            'Earbuds, chargers, cases and more — the extras that make your everyday tech better.',
        ctaText: 'Shop Accessories',
        ctaTo: '/shop?category=accessories',
        desktopImage: earbudsHeroDesktop,
        mobileImage: earbudsHeroMobile,
        imageAlt: 'Wireless earbuds',
    },
]

const bestSellers = PRODUCTS.filter((p) => p.badge === 'Best Seller')
const newArrivals = PRODUCTS.filter((p) => p.badge === 'New Arrival')

function Home() {
    return (
        <main>
            <HeroCarousel slides={SLIDES} />

            <section className="earbuds-promo">
                <div className="earbuds-promo__dots" />

                <div className="earbuds-promo__content">
                    <h2>
                        PREMIUM SOUND.
                        <br />
                        <span className="earbuds-promo__blue">EVERY</span>{' '}
                        <span className="earbuds-promo__orange">MOMENT.</span>
                    </h2>

                    <div className="earbuds-promo__rule" />

                    <p className="earbuds-promo__description">
                        Sleek. Powerful. Reliable.
                        <br />
                        Your perfect everyday earbuds.
                    </p>

                    <div className="earbuds-promo__features">
                        <div className="earbuds-promo__feature">
                            <span className="earbuds-promo__feature-icon earbuds-promo__feature-icon--blue">
                                <i className="fa-solid fa-volume-high" />
                            </span>
                            Crystal Clear Sound
                        </div>
                        <div className="earbuds-promo__feature">
                            <span className="earbuds-promo__feature-icon earbuds-promo__feature-icon--orange">
                                <i className="fa-solid fa-battery-three-quarters" />
                            </span>
                            Long Lasting Battery
                        </div>
                        <div className="earbuds-promo__feature">
                            <span className="earbuds-promo__feature-icon earbuds-promo__feature-icon--blue">
                                <i className="fa-solid fa-link" />
                            </span>
                            Seamless Connection
                        </div>
                    </div>

                    <Link to="/product/zeroone-buds" className="earbuds-promo__btn">
                        Shop Earbuds Now <i className="fa-solid fa-arrow-right" />
                    </Link>
                </div>

                <div className="earbuds-promo__image">
                    <div className="earbuds-promo__stage" />
                    <div className="earbuds-promo__ring" />
                    <div className="earbuds-promo__platform" />

                    <img
                        src={earbudsClosed}
                        alt="ZeroOne Buds case, closed"
                        className="earbuds-promo__img earbuds-promo__img--closed"
                    />
                    <img
                        src={earbudsOpen}
                        alt="ZeroOne Buds case, open with earbuds"
                        className="earbuds-promo__img earbuds-promo__img--open"
                    />
                </div>
            </section>

            <section className="product-row">
                <div className="product-row__header">
                    <h2>Best Deals</h2>
                    <span className="product-row__tag">Limited time</span>
                </div>
                <div className="product-row__grid">
                    {DEALS.map((p) => (
                        <ProductCard product={p} key={p.id} />
                    ))}
                </div>
            </section>

            <section className="product-row">
                <div className="product-row__header">
                    <h2>Best Sellers</h2>
                    <Link to="/shop" className="product-row__header-link">
                        View All Products &rarr;
                    </Link>
                </div>
                <div className="product-row__grid">
                    {bestSellers.map((p) => (
                        <ProductCard product={p} key={p.id} hideBadge />
                    ))}
                </div>
                <Link to="/shop" className="product-row__view-all-mobile">
                    View All Products &rarr;
                </Link>
            </section>

            <section className="delivery-cta">
                <div className="delivery-cta__dots" />
                <div className="delivery-cta__glow" />

                <div className="delivery-cta__content">
                    <h2>
                        FREE DELIVERY.
                        <br />
                        <span className="delivery-cta__orange">EVERY ORDER.</span>
                    </h2>
                    <div className="delivery-cta__rule" />
                    <p>Free shipping across the UK, on every order.</p>

                    <Link to="/shop?category=new-devices" className="delivery-cta__btn">
                        Start Shopping <i className="fa-solid fa-arrow-right" />
                    </Link>
                </div>

                <div className="delivery-cta__image">
                    <img src={deliveryBoxes} alt="Delivery rider with a package" />
                </div>
            </section>

            <section className="product-row">
                <div className="product-row__header">
                    <h2>New Arrivals</h2>
                    <Link to="/shop" className="product-row__header-link">
                        View All Products &rarr;
                    </Link>
                </div>
                <div className="product-row__grid">
                    {newArrivals.map((p) => (
                        <ProductCard product={p} key={p.id} hideBadge />
                    ))}
                </div>
                <Link to="/shop" className="product-row__view-all-mobile">
                    View All Products &rarr;
                </Link>
            </section>

            <ReviewsCarousel />

            <section
                className="repairs-promo"
                style={{ backgroundImage: `url(${repairBanner})` }}
            >
                <div className="repairs-promo__overlay" />

                <div className="repairs-promo__content">
                    <h2>
                        We offer <span className="repairs-promo__orange">professional repair services</span> for
                        phones, tablets and laptops
                    </h2>

                    <Link to="/repairs" className="repairs-promo__btn">
                        Get Quick Quote <i className="fa-solid fa-arrow-right" />
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Home
