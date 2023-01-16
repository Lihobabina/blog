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
    popular?: string
}
type Props = {}
const Culture = (props: Props) => {
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
                <aside>
                    <h1>Popular</h1>
                    {articlesArray
                        .filter(({ popular }: ArticleProps) => popular === '')
                        .map(({ img, category, desc }: ArticleProps) => (
                            <div className="cont">
                                <div className="photo">
                                    <img src={img} alt="" />
                                </div>
                                <div className="content">
                                    <p>{desc}</p>
                                    <a href=".">{category}</a>
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
