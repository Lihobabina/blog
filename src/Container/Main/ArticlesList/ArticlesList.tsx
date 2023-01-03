import Articles from '../Articles/Articles'
import articlesArray from '../../../utils/articlesArray'
import './ArticlesList.scss'
type ArticleProps = {
    img: string
    category: string
    desc: string
    authorImg: string
    author: string
}
type Props = {}
const ArticlesList = (props: Props) => {
    return (
        <>
            <div className="header">
                <h1>Articles</h1>
            </div>

            <div className="articles">
                {articlesArray.map(
                    ({
                        img,
                        category,
                        desc,
                        authorImg,
                        author,
                    }: ArticleProps) => (
                        <Articles
                            img={img}
                            category={category}
                            desc={desc}
                            authorImg={authorImg}
                            author={author}
                        />
                    )
                )}
            </div>
        </>
    )
}
export default ArticlesList
