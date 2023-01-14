import './Articles.scss'
type Props = {
    img: string
    category: string
    desc: string
    authorImg: string
    author: string
}
const Articles = ({ img, category, desc, authorImg, author }: Props) => {
    return (
        <>
            <article>
                <div className="photo">
                    <img src={img} alt="" className="photo" />
                </div>
                <a href=".">{category}</a>
                <p>{desc}</p>
                <div className="author">
                    <img src={authorImg} alt="" className="authorImg" />
                    <h3>
                        <span>by </span>
                        {author}
                    </h3>
                </div>
                <button className="like"></button>
            </article>
        </>
    )
}
export default Articles
