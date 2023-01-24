import articlesArray from '../../utils/articlesArray'
import './Culture.scss'
import { Link } from 'react-router-dom'
type ArticleProps = {
    id: number
    img: string
    category: string
    desc: string
    authorImg: string
    author: string
    text: string
    date: string
    popular?: string
}
type Props = {
    addProductsToLiked: (id: number) => void
    productsInLiked: productsInLiked
    removeProductFromCart: (id: number) => void
}
type productsInLiked = {
    [id: number]: boolean
}
const Culture = ({
    addProductsToLiked,
    removeProductFromCart,
    productsInLiked,
}: Props) => {
    return (
        <>
            <header>Culture</header>
            <div className="culture-cont">
                <div className="articles-culture">
                    {articlesArray
                        .filter(
                            ({ category }: ArticleProps) =>
                                category === 'culture'
                        )
                        .map(
                            ({
                                id,
                                img,
                                category,
                                desc,
                                authorImg,
                                author,
                                date,
                                text,
                            }: ArticleProps) => (
                                <div className="article">
                                    <div className="photo">
                                        <img src={img} alt="" />
                                        <div>
                                            {productsInLiked[id] ? (
                                                <button
                                                    className="liked"
                                                    onClick={() =>
                                                        removeProductFromCart(
                                                            id
                                                        )
                                                    }
                                                ></button>
                                            ) : (
                                                <button
                                                    className="like"
                                                    onClick={() =>
                                                        addProductsToLiked(id)
                                                    }
                                                ></button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="content">
                                        <Link
                                            to={`/articles/${id}`}
                                            className="navLink"
                                        >
                                            {desc}
                                        </Link>
                                        <div className="desc">
                                            <h2>{date}</h2>
                                            <a href=".">{category}</a>
                                        </div>
                                        <p>{text}</p>
                                        <div className="author">
                                            <img
                                                src={authorImg}
                                                alt=""
                                                className="authorImg"
                                            />
                                            <h3>
                                                <span>by </span>
                                                {author}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                </div>
                <aside>
                    <h1>Popular</h1>
                    {articlesArray
                        .filter(({ popular }: ArticleProps) => popular === '')
                        .map(({ id, img, category, desc }: ArticleProps) => (
                            <div className="cont">
                                <div className="photo">
                                    <img src={img} alt="" />
                                </div>
                                <div className="content">
                                    <Link
                                        to={`/articles/${id}`}
                                        className="navLink"
                                    >
                                        {desc}
                                    </Link>
                                    <h3>{category}</h3>
                                </div>
                            </div>
                        ))}
                    <button>
                        <a href="https://www.instagram.com">Follow us</a>
                    </button>
                    <img src="CultureImages/instagram.jpg" alt="" />
                </aside>
            </div>
        </>
    )
}
export default Culture
