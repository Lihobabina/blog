import Slider from './Slider/Slider'
import './Main.scss'
import ArticlesList from './ArticlesList/ArticlesList'
import TravelTips from './TravelTips/TravelTips'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <main>
                <div className="container">
                    <Slider />
                    <ArticlesList />
                    <TravelTips />
                </div>
            </main>
        </>
    )
}
export default Main
