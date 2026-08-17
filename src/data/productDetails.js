// Placeholder description/spec/review content, generated from a
// product's device type + category rather than hand-written per
// product (the catalog is illustrative, not real inventory yet).
// Swap for real copy and real reviews once available.

import { CATEGORIES, DEVICE_TYPES } from './products.js'

const CONDITION_BLURB = {
    [CATEGORIES.NEW]: 'Brand new and sealed, straight from the manufacturer.',
    [CATEGORIES.PRE_OWNED]:
        "Quality-checked pre-owned unit, fully inspected and tested before it's listed.",
    [CATEGORIES.ACCESSORIES]: 'Brand new and sealed.',
}

const DEVICE_TYPE_BLURB = {
    [DEVICE_TYPES.PHONE]: 'a smooth, reliable everyday phone',
    [DEVICE_TYPES.LAPTOP]: 'a fast, dependable laptop for work or everyday use',
    [DEVICE_TYPES.TABLET]: 'a versatile tablet for work, streaming and everything in between',
    [DEVICE_TYPES.WATCH]: 'a smartwatch that keeps you connected on the go',
    [DEVICE_TYPES.AUDIO]: 'true wireless audio built for everyday listening',
    [DEVICE_TYPES.CHARGING]: 'a reliable way to keep your devices topped up',
    [DEVICE_TYPES.POWERBANK]: 'extra battery life for when you\'re away from a plug',
}

export function getProductDescription(product) {
    const condition = CONDITION_BLURB[product.category] || ''
    const typeBlurb = DEVICE_TYPE_BLURB[product.deviceType] || 'a solid addition to your setup'
    return `The ${product.brand} ${product.name} is ${typeBlurb}. ${condition} Backed by ZeroOne's support if anything ever needs attention.`
}

const SPEC_TEMPLATES = {
    [DEVICE_TYPES.PHONE]: [
        ['Display', '6.1" OLED'],
        ['Storage', '128GB'],
        ['Battery', 'Up to 20 hours video playback'],
        ['Connectivity', '5G, Wi-Fi 6, Bluetooth 5.3'],
    ],
    [DEVICE_TYPES.LAPTOP]: [
        ['Display', '13–15" display'],
        ['Memory', '16GB RAM'],
        ['Storage', '512GB SSD'],
        ['Battery', 'Up to 18 hours'],
    ],
    [DEVICE_TYPES.TABLET]: [
        ['Display', '11" LCD'],
        ['Storage', '128GB'],
        ['Battery', 'Up to 13 hours'],
        ['Connectivity', 'Wi-Fi, Bluetooth 5.3'],
    ],
    [DEVICE_TYPES.WATCH]: [
        ['Display', 'Always-on retina display'],
        ['Battery', 'Up to 18 hours'],
        ['Water resistance', '50m'],
        ['Connectivity', 'Bluetooth, GPS'],
    ],
    [DEVICE_TYPES.AUDIO]: [
        ['Battery life', 'Up to 6 hours (24 with case)'],
        ['Water resistance', 'IPX4'],
        ['Connectivity', 'Bluetooth 5.3'],
        ['In the box', 'Earbuds, charging case, USB-C cable'],
    ],
    [DEVICE_TYPES.CHARGING]: [
        ['Output', 'Fast charging'],
        ['Cable', 'USB-C included'],
        ['Compatibility', 'Universal'],
    ],
    [DEVICE_TYPES.POWERBANK]: [
        ['Capacity', '20,000mAh'],
        ['Output', 'Fast charging, USB-C and USB-A'],
        ['Compatibility', 'Universal'],
    ],
}

export function getProductSpecs(product) {
    const base = [
        ['Brand', product.brand],
        ['Condition', product.category === CATEGORIES.PRE_OWNED ? 'Refurbished' : 'New'],
        ['Warranty', product.category === CATEGORIES.PRE_OWNED ? '6 months' : '12 months'],
    ]
    return [...base, ...(SPEC_TEMPLATES[product.deviceType] || [])]
}

// Shared placeholder review pool — clearly illustrative, not real
// customer reviews. Sliced per product so every page isn't identical.
const REVIEW_POOL = [
    { name: 'Sarah M.', rating: 5, date: '2 weeks ago', text: 'Arrived quickly and works perfectly. Really happy with this purchase.' },
    { name: 'James O.', rating: 4, date: '1 month ago', text: 'Great value for money, exactly as described on the listing.' },
    { name: 'Aisha K.', rating: 5, date: '3 weeks ago', text: 'Excellent condition and fast delivery. Would buy from ZeroOne again.' },
    { name: 'Daniel P.', rating: 4, date: '2 months ago', text: 'Does everything I need. Good communication throughout.' },
    { name: 'Chloe R.', rating: 5, date: '5 days ago', text: 'Better than expected for the price. No complaints at all.' },
]

export function getProductReviews(product) {
    const count = 2 + (product.id.length % 3)
    const start = product.id.length % REVIEW_POOL.length
    const slice = []
    for (let i = 0; i < count; i++) {
        slice.push(REVIEW_POOL[(start + i) % REVIEW_POOL.length])
    }
    return slice
}

export function averageRating(reviews) {
    if (!reviews.length) return 0
    return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
}

export function ratingBreakdown(reviews) {
    return [5, 4, 3, 2, 1].map((star) => {
        const count = reviews.filter((r) => r.rating === star).length
        return {
            star,
            count,
            pct: reviews.length ? Math.round((count / reviews.length) * 100) : 0,
        }
    })
}
