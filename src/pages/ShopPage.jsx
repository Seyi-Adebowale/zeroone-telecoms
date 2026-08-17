import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PRODUCTS, DEVICE_TYPE_LABELS, DEVICE_TYPE_ICONS, CATEGORIES } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import './CategoryPage.css'

const SORTS = {
    NEWEST: 'newest',
    PRICE_LOW: 'price-low',
    PRICE_HIGH: 'price-high',
    NAME: 'name',
}

const TABS = [
    { value: CATEGORIES.NEW, label: 'New Devices' },
    { value: CATEGORIES.PRE_OWNED, label: 'Pre-Owned' },
    { value: CATEGORIES.ACCESSORIES, label: 'Accessories' },
]

function ShopPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const category = TABS.some((t) => t.value === searchParams.get('category'))
        ? searchParams.get('category')
        : CATEGORIES.NEW

    const [sort, setSort] = useState(SORTS.NEWEST)
    const [brand, setBrand] = useState('all')
    const [deviceType, setDeviceType] = useState(null)

    const handleCategory = (value) => {
        setSearchParams({ category: value })
        setDeviceType(null)
        setBrand('all')
    }

    const categoryProducts = useMemo(
        () => PRODUCTS.filter((p) => p.category === category),
        [category]
    )

    const deviceTypes = useMemo(
        () => [...new Set(categoryProducts.map((p) => p.deviceType).filter(Boolean))],
        [categoryProducts]
    )

    const activeDeviceType =
        deviceType && deviceTypes.includes(deviceType) ? deviceType : deviceTypes[0]

    const brands = useMemo(() => {
        const scoped = categoryProducts.filter((p) => p.deviceType === activeDeviceType)
        return [...new Set(scoped.map((p) => p.brand).filter(Boolean))].sort()
    }, [categoryProducts, activeDeviceType])

    const products = useMemo(() => {
        let list = categoryProducts.filter((p) => p.deviceType === activeDeviceType)

        if (brand !== 'all') {
            list = list.filter((p) => p.brand === brand)
        }

        switch (sort) {
            case SORTS.PRICE_LOW:
                return [...list].sort((a, b) => a.price - b.price)
            case SORTS.PRICE_HIGH:
                return [...list].sort((a, b) => b.price - a.price)
            case SORTS.NAME:
                return [...list].sort((a, b) => a.name.localeCompare(b.name))
            default:
                return list
        }
    }, [categoryProducts, activeDeviceType, brand, sort])

    const handleDeviceType = (type) => {
        setDeviceType(type)
        setBrand('all')
    }

    return (
        <main className="category-page">
            <div className="category-page__toggle">
                {TABS.map((tab) => (
                    <button
                        type="button"
                        key={tab.value}
                        className={
                            category === tab.value
                                ? 'category-page__toggle-btn category-page__toggle-btn--active'
                                : 'category-page__toggle-btn'
                        }
                        onClick={() => handleCategory(tab.value)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="category-page__top">
                <h1>{TABS.find((t) => t.value === category)?.label}</h1>
                <p>{products.length} product{products.length === 1 ? '' : 's'}</p>
            </div>

            {deviceTypes.length > 1 && (
                <div className="category-page__types">
                    {deviceTypes.map((type) => (
                        <button
                            type="button"
                            key={type}
                            className={
                                activeDeviceType === type
                                    ? 'category-page__type category-page__type--active'
                                    : 'category-page__type'
                            }
                            onClick={() => handleDeviceType(type)}
                        >
                            <span className="category-page__type-icon">
                                <i className={`fa-solid ${DEVICE_TYPE_ICONS[type]}`} />
                            </span>
                            {DEVICE_TYPE_LABELS[type] || type}
                        </button>
                    ))}
                </div>
            )}

            <div className="category-page__layout">
                <aside className="category-page__sidebar">
                    {brands.length > 1 && (
                        <div className="category-page__filter">
                            <h4>Brand</h4>
                            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                                <option value="all">All Brands</option>
                                {brands.map((b) => (
                                    <option value={b} key={b}>
                                        {b}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div className="category-page__filter">
                        <h4>Sort By</h4>
                        <select value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value={SORTS.NEWEST}>Newest</option>
                            <option value={SORTS.PRICE_LOW}>Price: Low to High</option>
                            <option value={SORTS.PRICE_HIGH}>Price: High to Low</option>
                            <option value={SORTS.NAME}>Name: A - Z</option>
                        </select>
                    </div>
                </aside>

                <div className="category-page__main">
                    {products.length === 0 ? (
                        <p className="category-page__empty">No products match your filters.</p>
                    ) : (
                        <div className="category-page__grid">
                            {products.map((p) => (
                                <ProductCard product={p} key={p.id} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default ShopPage
