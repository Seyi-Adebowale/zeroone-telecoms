import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { PRODUCTS, formatPrice, discountPercent, getConditionLabel } from '../data/products.js'
import { getProductDescription, getProductSpecs, getProductReviews, averageRating, ratingBreakdown } from '../data/productDetails.js'
import { useCart } from '../context/CartContext.jsx'
import ProductCard from '../components/ProductCard.jsx'
import './ProductPage.css'

const BASE_TABS = ['Description', 'Specifications']

function Stars({ rating }) {
    return (
        <span className="stars" aria-label={`${rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((n) => (
                <i
                    key={n}
                    className={n <= Math.round(rating) ? 'fa-solid fa-star' : 'fa-regular fa-star'}
                />
            ))}
        </span>
    )
}

function ProductPage() {
    const { id } = useParams()
    const { addItem } = useCart()
    const [tab, setTab] = useState('Description')
    const [justAdded, setJustAdded] = useState(false)

    const product = PRODUCTS.find((p) => p.id === id)

    if (!product) {
        return <Navigate to="/" replace />
    }

    const reviews = getProductReviews(product)
    const rating = averageRating(reviews)
    const breakdown = ratingBreakdown(reviews)
    const specs = getProductSpecs(product)
    const tabs =
        reviews.length > 0 ? [...BASE_TABS, 'Reviews'] : BASE_TABS
    const related = PRODUCTS.filter(
        (p) => p.id !== product.id && p.deviceType === product.deviceType
    ).slice(0, 4)

    const handleAdd = () => {
        addItem(product)
        setJustAdded(true)
        setTimeout(() => setJustAdded(false), 1400)
    }

    return (
        <main className="product-page">
            <nav className="product-page__breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to={`/${product.category}`}>{product.brand}</Link>
                <span>/</span>
                <span>{product.name}</span>
            </nav>

            <section className="product-page__top">
                <div className={product.image ? 'product-page__image' : 'product-page__image product-page__image--icon'}>
                    {product.image ? (
                        <img src={product.image} alt={product.name} />
                    ) : (
                        <i className={`fa-solid ${product.icon}`} />
                    )}
                </div>

                <div className="product-page__info">
                    <p className="product-page__brand">{getConditionLabel(product)}</p>
                    <h1>{product.brand} {product.name}</h1>

                    <div className="product-page__rating">
                        <Stars rating={rating} />
                        <span>{rating.toFixed(1)} ({reviews.length} reviews)</span>
                    </div>

                    {product.originalPrice ? (
                        <div className="product-page__price-row">
                            <span className="product-page__price product-page__price--sale">
                                {formatPrice(product.price)}
                            </span>
                            <span className="product-page__price-original">
                                {formatPrice(product.originalPrice)}
                            </span>
                            <span className="product-page__save">
                                Save {discountPercent(product.price, product.originalPrice)}%
                            </span>
                        </div>
                    ) : (
                        <p className="product-page__price">{formatPrice(product.price)}</p>
                    )}

                    <p className="product-page__blurb">{getProductDescription(product)}</p>

                    <button
                        type="button"
                        className={
                            justAdded
                                ? 'product-page__add product-page__add--added'
                                : 'product-page__add'
                        }
                        disabled={product.soldOut}
                        onClick={handleAdd}
                    >
                        {product.soldOut ? 'Sold Out' : justAdded ? (
                            <><i className="fa-solid fa-check" /> Added to Cart</>
                        ) : (
                            <><i className="fa-solid fa-cart-shopping" /> Add to Cart</>
                        )}
                    </button>
                </div>
            </section>

            <section className="product-page__tabs">
                <div className="product-page__tab-list">
                    {tabs.map((t) => (
                        <button
                            type="button"
                            key={t}
                            className={
                                tab === t
                                    ? 'product-page__tab product-page__tab--active'
                                    : 'product-page__tab'
                            }
                            onClick={() => setTab(t)}
                        >
                            {t}
                            {t === 'Reviews' ? ` (${reviews.length})` : ''}
                        </button>
                    ))}
                </div>

                <div className="product-page__tab-panel">
                    {tab === 'Description' && <p>{getProductDescription(product)}</p>}

                    {tab === 'Specifications' && (
                        <table className="product-page__specs">
                            <tbody>
                                {specs.map(([label, value]) => (
                                    <tr key={label}>
                                        <th>{label}</th>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {tab === 'Reviews' && (
                        <div className="product-page__reviews">
                            <div className="product-page__reviews-summary">
                                <div className="product-page__reviews-score">
                                    <strong>{rating.toFixed(1)}</strong>
                                    <Stars rating={rating} />
                                    <span>{reviews.length} review{reviews.length === 1 ? '' : 's'}</span>
                                </div>

                                <div className="product-page__reviews-bars">
                                    {breakdown.map(({ star, count, pct }) => (
                                        <div className="product-page__reviews-bar-row" key={star}>
                                            <span>{star} star</span>
                                            <div className="product-page__reviews-bar">
                                                <div
                                                    className="product-page__reviews-bar-fill"
                                                    style={{ width: `${pct}%` }}
                                                />
                                            </div>
                                            <span>{count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="product-page__review-list">
                                {reviews.map((r, i) => (
                                    <div className="product-page__review" key={i}>
                                        <div className="product-page__review-avatar">
                                            {r.name.charAt(0)}
                                        </div>

                                        <div className="product-page__review-body">
                                            <div className="product-page__review-head">
                                                <strong>{r.name}</strong>
                                                <span className="product-page__review-verified">
                                                    <i className="fa-solid fa-circle-check" /> Verified Purchase
                                                </span>
                                            </div>
                                            <div className="product-page__review-meta">
                                                <Stars rating={r.rating} />
                                                <span>{r.date}</span>
                                            </div>
                                            <p>{r.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {related.length > 0 && (
                <section className="product-page__related">
                    <h2>You Might Also Like</h2>
                    <div className="product-page__related-grid">
                        {related.map((p) => (
                            <ProductCard product={p} key={p.id} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    )
}

export default ProductPage
