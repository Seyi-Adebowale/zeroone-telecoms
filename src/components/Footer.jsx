// Address and phone number below are placeholders — swap for
// ZeroOne's real business details once available. Instagram link
// is also a placeholder until that page is created.
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__top">
                <div className="site-footer__brand">
                    <div className="site-footer__logo-box">
                        <img src={logo} alt="ZeroOne Telecommunications" className="site-footer__logo" />
                    </div>
                    <p>
                        Your home for new and pre-owned phones, laptops and
                        tablets, plus accessories and professional device
                        repairs.
                    </p>
                    <div className="site-footer__social">
                        <a
                            href="mailto:info@zeroonetelecoms.co.uk"
                            aria-label="Email ZeroOne"
                        >
                            <i className="fa-solid fa-envelope" />
                        </a>
                        <a
                            href="https://web.facebook.com/profile.php?id=100074176872943"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="ZeroOne on Facebook"
                        >
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a href="#" aria-label="ZeroOne on Instagram">
                            <i className="fa-brands fa-instagram" />
                        </a>
                    </div>
                </div>

                <div className="site-footer__col">
                    <h4>Shop</h4>
                    <Link to="/shop?category=new-devices">New Devices</Link>
                    <Link to="/shop?category=pre-owned">Pre-Owned</Link>
                    <Link to="/shop?category=accessories">Accessories</Link>
                    <Link to="/repairs">Repairs</Link>
                </div>

                <div className="site-footer__col">
                    <h4>Get in Touch</h4>
                    <a
                        className="site-footer__contact-item"
                        href="https://www.google.com/maps/search/?api=1&query=123+High+Street+London+EC1A+1AA+United+Kingdom"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-solid fa-location-dot" />
                        <span>
                            123 High Street<br />
                            London, EC1A 1AA<br />
                            United Kingdom
                        </span>
                    </a>
                    <a className="site-footer__contact-item" href="tel:+442012345678">
                        <i className="fa-solid fa-phone" />
                        <span>+44 20 1234 5678</span>
                    </a>
                    <div className="site-footer__contact-item">
                        <i className="fa-solid fa-envelope" />
                        <div className="site-footer__emails">
                            <a href="mailto:info@zeroonetelecoms.co.uk">
                                info@zeroonetelecoms.co.uk
                            </a>
                            <a href="mailto:sales@zeroonetelecoms.co.uk">
                                sales@zeroonetelecoms.co.uk
                            </a>
                            <a href="mailto:repairs@zeroonetelecoms.co.uk">
                                repairs@zeroonetelecoms.co.uk
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-footer__bottom">
                <p>© 2026 ZeroOne Telecommunications Ltd. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
