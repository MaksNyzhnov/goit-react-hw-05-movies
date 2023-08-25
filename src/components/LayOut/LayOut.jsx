import { NavLink, Outlet } from "react-router-dom";
import css from './Layout.module.css'; // Зверніть увагу на імпорт через `css`

const Layout = () => {
    return (
        <><header className={css.header}> 
                <nav className={css.headerLinks}> 
                    <NavLink className={css.headerLink} to='/home'>Home</NavLink> 
                    <NavLink className={css.headerLink} to='/Movies'>Movies</NavLink>
                </nav>
            </header>
        <div className={css.container}> 
            
            <Outlet/>
        </div></>
    )
}

export default Layout;