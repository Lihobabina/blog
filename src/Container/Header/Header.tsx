import './Header.scss'
import Menu from '../../Components/Menu/Menu'
import lines from './assets/lines.png'
import search from './assets/search.png'
import logo from './assets/logo.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import pinterest from './assets/pinterest.png'
import youtube from './assets/youtube.png'
import email from './assets/email.png'

type Props = {}
const Header = (props: Props) => {
    return (
        <>
            <header>
                <div className="cont">
                    <div className="row1">
                        <div className="col1">
                            <a href=".">
                                <img src={lines} alt="" />
                            </a>
                            <a href=".">
                                <img src={search} alt="" />
                            </a>
                        </div>
                        <div className="col2">
                            <a href=".">
                                <img src={logo} alt="" />
                            </a>
                            <h3>Backpacker Goes Around The World</h3>
                        </div>
                        <div className="col3">
                            <a href=".">
                                <img src={facebook} alt="" />
                            </a>
                            <a href=".">
                                <img src={pinterest} alt="" />
                            </a>
                            <a href=".">
                                <img src={instagram} alt="" />
                            </a>
                            <a href=".">
                                <img src={youtube} alt="" />
                            </a>
                            <a href=".">
                                <img src={twitter} alt="" />
                            </a>
                            <a href=".">
                                <img src={email} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="row2">
                        <Menu />
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header
