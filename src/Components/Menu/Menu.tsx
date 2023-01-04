import './Menu.scss'
import MenuItem from './MenuItem'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <nav>
                <ul>
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/Destinations">Destinations</MenuItem>
                    <MenuItem to="/Photography">Photography</MenuItem>
                    <MenuItem to="/Culture">Culture</MenuItem>
                    <MenuItem to="/Liked">Liked</MenuItem>
                </ul>
            </nav>
        </>
    )
}
export default Menu
