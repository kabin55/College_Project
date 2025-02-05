import {Link, Outlet} from 'react-router-dom';
export function Layout() {
    return (
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
        <Outlet />
        </>
    ) 
}