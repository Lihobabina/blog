import './Main.scss'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Destinations from '../../pages/Destinations/Destinations'
import Photography from '../../pages/Photography/Photography'
import Culture from '../../pages/Culture/Culture'
import Liked from '../../pages/Liked/Liked'
type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/Destinations"
                            element={<Destinations />}
                        ></Route>
                        <Route
                            path="/Photography"
                            element={<Photography />}
                        ></Route>
                        <Route path="/Culture" element={<Culture />}></Route>
                        <Route path="/Liked" element={<Liked />}></Route>
                    </Routes>
                </div>
            </main>
        </>
    )
}
export default Main
