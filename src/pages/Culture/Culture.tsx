import articlesArray from '../../utils/articlesArray'
import Articles from '../../Container/Main/Articles/Articles'

type ArticleProps = {
    img: string
    category: string
    desc: string
    authorImg: string
    author: string
}
type Props = {}
const Culture = (props: Props) => {
    return (
        <>
            <header>Culture</header>
            {articlesArray
                .filter(({ category }: ArticleProps) => category === 'culture')
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
export default Culture
