import ArticlesList from '../../Container/Main/ArticlesList/ArticlesList'
import Slider from '../../Container/Main/Slider/Slider'

type Props = {
    addProductsToLiked: (id: number) => void
    removeProductFromCart: (id: number) => void
    productsInLiked: productsInLiked
}
type productsInLiked = {
    [id: number]: boolean
}
const Home = ({
    addProductsToLiked,
    productsInLiked,
    removeProductFromCart,
}: Props) => {
    return (
        <>
            <Slider />
            <ArticlesList
                addProductsToLiked={addProductsToLiked}
                productsInLiked={productsInLiked}
                removeProductFromCart={removeProductFromCart}
            />
        </>
    )
}
export default Home
