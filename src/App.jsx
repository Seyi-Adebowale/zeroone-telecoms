import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Home from './pages/Home.jsx'
import ShopPage from './pages/ShopPage.jsx'
import RepairsPage from './pages/RepairsPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/repairs" element={<RepairsPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>

                <Footer />
                <CartDrawer />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App
