import { useEffect, useRef, useState } from 'react'
import { REPAIR_SERVICES } from '../data/products.js'
import './RepairsPage.css'

const OTHER_SERVICE = 'other'

function RepairsPage() {
    const formRef = useRef(null)
    const [showForm, setShowForm] = useState(false)
    const [service, setService] = useState('')
    const [device, setDevice] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [issue, setIssue] = useState('')
    const [contactError, setContactError] = useState('')
    const phoneRef = useRef(null)

    useEffect(() => {
        if (showForm) {
            formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [showForm])

    const handleBookClick = (serviceId) => {
        setService(serviceId)
        setShowForm(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email.trim() && !phone.trim()) {
            setContactError('Please provide at least an email or a phone number.')
            phoneRef.current?.focus()
            return
        }
        setContactError('')

        const serviceLabel =
            REPAIR_SERVICES.find((s) => s.id === service)?.name ||
            (service === OTHER_SERVICE ? 'Other / Not sure' : 'Not specified')

        const subject = encodeURIComponent(`Repair booking: ${serviceLabel}`)
        const body = encodeURIComponent(
            `Hi ZeroOne,\n\nI'd like to book a repair.\n\n` +
                `Service: ${serviceLabel}\n` +
                `Device: ${device}\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Phone: ${phone}\n` +
                `Issue details: ${issue}\n\nThanks!`
        )

        window.location.href = `mailto:repairs@zeroonetelecoms.co.uk?subject=${subject}&body=${body}`
    }

    return (
        <main className="repairs-page">
            <div className="repairs-page__intro">
                <h1>Professional Device Repairs</h1>
                <p>
                    Fast, reliable repairs for phones, tablets and laptops.
                    The services below are just the most common ones we
                    handle — if your issue isn't listed, tell us about it in
                    the form and we'll take a look.
                </p>
            </div>

            <div className="repairs-page__grid">
                {REPAIR_SERVICES.map((s) => (
                    <div className="repair-card" key={s.id}>
                        <div className="repair-card__icon">
                            <i className={`fa-solid ${s.icon}`} />
                        </div>

                        <h3>{s.name}</h3>
                        <p className="repair-card__desc">{s.desc}</p>

                        <button
                            type="button"
                            className="repair-card__cta"
                            onClick={() => handleBookClick(s.id)}
                        >
                            Get Quick Quote
                        </button>
                    </div>
                ))}
            </div>

            <div className="repairs-page__other">
                <div className="repairs-page__other-icon">
                    <i className="fa-solid fa-ellipsis" />
                </div>

                <div className="repairs-page__other-text">
                    <h3>Something Else?</h3>
                    <p>
                        Not seeing your issue? We repair far more than what's
                        listed here — describe it in the form and we'll sort
                        out pricing and turnaround with you directly.
                    </p>
                </div>

                <button
                    type="button"
                    className="repairs-page__other-cta"
                    onClick={() => handleBookClick(OTHER_SERVICE)}
                >
                    Describe Your Issue
                </button>
            </div>

            {showForm && (
            <div className="repairs-page__booking" ref={formRef}>
                <button
                    type="button"
                    className="repairs-page__close"
                    onClick={() => setShowForm(false)}
                    aria-label="Close form"
                >
                    <i className="fa-solid fa-xmark" />
                </button>

                <div className="repairs-page__booking-layout">
                <div className="repairs-page__booking-main">
                <div className="repairs-page__booking-intro">
                    <h2>Get a Quick Quote</h2>
                    <p>
                        Fill in a few details and we'll get back to you with
                        pricing and next steps.
                    </p>
                </div>

                <form className="repairs-page__form" onSubmit={handleSubmit}>
                    <label className="repairs-page__field">
                        Repair Type
                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Select a repair type
                            </option>
                            {REPAIR_SERVICES.map((s) => (
                                <option value={s.id} key={s.id}>
                                    {s.name}
                                </option>
                            ))}
                            <option value={OTHER_SERVICE}>Other / Not sure</option>
                        </select>
                    </label>

                    <label className="repairs-page__field">
                        Device
                        <input
                            type="text"
                            placeholder="e.g. iPhone 13, MacBook Air"
                            value={device}
                            onChange={(e) => setDevice(e.target.value)}
                            required
                        />
                    </label>

                    <div className="repairs-page__row-3">
                        <label className="repairs-page__field">
                            Your Name
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>

                        <label className="repairs-page__field">
                            Email
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    if (contactError) setContactError('')
                                }}
                            />
                        </label>

                        <label className="repairs-page__field">
                            Phone
                            <input
                                ref={phoneRef}
                                type="tel"
                                placeholder="e.g. 07123 456789"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value)
                                    if (contactError) setContactError('')
                                }}
                            />
                        </label>
                    </div>

                    {contactError && (
                        <p className="repairs-page__field-error repairs-page__field--full">
                            {contactError}
                        </p>
                    )}

                    <label className="repairs-page__field repairs-page__field--full">
                        Issue Details
                        <textarea
                            rows={4}
                            placeholder="Describe the issue in detail"
                            value={issue}
                            onChange={(e) => setIssue(e.target.value)}
                            required
                        />
                    </label>

                    <button type="submit" className="repairs-page__submit">
                        Send Quote Request <i className="fa-solid fa-arrow-right" />
                    </button>
                </form>
                </div>

                <aside className="repairs-page__steps">
                    <h3>How It Works</h3>

                    <div className="repairs-page__step">
                        <span className="repairs-page__step-number">1</span>
                        <div>
                            <h4>Submit your request</h4>
                            <p>Tell us about your device and the issue.</p>
                        </div>
                    </div>

                    <div className="repairs-page__step">
                        <span className="repairs-page__step-number">2</span>
                        <div>
                            <h4>We review it</h4>
                            <p>Our team looks over the details you've sent.</p>
                        </div>
                    </div>

                    <div className="repairs-page__step">
                        <span className="repairs-page__step-number">3</span>
                        <div>
                            <h4>We get back to you</h4>
                            <p>You'll hear from us with pricing and next steps.</p>
                        </div>
                    </div>
                </aside>
                </div>
            </div>
            )}
        </main>
    )
}

export default RepairsPage
