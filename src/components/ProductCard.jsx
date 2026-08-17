import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice, discountPercent, getConditionLabel } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import './ProductCard.css'

function ProductCard({ product, hideBadge }) {
    const { addItem } = useCart()
    const [justAdded, setJustAdded] = useState(false)

    const handleAdd = () => {
        addItem(product)
        setJustAdded(true)
        setTimeout(() => setJustAdded(false), 1400)
    }

    return (
        <div className="product-card">
            {product.originalPrice ? (
                <span className="product-card__badge product-card__badge--deal">
                    Save {discountPercent(product.price, product.originalPrice)}%
                </span>
            ) : (
                !hideBadge && product.badge && (
                    <span
                        className={
                            product.soldOut
                                ? 'product-card__badge product-card__badge--sold-out'
                                : 'product-card__badge'
                        }
                    >
                        {product.badge}
                    </span>
                )
            )}

            <Link to={`/product/${product.id}`} className="product-card__link">
                <div className="product-card__image">
                    {product.image ? (
                        <img src={product.image} alt={product.name} />
                    ) : (
                        <i className={`fa-solid ${product.icon}`} />
                    )}
                </div>

                <p className="product-card__brand">{getConditionLabel(product)}</p>
                <h3 className="product-card__name">
                    {product.brand} {product.name}
                </h3>
            </Link>

            {product.originalPrice ? (
                <p className="product-card__price-row">
                    <span className="product-card__price product-card__price--sale">
                        {formatPrice(product.price)}
                    </span>
                    <span className="product-card__price-original">
                        {formatPrice(product.originalPrice)}
                    </span>
                </p>
            ) : (
                <p className="product-card__price">{formatPrice(product.price)}</p>
            )}

            <button
                type="button"
                className={
                    justAdded
                        ? 'product-card__add product-card__add--added'
                        : 'product-card__add'
                }
                disabled={product.soldOut}
                onClick={handleAdd}
            >
                {product.soldOut ? (
                    'Sold Out'
                ) : justAdded ? (
                    <>
                        <i className="fa-solid fa-check" /> Added
                    </>
                ) : (
                    'Add to Cart'
                )}
            </button>
        </div>
    )
}

export default ProductCard
