// Placeholder homepage reviews — the client wants to import their real
// reviews from Vinted here. Replace these entries with the real ones
// (name, rating, date, review text) once provided; keep the same shape
// so ReviewsCarousel doesn't need any changes.

export const REVIEWS = [
    {
        id: 'r1',
        name: 'Megan T.',
        rating: 5,
        date: 'March 2026',
        text: 'Bought a pre-owned iPhone and it was exactly as described — spotless condition and arrived really quickly. Would happily buy again.',
    },
    {
        id: 'r2',
        name: 'Kwame A.',
        rating: 5,
        date: 'February 2026',
        text: 'Great communication throughout and the laptop was well packaged. Genuinely felt like a safe purchase.',
    },
    {
        id: 'r3',
        name: 'Ellie S.',
        rating: 4,
        date: 'February 2026',
        text: 'Really happy with my order. Only reason it\'s not 5 stars is delivery took a couple of days longer than expected.',
    },
    {
        id: 'r4',
        name: 'Tom R.',
        rating: 5,
        date: 'January 2026',
        text: 'Second time buying from ZeroOne now. Prices are fair and the devices are always in the condition they say.',
    },
    {
        id: 'r5',
        name: 'Priya N.',
        rating: 5,
        date: 'January 2026',
        text: 'Excellent seller — quick replies, honest description of the item, and well packaged for postage.',
    },
    {
        id: 'r6',
        name: 'Callum D.',
        rating: 4,
        date: 'December 2025',
        text: 'Good experience overall, device works perfectly. Would recommend to anyone after a reliable pre-owned phone.',
    },
]

export function averageReviewRating() {
    if (!REVIEWS.length) return 0
    return REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
}
