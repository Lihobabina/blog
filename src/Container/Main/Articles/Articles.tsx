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
                <img src={img} alt="" className="photo" />
                <a href=".">{category}</a>
                <p>{desc}</p>
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
