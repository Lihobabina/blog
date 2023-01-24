import Articles from '../Articles/Articles'
import articlesArray from '../../../utils/articlesArray'
import './ArticlesList.scss'
import TravelTips from '../TravelTips/TravelTips'
type ArticleProps = {
    id: number
    img: string
    category: string
    desc: string
    authorImg: string
    author: string
}
type Props = {
    addProductsToLiked: (id: number) => void
    removeProductFromCart: (id: number) => void
    productsInLiked: productsInLiked
}
type productsInLiked = {
    [id: number]: boolean
}

const ArticlesList = ({
    addProductsToLiked,
    productsInLiked,
    removeProductFromCart,
}: Props) => {
    return (
        <>
            <header>Articles</header>

            <div className="articles">
                {articlesArray.map(
                    ({
                        id,
                        img,
                        category,
                        desc,
                        authorImg,
                        author,
                    }: ArticleProps) => (
                        <Articles
                            id={id}
                            img={img}
                            category={category}
                            desc={desc}
                            authorImg={authorImg}
                            author={author}
                            addProductsToLiked={addProductsToLiked}
                            productsInLiked={productsInLiked}
                            removeProductFromCart={removeProductFromCart}
                        />
                    )
                )}
            </div>
            <TravelTips />
        </>
    )
}
export default ArticlesList
