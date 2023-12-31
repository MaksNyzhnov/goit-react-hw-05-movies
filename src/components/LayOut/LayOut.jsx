import { NavLink, Outlet, useLocation } from "react-router-dom";
import css from './Layout.module.css'; // Зверніть увагу на імпорт через `css`
import { Suspense } from "react";


const Layout = () => {
    const location = useLocation()
    return (
        <><header className={css.header}> 
                <nav className={css.headerLinks}> 
                <NavLink className={css.headerLink} to='/home' state={{ from: location.pathname}}>Home</NavLink> 
                    <NavLink className={css.headerLink} to='/movies' state={{ from: location.pathname}} >Movies</NavLink>
                </nav>
            </header>
        <div className={css.container}> 
            
                <Suspense>
                    <Outlet/>
                </Suspense>
        </div></>
    )
}

export default Layout;