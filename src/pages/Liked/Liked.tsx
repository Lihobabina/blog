import articlesArray, {
    ArticleProps,
    getProductsObject,
} from '../../utils/articlesArray'
import LikedArticle from './LikedArticle'

type Props = {
    productsInLiked: {
        [id: number]: boolean
    }
    productsObject?: {
        [id: number]: ArticleProps
    }
    LikedItem?: any
    removeProductFromCart: (id: number) => void
}
const Liked = ({
    productsInLiked,
    productsObject = getProductsObject(articlesArray),
    LikedItem = LikedArticle,
    removeProductFromCart,
}: Props) => {
    return (
        <>
            <header>Liked</header>
            <div className="articles">
                {Object.keys(productsInLiked).map((article) => (
                    <LikedItem
                        key={article}
                        article={productsObject[parseInt(article)]}
                        removeProductFromCart={removeProductFromCart}
                    />
                ))}
            </div>
        </>
    )
}
export default Liked
