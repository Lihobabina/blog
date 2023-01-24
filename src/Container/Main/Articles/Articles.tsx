import { Link } from 'react-router-dom'
import './Articles.scss'
type Props = {
    id: number
    img: string
    category: string
    desc: string
    authorImg: string
    author: string
    addProductsToLiked: (id: number) => void
    productsInLiked: productsInLiked
    removeProductFromCart: (id: number) => void
}
type productsInLiked = {
    [id: number]: boolean
}

const Articles = ({
    id,
    img,
    category,
    desc,
    authorImg,
    author,
    productsInLiked,
    addProductsToLiked,
    removeProductFromCart,
}: Props) => {
    return (
        <>
            <article>
                <div className="photo">
                    <img src={img} alt="" className="photo" />
                    <div>
                        {productsInLiked[id] ? (
                            <button
                                className="liked"
                                onClick={() => removeProductFromCart(id)}
                            ></button>
                        ) : (
                            <button
                                className="like"
                                onClick={() => addProductsToLiked(id)}
                            ></button>
                        )}
                    </div>
                </div>
                <a href=".">{category}</a>{' '}
                <Link to={`/articles/${id}`} className="navLink">
                    {desc}
                </Link>{' '}
                <div className="author">
                    <img src={authorImg} alt="" className="authorImg" />
                    <h3>
                        <span>by </span>
                        {author}
                    </h3>
                </div>
            </article>
        </>
    )
}
export default Articles
