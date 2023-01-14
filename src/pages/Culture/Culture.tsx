import articlesArray from '../../utils/articlesArray'
import './Culture.scss'
type ArticleProps = {
    img: string
    category: string
    desc: string
    authorImg: string
    author: string
    text: string
    date: string
}
type Props = {}
const Culture = (props: Props) => {
    return (
        <>
            <header>Culture</header>

            <div className="articles-culture">
                {articlesArray
                    .filter(
                        ({ category }: ArticleProps) => category === 'culture'
                    )
                    .map(
                        ({
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
export default Culture
