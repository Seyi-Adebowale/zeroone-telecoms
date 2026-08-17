import { useRef } from 'react'
import { REVIEWS, averageReviewRating } from '../data/reviews.js'
import './ReviewsCarousel.css'

function Stars({ rating }) {
    return (
        <span className="reviews-carousel__stars" aria-label={`${rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((n) => (
                <i
                    key={n}
                    className={n <= rating ? 'fa-solid fa-star' : 'fa-regular fa-star'}
                />
            ))}
        </span>
    )
}

function ReviewsCarousel() {
    const trackRef = useRef(null)
    const average = averageReviewRating()

    const scrollByCard = (direction) => {
        const track = trackRef.current
        if (!track) return
        const card = track.querySelector('.review-card')
        const distance = card ? card.offsetWidth + 20 : 320
        track.scrollBy({ left: direction * distance, behavior: 'smooth' })
    }

    return (
        <section className="reviews-carousel">
            <div className="reviews-carousel__header">
                <div>
                    <h2>What Our Customers Say</h2>
                    <div className="reviews-carousel__summary">
                        <Stars rating={Math.round(average)} />
                        <span>
                            {average.toFixed(1)} out of 5 · {REVIEWS.length} reviews
                        </span>
                    </div>
                </div>

                <div className="reviews-carousel__arrows">
                    <button
                        type="button"
                        onClick={() => scrollByCard(-1)}
                        aria-label="Previous reviews"
                    >
                        <i className="fa-solid fa-chevron-left" />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollByCard(1)}
                        aria-label="Next reviews"
                    >
                        <i className="fa-solid fa-chevron-right" />
                    </button>
                </div>
            </div>

            <div className="reviews-carousel__track" ref={trackRef}>
                {REVIEWS.map((r) => (
                    <div className="review-card" key={r.id}>
                        <div className="review-card__head">
                            <Stars rating={r.rating} />
                            <span className="review-card__date">{r.date}</span>
                        </div>
                        <p className="review-card__text">{r.text}</p>
                        <p className="review-card__name">{r.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ReviewsCarousel
