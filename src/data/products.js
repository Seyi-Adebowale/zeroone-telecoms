// Placeholder catalog data — real brands ZeroOne actually stocks
// (Apple, Samsung, HP, Lenovo, Dell), with illustrative prices/stock.
// Swap for real inventory once ZeroOne's product data/API is available.
// Images are official manufacturer press photos where available (a
// few models don't have a clean, text-free press shot, so those fall
// back to an icon placeholder in ProductCard) — the ZeroOne Buds
// entry uses ZeroOne's own real product photography.

import iphone15Pro from '../assets/products/iphone-15-pro-cutout.png'
import iphone15 from '../assets/products/iphone-15.jpg'
import iphone13 from '../assets/products/iphone-13.jpg'
import galaxyS24Ultra from '../assets/products/galaxy-s24-ultra.jpg'
import galaxyS21 from '../assets/products/galaxy-s21.jpg'
import macbookAir15M3 from '../assets/products/macbook-air-15-m3.jpg'
import macbookPro14M3 from '../assets/products/macbook-pro-14-m3.jpg'
import macbookAirM1 from '../assets/products/macbook-air-m1.jpg'
import appleWatchSeries9 from '../assets/products/apple-watch-series-9.jpg'
import airpodsPro2 from '../assets/products/airpods-pro-2.jpg'
import galaxyBuds2Pro from '../assets/products/galaxy-buds2-pro.jpg'
import zerooneBuds from '../assets/products/zeroone-buds-open-cutout.png'

export const CATEGORIES = {
    NEW: 'new-devices',
    PRE_OWNED: 'pre-owned',
    ACCESSORIES: 'accessories',
}

export const DEVICE_TYPES = {
    PHONE: 'phone',
    LAPTOP: 'laptop',
    TABLET: 'tablet',
    WATCH: 'watch',
    AUDIO: 'audio',
    CHARGING: 'charging',
    POWERBANK: 'powerbank',
}

export const DEVICE_TYPE_LABELS = {
    [DEVICE_TYPES.PHONE]: 'Phones',
    [DEVICE_TYPES.LAPTOP]: 'Laptops',
    [DEVICE_TYPES.TABLET]: 'Tablets',
    [DEVICE_TYPES.WATCH]: 'Watches',
    [DEVICE_TYPES.AUDIO]: 'Audio',
    [DEVICE_TYPES.CHARGING]: 'Charging',
    [DEVICE_TYPES.POWERBANK]: 'Power Banks',
}

export const DEVICE_TYPE_ICONS = {
    [DEVICE_TYPES.PHONE]: 'fa-mobile-screen-button',
    [DEVICE_TYPES.LAPTOP]: 'fa-laptop',
    [DEVICE_TYPES.TABLET]: 'fa-tablet-screen-button',
    [DEVICE_TYPES.WATCH]: 'fa-clock',
    [DEVICE_TYPES.AUDIO]: 'fa-headphones',
    [DEVICE_TYPES.CHARGING]: 'fa-plug',
    [DEVICE_TYPES.POWERBANK]: 'fa-battery-full',
}

