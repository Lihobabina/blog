import './Footer.scss'
import logo from './assets/logo-white.png'
type Props = {}
const Footer = (props: Props) => {
    return (
        <>
            <footer>
                <div className="footer-cont">
                    <div className="col1">
                        <a href=".">
                            <img src={logo} alt="" />
                        </a>
                        <h2>© 2020 - FOX TRAVEL DEMO.</h2>
                        <h3>Designed by The Fox — Magazine Theme.</h3>
                    </div>
                    <div className="col2">
                        <h2>Categories</h2>
                        <ul>
                            <li>
                                <a href=".">Destinations</a>
                            </li>
                            <li>
                                <a href=".">Photography</a>
                            </li>
                            <li>
                                <a href=".">Culture</a>
                            </li>
                            <li>
                                <a href=".">Liked</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col3">
                        <p>
                            Ei mei scripta intellegat. Verear voluptaria eam at,
                            consul putent eu vel. Pro saepe maluisset ne, audire
                            maiorum forensibus eos et. Diceret detraxit.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
