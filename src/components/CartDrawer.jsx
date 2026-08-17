import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'
import './CartDrawer.css'

function CartDrawer() {
    const { items, isOpen, closeCart, setQty, removeItem, total } = useCart()

    return (
        <>
            <div
                className={isOpen ? 'cart-backdrop cart-backdrop--visible' : 'cart-backdrop'}
                onClick={closeCart}
            />

            <aside className={isOpen ? 'cart-drawer cart-drawer--open' : 'cart-drawer'}>
                <div className="cart-drawer__header">
                    <h2>Your Cart</h2>
                    <button
                        type="button"
                        className="cart-drawer__close"
                        onClick={closeCart}
                        aria-label="Close cart"
                    >
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className="cart-drawer__empty">
                        <i className="fa-solid fa-cart-shopping" />
                        <p>Your cart is empty.</p>
                    </div>
                ) : (
                    <>
                        <ul className="cart-drawer__list">
                            {items.map((item) => (
                                <li className="cart-drawer__item" key={item.id}>
                                    <div className="cart-drawer__item-icon">
                                        {item.image ? (
                                            <img src={item.image} alt={`${item.brand} ${item.name}`} />
                                        ) : (
                                            <i className={`fa-solid ${item.icon}`} />
                                        )}
                                    </div>

                                    <div className="cart-drawer__item-body">
                                        <p className="cart-drawer__item-name">
                                            {item.brand} {item.name}
                                        </p>
                                        <p className="cart-drawer__item-price">
                                            {formatPrice(item.price)}
                                        </p>

                                        <div className="cart-drawer__qty">
                                            <button
                                                type="button"
                                                onClick={() => setQty(item.id, item.qty - 1)}
                                                aria-label="Decrease quantity"
                                            >
                                                −
                                            </button>
                                            <span>{item.qty}</span>
                                            <button
                                                type="button"
                                                onClick={() => setQty(item.id, item.qty + 1)}
                                                aria-label="Increase quantity"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="cart-drawer__remove"
                                        onClick={() => removeItem(item.id)}
                                        aria-label={`Remove ${item.name}`}
                                    >
                                        <i className="fa-solid fa-trash" />
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="cart-drawer__footer">
                            <div className="cart-drawer__total">
                                <span>Subtotal</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                            <Link
                                to="/checkout"
                                className="cart-drawer__checkout"
                                onClick={closeCart}
                            >
                                Checkout
                            </Link>
                        </div>
                    </>
                )}
            </aside>
        </>
    )
}

export default CartDrawer
