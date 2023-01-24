import './Main.scss'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Destinations from '../../pages/Destinations/Destinations'
import Photography from '../../pages/Photography/Photography'
import Culture from '../../pages/Culture/Culture'
import Liked from '../../pages/Liked/Liked'
import ArticlePage from '../../pages/ArticlePage/ArticlePage'

type Props = {
    removeProductFromCart: (id: number) => void
    addProductsToLiked: (id: number) => void
    productsInLiked: productsInLiked
}
type productsInLiked = {
    [id: number]: boolean
}
const Main = ({
    addProductsToLiked,
    productsInLiked,
    removeProductFromCart,
}: Props) => {
    return (
        <>
            <main>
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    addProductsToLiked={addProductsToLiked}
                                    productsInLiked={productsInLiked}
                                    removeProductFromCart={
                                        removeProductFromCart
                                    }
                                />
                            }
                        ></Route>
                        <Route
                            path="/Destinations"
                            element={
                                <Destinations
                                    addProductsToLiked={addProductsToLiked}
                                    productsInLiked={productsInLiked}
                                    removeProductFromCart={
                                        removeProductFromCart
                                    }
                                />
                            }
                        ></Route>
                        <Route
                            path="/Photography"
                            element={
                                <Photography
                                    addProductsToLiked={addProductsToLiked}
                                    productsInLiked={productsInLiked}
                                    removeProductFromCart={
                                        removeProductFromCart
                                    }
                                />
                            }
                        ></Route>
                        <Route
                            path="/Culture"
                            element={
                                <Culture
                                    addProductsToLiked={addProductsToLiked}
                                    productsInLiked={productsInLiked}
                                    removeProductFromCart={
                                        removeProductFromCart
                                    }
                                />
                            }
                        ></Route>
                        <Route
                            path="/Liked"
                            element={
                                <Liked
                                    productsInLiked={productsInLiked}
                                    removeProductFromCart={
                                        removeProductFromCart
                                    }
                                />
                            }
                        ></Route>
                        <Route
                            path="articles/:id"
                            element={
                                <ArticlePage
                                    addProductsToLiked={addProductsToLiked}
                                    removeProductFromCart={
                                        removeProductFromCart
                                    }
                                    productsInLiked={productsInLiked}
                                />
                            }
                        />
                    </Routes>
                </div>
            </main>
        </>
    )
}
export default Main
