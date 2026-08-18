import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'
import './CheckoutPage.css'

function CheckoutPage() {
    const { items, total } = useCart()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postcode, setPostcode] = useState('')

    if (items.length === 0) {
        return <Navigate to="/" replace />
    }

    return (
        <main className="checkout-page">
            <h1>Checkout</h1>

            <div className="checkout-page__layout">
                <form className="checkout-page__form" onSubmit={(e) => e.preventDefault()}>
                    <section className="checkout-page__section">
                        <h2>
                            <i className="fa-solid fa-user" /> Contact
                        </h2>
                        <div className="checkout-page__row-2">
                            <label className="checkout-page__field">
                                Full Name
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </label>
                            <label className="checkout-page__field">
                                Phone
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <label className="checkout-page__field">
                            Email
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                    </section>

                    <section className="checkout-page__section">
                        <h2>
                            <i className="fa-solid fa-location-dot" /> Delivery Address
                        </h2>
                        <label className="checkout-page__field">
                            Street Address
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </label>
                        <div className="checkout-page__row-2">
                            <label className="checkout-page__field">
                                City
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </label>
                            <label className="checkout-page__field">
                                Postcode
                                <input
                                    type="text"
                                    value={postcode}
                                    onChange={(e) => setPostcode(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                    </section>
                </form>

                <div className="checkout-page__summary">
                    <h2>Order Summary</h2>

                    <ul className="checkout-page__items">
                        {items.map((item) => (
                            <li className="checkout-page__item" key={item.id}>
                                <div className="checkout-page__item-icon">
                                    {item.image ? (
                                        <img src={item.image} alt={`${item.brand} ${item.name}`} />
                                    ) : (
                                        <i className={`fa-solid ${item.icon}`} />
                                    )}
                                </div>
                                <div className="checkout-page__item-body">
                                    <p className="checkout-page__item-name">
                                        {item.brand} {item.name}
                                    </p>
                                    <p className="checkout-page__item-qty">Qty: {item.qty}</p>
                                </div>
                                <p className="checkout-page__item-price">
                                    {formatPrice(item.price * item.qty)}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="checkout-page__totals">
                        <div className="checkout-page__totals-row">
                            <span>Subtotal</span>
                            <span>{formatPrice(total)}</span>
                        </div>
                        <div className="checkout-page__totals-row">
                            <span>Delivery</span>
                            <span className="checkout-page__free">Free</span>
                        </div>
                        <div className="checkout-page__totals-row checkout-page__totals-row--total">
                            <span>Total</span>
                            <span>{formatPrice(total)}</span>
                        </div>
                    </div>

                    <button type="button" className="checkout-page__submit">
                        <i className="fa-solid fa-lock" /> Pay Online
                    </button>
                </div>
            </div>
        </main>
    )
}

export default CheckoutPage
