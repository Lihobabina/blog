import { useParams } from 'react-router-dom'
import { getProductsObject, ArticleProps } from '../../utils/articlesArray'
import articlesArray from '../../utils/articlesArray'
import './ArticlePage.scss'
type ArticleObjProps = {
    [id: number]: ArticleProps
}
type Props = {
    removeProductFromCart: (id: number) => void
    addProductsToLiked: (id: number) => void
    productsInLiked: productsInLiked
}
type productsInLiked = {
    [id: number]: boolean
}
const ArticlePage = ({
    addProductsToLiked,
    removeProductFromCart,
    productsInLiked,
}: Props) => {
    const { id } = useParams()
    const articlesObj: ArticleObjProps = getProductsObject(articlesArray)
    return (
        <>
            <div className="articlePage">
                <div className="content">
                    <a href=".">{articlesObj[parseInt(id!)].category}</a>
                    <h2>{articlesObj[parseInt(id!)].desc}</h2>
                    <p>{articlesObj[parseInt(id!)].text}</p>
                    <div className="author">
                        <img
                            src={articlesObj[parseInt(id!)].authorImg}
                            alt=""
                        />
                        <h3>by {articlesObj[parseInt(id!)].author}</h3>
                        <h4>{articlesObj[parseInt(id!)].date}</h4>
                    </div>
                    <div>
                        {productsInLiked[articlesObj[parseInt(id!)].id] ? (
                            <button
                                className="liked"
                                onClick={() =>
                                    removeProductFromCart(
                                        articlesObj[parseInt(id!)].id
                                    )
                                }
                            ></button>
                        ) : (
                            <button
                                className="like"
                                onClick={() =>
                                    addProductsToLiked(
                                        articlesObj[parseInt(id!)].id
                                    )
                                }
                            ></button>
                        )}
                    </div>
                </div>
                <div className="text">
                    <div className="photo">
                        <img src={articlesObj[parseInt(id!)].img} alt="" />
                    </div>
                    <div className="articleText">
                        <p>{articlesObj[parseInt(id!)].articleText}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ArticlePage
