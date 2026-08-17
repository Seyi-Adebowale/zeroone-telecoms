import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { CATEGORIES } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import './Header.css'

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/shop?category=new-devices', label: 'New Devices', category: CATEGORIES.NEW },
    { to: '/shop?category=pre-owned', label: 'Pre-Owned', category: CATEGORIES.PRE_OWNED },
    { to: '/shop?category=accessories', label: 'Accessories', category: CATEGORIES.ACCESSORIES },
    { to: '/repairs', label: 'Repairs' },
]

function isLinkActive(link, pathname, searchParams) {
    if (link.category) {
        return pathname === '/shop' && searchParams.get('category') === link.category
    }
    if (link.to === '/') {
        return pathname === '/'
    }
    return pathname.startsWith(link.to)
}

function Header() {
    const { count, openCart } = useCart()
    const [query, setQuery] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const handleSearch = (e) => {
        e.preventDefault()
        if (!query.trim()) return
        navigate(`/search?q=${encodeURIComponent(query.trim())}`)
        setQuery('')
        setMenuOpen(false)
        setSearchOpen(false)
    }

    return (
        <>
            <header className="site-header">
                <div className="site-header__inner">
                    <Link to="/" className="site-header__logo">
                        <img src={logo} alt="ZeroOne Telecommunications" />
                    </Link>

                    <nav className="site-header__nav">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={
                                    isLinkActive(link, location.pathname, searchParams)
                                        ? 'site-header__link site-header__link--active'
                                        : 'site-header__link'
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <form className="site-header__search" onSubmit={handleSearch}>
                        <i className="fa-solid fa-magnifying-glass" />
                        <input
                            type="text"
                            placeholder="Search products…"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </form>

                    <button
                        type="button"
                        className="site-header__cart"
                        onClick={openCart}
                        aria-label="Open cart"
                    >
                        <i className="fa-solid fa-cart-shopping" />
                        {count > 0 && <span className="site-header__cart-count">{count}</span>}
                    </button>

                    <div className="site-header__mobile-icons">
                        <button
                            type="button"
                            className="site-header__search-toggle"
                            onClick={() => setSearchOpen((v) => !v)}
                            aria-label="Toggle search"
                        >
                            <i className={`fa-solid ${searchOpen ? 'fa-xmark' : 'fa-magnifying-glass'}`} />
                        </button>

                        <button
                            type="button"
                            className="site-header__menu-toggle"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <i className="fa-solid fa-bars" />
                        </button>
                    </div>
                </div>

                {searchOpen && (
                    <div className="site-header__search-mobile-wrap">
                        <form className="site-header__search-mobile" onSubmit={handleSearch}>
                            <i className="fa-solid fa-magnifying-glass" />
                            <input
                                type="text"
                                placeholder="Search products…"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                autoFocus
                            />
                        </form>
                    </div>
                )}
            </header>

            <div className="site-header__spacer" />

            <button
                type="button"
                className="floating-cart"
                onClick={openCart}
                aria-label="Open cart"
            >
                <i className="fa-solid fa-cart-shopping" />
                {count > 0 && <span className="floating-cart__count">{count}</span>}
            </button>

            <div
                className={menuOpen ? 'mobile-drawer-backdrop mobile-drawer-backdrop--visible' : 'mobile-drawer-backdrop'}
                onClick={() => setMenuOpen(false)}
            />

            <aside className={menuOpen ? 'mobile-drawer mobile-drawer--open' : 'mobile-drawer'}>
                <div className="mobile-drawer__header">
                    <img src={logo} alt="ZeroOne Telecommunications" />
                    <button
                        type="button"
                        className="mobile-drawer__close"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>

                <nav className="mobile-drawer__nav">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setMenuOpen(false)}
                            className={
                                isLinkActive(link, location.pathname, searchParams)
                                    ? 'mobile-drawer__link mobile-drawer__link--active'
                                    : 'mobile-drawer__link'
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    )
}

export default Header
