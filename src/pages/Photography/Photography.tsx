import articlesArray from '../../utils/articlesArray'
import './Photography.scss'
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
const Photography = (props: Props) => {
    return (
        <>
            <header>Photography</header>
            <div className="articles">
                {articlesArray
                    .filter(
                        ({ category }: ArticleProps) =>
                            category === 'photography'
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
            <div className="images">
                <img src="PhotographyImages/1.jpg" alt="" />
                <img src="PhotographyImages/2.jpg" alt="" />
                <img src="PhotographyImages/3.jpg" alt="" />
                <img src="PhotographyImages/4.jpg" alt="" />
                <img src="PhotographyImages/5.jpg" alt="" />
            </div>
        </>
    )
}
export default Photography
