import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HeroCarousel.css'

const AUTO_ADVANCE_MS = 5000

function HeroCarousel({ slides }) {
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        if (paused) return undefined
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length)
        }, AUTO_ADVANCE_MS)
        return () => clearInterval(timer)
    }, [paused, slides.length])

    const goTo = (i) => setIndex((i + slides.length) % slides.length)

    return (
        <section
            className="hero-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="hero-carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
                {slides.map((slide) => (
                    <div className="hero-carousel__slide" key={slide.id}>
                        <picture className="hero-carousel__bg">
                            <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                            <img
                                src={slide.desktopImage}
                                alt={slide.imageAlt}
                                style={
                                    slide.mobileObjectPosition
                                        ? { '--hero-bg-mobile-pos': slide.mobileObjectPosition }
                                        : undefined
                                }
                            />
                        </picture>

                        <div className="hero-carousel__overlay" />

                        <div className="hero-carousel__dots-bg" />

                        <div className="hero-carousel__inner">
                            <div className="hero-carousel__content">
                                <div className="hero-carousel__eyebrow">{slide.eyebrow}</div>
                                <h1>{slide.heading}</h1>
                                <div className="hero-carousel__rule" />
                                <p className="hero-carousel__description">{slide.description}</p>
                                <Link to={slide.ctaTo} className="hero-carousel__btn">
                                    {slide.ctaText} <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hero-carousel__dots">
                {slides.map((slide, i) => (
                    <button
                        type="button"
                        key={slide.id}
                        className={
                            i === index
                                ? 'hero-carousel__dot hero-carousel__dot--active'
                                : 'hero-carousel__dot'
                        }
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default HeroCarousel
