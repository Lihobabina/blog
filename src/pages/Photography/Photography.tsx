import Articles from '../../Container/Main/Articles/Articles'
import articlesArray from '../../utils/articlesArray'
type ArticleProps = {
    img: string
    category: string
    desc: string
    authorImg: string
    author: string
}
type Props = {}
const Photography = (props: Props) => {
    return (
        <>
            <header>Photography</header>
            {articlesArray
                .filter(
                    ({ category }: ArticleProps) => category === 'photography'
                )
                .map(
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
        </>
    )
}
export default Photography
