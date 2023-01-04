import Articles from '../Articles/Articles'
import articlesArray from '../../../utils/articlesArray'
import './ArticlesList.scss'
import TravelTips from '../TravelTips/TravelTips'
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
            <header>Articles</header>

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
            <TravelTips />
        </>
    )
}
export default ArticlesList
