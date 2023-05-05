import './Header.css';
import logoALT from '../../assets/logos/logoALT.png';
import LoginButton from '../UI/LoginButton';
import BurgerMenu from '../UI/BurgerMenu';

function Header() {
  return (
    <div className="Header">
      <header>
        <a href="#"><img src={logoALT} alt="logo" /></a>
        <div className="header_right">
            <LoginButton/>
            <BurgerMenu/>
        </div>
      </header>
    </div>
  );
}

export default Header;