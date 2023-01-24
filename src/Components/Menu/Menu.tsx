import './Menu.scss'
import MenuItem from './MenuItem'

type Props = {
    productsInLiked: {
        [id: number]: boolean
    }
}
const Menu = ({ productsInLiked }: Props) => {
    return (
        <>
            <nav>
                <ul>
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/Destinations">Destinations</MenuItem>
                    <MenuItem to="/Photography">Photography</MenuItem>
                    <MenuItem to="/Culture">Culture</MenuItem>
                    <MenuItem to="/Liked">
                        Liked
                        <div className="liked-quantity-bl">
                            {Object.keys(productsInLiked).length}
                        </div>
                    </MenuItem>
                </ul>
            </nav>
        </>
    )
}
export default Menu