export const PRODUCTS = [
    // New Devices
    {
        id: 'iphone-15-pro',
        name: 'iPhone 15 Pro',
        brand: 'Apple',
        deviceType: DEVICE_TYPES.PHONE,
        price: 999,
        category: CATEGORIES.NEW,
        icon: 'fa-mobile-screen-button',
        image: iphone15Pro,
        badge: 'Best Seller',
    },
    {
        id: 'iphone-15',
        name: 'iPhone 15',
        brand: 'Apple',
        deviceType: DEVICE_TYPES.PHONE,
        price: 799,
        category: CATEGORIES.NEW,
        icon: 'fa-mobile-screen-button',
        image: iphone15,
        badge: 'New Arrival',
    },
    {
        id: 'galaxy-s24-ultra',
        name: 'Galaxy S24 Ultra',
        brand: 'Samsung',
        deviceType: DEVICE_TYPES.PHONE,
        price: 1099,
        category: CATEGORIES.NEW,
        icon: 'fa-mobile-screen-button',
        image: galaxyS24Ultra,
        badge: 'Best Seller',
    },
    {
        id: 'galaxy-s24',
        name: 'Galaxy S24',
        brand: 'Samsung',
        deviceType: DEVICE_TYPES.PHONE,
        price: 699,
        originalPrice: 799,
        category: CATEGORIES.NEW,
        icon: 'fa-mobile-screen-button',
        image: galaxyS24Ultra,
    },
    {
        id: 'macbook-air-15-m3',
        name: 'MacBook Air 15" (M3)',
        brand: 'Apple',
        deviceType: DEVICE_TYPES.LAPTOP,
        price: 1399,
        category: CATEGORIES.NEW,
        icon: 'fa-laptop',
        image: macbookAir15M3,
        badge: 'Best Seller',
    },
    {
        id: 'macbook-pro-14-m3',
        name: 'MacBook Pro 14" (M3)',
        brand: 'Apple',
        deviceType: DEVICE_TYPES.LAPTOP,
        price: 1999,
        category: CATEGORIES.NEW,
        icon: 'fa-laptop',
        image: macbookPro14M3,
    },
    {
        id: 'hp-pavilion-15',
        name: 'Pavilion 15',
        brand: 'HP',
        deviceType: DEVICE_TYPES.LAPTOP,
        price: 499,
        originalPrice: 599,
        category: CATEGORIES.NEW,
        icon: 'fa-laptop',
        badge: 'New Arrival',
    },
    {
        id: 'hp-spectre-x360',
        name: 'Spectre x360',
        brand: 'HP',
        deviceType: DEVICE_TYPES.LAPTOP,
        price: 1299,
        category: CATEGORIES.NEW,
        icon: 'fa-laptop',
    },
    {
        id: 'lenovo-thinkpad-x1-carbon',
        name: 'ThinkPad X1 Carbon',
        brand: 'Lenovo',
        deviceType: DEVICE_TYPES.LAPTOP,
        price: 1199,
        category: CATEGORIES.NEW,
        icon: 'fa-laptop',
        badge: 'New Arrival',
    },
    {
        id: 'dell-xps-13',
        name: 'XPS 13',
        brand: 'Dell',
        deviceType: DEVICE_TYPES.LAPTOP,
        price: 999,
        category: CATEGORIES.NEW,
        icon: 'fa-laptop',
        badge: 'New Arrival',
    },
    {
        id: 'galaxy-tab-s9',
        name: 'Galaxy Tab S9',
        brand: 'Samsung',
        deviceType: DEVICE_TYPES.TABLET,
        price: 699,
        category: CATEGORIES.NEW,
        icon: 'fa-tablet-screen-button',
        badge: 'New Arrival',
    },
    // Pre-Owned
    {
        id: 'iphone-13-refurb',
        name: 'iPhone 13',
        brand: 'Apple',
        deviceType: DEVICE_TYPES.PHONE,
        price: 349,
        originalPrice: 449,
        category: CATEGORIES.PRE_OWNED,
        icon: 'fa-mobile-screen-button',
        image: iphone13,
        badge: 'Great Value',
    },
    {
        id: 'iphone-12-refurb',
        name: 'iPhone 12',
        brand: 'Apple',
        deviceType: DEVICE_TYPES.PHONE,
        price: 299,
        category: CATEGORIES.PRE_OWNED,
        icon: 'fa-mobile-screen-button',
    },
    {
        id: 'galaxy-s21-refurb',
        name: 'Galaxy S21',
        brand: 'Samsung',
        deviceType: DEVICE_TYPES.PHONE,
        price: 299,
        category: CATEGORIES.PRE_OWNED,
        icon: 'fa-mobile-screen-button',
        image: galaxyS21,
    },
    {
        id: 'macbook-air-m1-refurb',
        name: 'MacBook Air M1',
        brand: 'Apple',
        deviceType: DEVICE_TYPES.LAPTOP,
        price: 649,
        category: CATEGORIES.PRE_OWNED,
        icon: 'fa-laptop',
        image: macbookAirM1,
    },
    {
        id: 'hp-elitebook-refurb',
        name: 'EliteBook',
        brand: 'HP',
        deviceType: DEVICE_TYPES.LAPTOP,
        price: 449,
        category: CATEGORIES.PRE_OWNED,
        icon: 'fa-laptop',
        badge: 'Sold Out',
        soldOut: true,
    },
    {
        id: 'dell-xps-13-refurb',
        name: 'XPS 13',
        brand: 'Dell',
        deviceType: DEVICE_TYPES.LAPTOP,
        price: 549,
        category: CATEGORIES.PRE_OWNED,
        icon: 'fa-laptop',
    },

    // Accessories
    {
        id: 'apple-watch-series-9',
        name: 'Watch Series 9',
        brand: 'Apple',
        deviceType: DEVICE_TYPES.WATCH,
        price: 399,
        category: CATEGORIES.ACCESSORIES,
        icon: 'fa-clock',
        image: appleWatchSeries9,
        badge: 'New Arrival',
    },
    {
        id: 'zeroone-buds',
        name: 'Buds',
        brand: 'ZeroOne',
        deviceType: DEVICE_TYPES.AUDIO,
        price: 49,
        category: CATEGORIES.ACCESSORIES,
        icon: 'fa-headphones',
        image: zerooneBuds,
        badge: 'Best Seller',
    },
    {
        id: 'airpods-pro-2',
        name: 'AirPods Pro (2nd Gen)',
        brand: 'Apple',
        deviceType: DEVICE_TYPES.AUDIO,
        price: 199,
        category: CATEGORIES.ACCESSORIES,
        icon: 'fa-headphones',
        image: airpodsPro2,
    },
    {
        id: 'galaxy-buds2-pro',
        name: 'Galaxy Buds2 Pro',
        brand: 'Samsung',
        deviceType: DEVICE_TYPES.AUDIO,
        price: 149,
        category: CATEGORIES.ACCESSORIES,
        icon: 'fa-headphones-simple',
        image: galaxyBuds2Pro,
        badge: 'New Arrival',
    },
    {
        id: 'apple-65w-charger',
        name: '65W USB-C Charger',
        brand: 'Apple',
        deviceType: DEVICE_TYPES.CHARGING,
        price: 39,
        category: CATEGORIES.ACCESSORIES,
        icon: 'fa-plug',
    },
    {
        id: 'samsung-45w-charger',
        name: '45W Super Fast Charger',
        brand: 'Samsung',
        deviceType: DEVICE_TYPES.CHARGING,
        price: 29,
        category: CATEGORIES.ACCESSORIES,
        icon: 'fa-plug-circle-bolt',
    },
    {
        id: 'powerbank-20000',
        name: '20,000mAh Power Bank',
        brand: 'Anker',
        deviceType: DEVICE_TYPES.POWERBANK,
        price: 29,
        originalPrice: 39,
        category: CATEGORIES.ACCESSORIES,
        icon: 'fa-battery-full',
        badge: 'New Arrival',
    },
]

