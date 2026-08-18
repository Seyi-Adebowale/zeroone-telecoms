import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const CART_STORAGE_KEY = 'zeroone-cart'

function loadStoredItems() {
    try {
        const raw = localStorage.getItem(CART_STORAGE_KEY)
        return raw ? JSON.parse(raw) : []
    } catch {
        return []
    }
}

export function CartProvider({ children }) {
    const [items, setItems] = useState(loadStoredItems)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    }, [items])

    const addItem = (product) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.id === product.id)
            if (existing) {
                return prev.map((i) =>
                    i.id === product.id ? { ...i, qty: i.qty + 1 } : i
                )
            }
            return [...prev, { ...product, qty: 1 }]
        })
    }

    const removeItem = (id) => {
        setItems((prev) => prev.filter((i) => i.id !== id))
    }

    const clearCart = () => {
        setItems([])
    }

    const setQty = (id, qty) => {
        if (qty < 1) {
            removeItem(id)
            return
        }
        setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
    }

    const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])

    const total = useMemo(
        () => items.reduce((sum, i) => sum + i.qty * i.price, 0),
        [items]
    )

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                clearCart,
                setQty,
                count,
                total,
                isOpen,
                openCart: () => setIsOpen(true),
                closeCart: () => setIsOpen(false),
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error('useCart must be used within a CartProvider')
    return ctx
}
