import './reset.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import { omit } from 'lodash'
type productsInLiked = {
    [id: number]: boolean
}

const App = () => {
    const [ProductsInLiked, setProductsInLiked] = useState<productsInLiked>({})

    const addProductsToLiked = (id: number) => {
        setProductsInLiked((prevState: productsInLiked) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }
    const removeProductFromCart = (id: number) =>
        setProductsInLiked((prevState: productsInLiked) =>
            omit(prevState, [id])
        )
    return (
        <>
            <Header productsInLiked={ProductsInLiked} />

            <Main
                addProductsToLiked={addProductsToLiked}
                productsInLiked={ProductsInLiked}
                removeProductFromCart={removeProductFromCart}
            />
            <Footer />
        </>
    )
}
export default App