export const DEALS = PRODUCTS.filter((p) => p.originalPrice)

export const REPAIR_SERVICES = [
    {
        id: 'screen-repair',
        name: 'Screen Repair',
        fromPrice: 59,
        icon: 'fa-mobile-screen-button',
        desc: 'Cracked or unresponsive screen replacement for phones, tablets and laptops.',
    },
    {
        id: 'battery-replacement',
        name: 'Battery Replacement',
        fromPrice: 39,
        icon: 'fa-battery-quarter',
        desc: 'Restore battery life with a genuine or high-quality replacement.',
    },
    {
        id: 'charging-port-repair',
        name: 'Charging Port Repair',
        fromPrice: 45,
        icon: 'fa-plug-circle-exclamation',
        desc: "Fix a loose, damaged or unresponsive charging port.",
    },
    {
        id: 'water-damage-diagnostic',
        name: 'Water Damage Diagnostic',
        fromPrice: 25,
        icon: 'fa-droplet',
        desc: 'Full diagnostic and cleaning for water or liquid damaged devices.',
    },
    {
        id: 'back-glass-housing',
        name: 'Back Glass & Housing',
        fromPrice: 49,
        icon: 'fa-layer-group',
        desc: 'Replacement of cracked back glass or a damaged outer housing.',
    },
    {
        id: 'camera-repair',
        name: 'Camera Repair',
        fromPrice: 45,
        icon: 'fa-camera',
        desc: 'Fix a blurry, cracked or unresponsive front or rear camera.',
    },
    {
        id: 'speaker-mic-repair',
        name: 'Speaker & Mic Repair',
        fromPrice: 39,
        icon: 'fa-volume-high',
        desc: 'Restore muffled, silent or distorted speaker and microphone issues.',
    },
    {
        id: 'software-diagnostic',
        name: 'Software & OS Issues',
        fromPrice: 25,
        icon: 'fa-laptop-code',
        desc: 'Troubleshooting for freezing, boot issues, viruses and slow performance.',
    },
]

export function formatPrice(amount) {
    return `£${amount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function discountPercent(price, originalPrice) {
    return Math.round(((originalPrice - price) / originalPrice) * 100)
}

export function getConditionLabel(product) {
    return product.category === CATEGORIES.PRE_OWNED ? 'Pre-Owned' : 'Brand New'
}
