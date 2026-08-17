import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import './CategoryPage.css'

function SearchPage() {
    const [params] = useSearchParams()
    const query = params.get('q') || ''

    const results = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return []
        return PRODUCTS.filter((p) => p.name.toLowerCase().includes(q))
    }, [query])

    return (
        <main className="category-page">
            <div className="category-page__top">
                <h1>Search results for "{query}"</h1>
                <p>{results.length} product{results.length === 1 ? '' : 's'} found</p>
            </div>

            {results.length === 0 ? (
                <p className="category-page__empty">
                    No products matched your search. Try a different term.
                </p>
            ) : (
                <div className="category-page__grid">
                    {results.map((p) => (
                        <ProductCard product={p} key={p.id} />
                    ))}
                </div>
            )}
        </main>
    )
}

export default SearchPage
