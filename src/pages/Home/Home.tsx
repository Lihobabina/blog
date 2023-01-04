import ArticlesList from '../../Container/Main/ArticlesList/ArticlesList'
import Slider from '../../Container/Main/Slider/Slider'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Slider />
            <ArticlesList />
        </>
    )
}
export default Home
