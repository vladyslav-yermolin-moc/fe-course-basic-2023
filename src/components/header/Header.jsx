import logo from '../../assets/img/logo.png';
import css from './Header.module.css';
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.header__box}>
                <div className={css.header__boxContent}>
                    <div className={css.header__logoSection}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={css.header__menuSection}>
                        <ul className={css.menu__list}>
                            <li>
                                <Link to="/calculator" className={css.menu__listLink}>Calculator</Link>
                            </li>
                            <li>
                                <a href="/" className={css.menu__listLink}>Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
