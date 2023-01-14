import articlesArray from '../../utils/articlesArray'
import './Destinations.scss'
type ArticleProps = {
    img: string
    category: string
    desc: string
    authorImg: string
    author: string
    text?: string
    date?: string
}
type Props = {}
const Destinations = (props: Props) => {
    return (
        <>
            <header>Destinations</header>
            <div className="articles">
                {articlesArray
                    .filter(
                        ({ category }: ArticleProps) =>
                            category === 'destinations'
                    )
                    .map(
                        ({
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
                                </div>
                                <div className="content">
                                    <h1>{desc}</h1>
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
        </>
    )
}
export default Destinations
