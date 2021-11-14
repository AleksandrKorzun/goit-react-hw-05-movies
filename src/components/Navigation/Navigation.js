import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/MainRoutes";
import style from './Navigation.module.css'
const Navigation = () => (
    <nav>
        <ul className={style.navList}>

        {mainRoutes.map(({path, name, exact})=> (
            <li key={path}>
                <NavLink 
                exact={exact} 
                to={path} 
                className={style.navLink}
                activeClassName={style.navLinkActive}
                >
                {name}
            </NavLink> 
            </li>
        ))}
        </ul>
        
    </nav>
)
export default Navigation;