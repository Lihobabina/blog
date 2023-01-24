import { ArticleProps } from '../../utils/articlesArray'
import './LikedArticle.scss'
import { Link } from 'react-router-dom'

type Props = {
    article: ArticleProps
    removeProductFromCart: (id: number) => void
}

const LikedArticle = ({ article, removeProductFromCart }: Props) => {
    return (
        <>
            <article>
                <div className="photo">
                    <img src={article.img} alt="" className="photo" />{' '}
                    <div>
                        <button
                            className="liked"
                            onClick={() => removeProductFromCart(article.id)}
                        ></button>
                    </div>
                </div>
                <a href=".">{article.category}</a>
                <Link to={`/articles/${article.id}`} className="navLink">
                    {article.desc}
                </Link>{' '}
                <div className="author">
                    <img src={article.authorImg} alt="" className="authorImg" />
                    <h3>
                        <span>by </span>
                        {article.author}
                    </h3>
                </div>
            </article>
        </>
    )
}
export default LikedArticle
