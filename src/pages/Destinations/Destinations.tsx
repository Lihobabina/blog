import articlesArray from '../../utils/articlesArray'
import './Destinations.scss'
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
}
type Props = {
    addProductsToLiked: (id: number) => void
    productsInLiked: productsInLiked
    removeProductFromCart: (id: number) => void
}
type productsInLiked = {
    [id: number]: boolean
}

const Destinations = ({
    addProductsToLiked,
    productsInLiked,
    removeProductFromCart,
}: Props) => {
    return (
        <>
            <header>Destinations</header>
            <div className="destinations-cont">
                <div className="articles-destinations">
                    {articlesArray
                        .filter(
                            ({ category }: ArticleProps) =>
                                category === 'destinations'
                        )
                        .map(
                            ({
                                id,
                                img,
                                category,
                                desc,
                                authorImg,
                                author,
                                text,
                                date,
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
                    <h1>Latest pins</h1>
                    <a href="https://www.pinterest.com/pin/your-ticket-to-europes-hottest-foodie-destinations--497155246371701440/">
                        <img src="CultureImages/1.jpg" alt="" />
                    </a>
                    <a href="https://www.pinterest.com/pin/497155246371597286/">
                        <img src="CultureImages/2.jpg" alt="" />
                    </a>
                    <a href="https://www.pinterest.com/pin/497155246371534726/">
                        <img src="CultureImages/3.jpg" alt="" />
                    </a>
                    <a href="https://www.pinterest.com/pin/497155246371534180/">
                        <img src="CultureImages/4.jpg" alt="" />
                    </a>
                    <a href="https://www.pinterest.com/pin/the-top-things-to-see-and-do-in-albufeira-portugal--497155246371470347/">
                        <img src="CultureImages/5.jpg" alt="" />
                    </a>
                    <a href="https://www.pinterest.com/pin/497155246371468524/">
                        <img src="CultureImages/6.jpg" alt="" />
                    </a>
                    <button>
                        {' '}
                        <a href="https://www.pinterest.com/">Follow us</a>
                    </button>
                </aside>
            </div>
        </>
    )
}
export default Destinations
