import './Menu.scss'

type Props = {}
const Menu = (props: Props) => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Destinations</a>
                </li>
                <li>
                    <a href="">Photography</a>
                </li>
                <li>
                    <a href="">Culture</a>
                </li>
                <li>
                    <a href="">Liked</a>
                </li>
            </ul>
        </nav>
    )
}
export default Menu
