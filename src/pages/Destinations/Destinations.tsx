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
const Destinations = (props: Props) => {
    return (
        <>
            <header>Destinations</header>
            {articlesArray
                .filter(
                    ({ category }: ArticleProps) => category === 'destinations'
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
export default Destinations
