import { NavLink } from 'react-router-dom'
import './MenuItem.scss'
type Props = {
    to: string
    children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
    return (
        <>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : 'item')}
                    to={to}
                >
                    {children}
                </NavLink>
            </li>
        </>
    )
}
export default MenuItem
