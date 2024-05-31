import { Link, NavLink } from "react-router-dom";
import './Header.css';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

export const Header = () => {
  const cartList = useSelector(state => state.cartState.cartList);

  return (
    <header>
      <Link to='/' className='logo'>
        <img src={Logo} alt='VibeHarbor'/>
        <span>VibeHarbor</span>
      </Link>
      <nav className='navigation'>
        <NavLink to='/' className='link' end>Home</NavLink>
        <NavLink to='/cart' className='link'>Cart</NavLink>
        <NavLink to='/about' className='link'>About</NavLink>
      </nav>
      <Link to='/cart' className='items'>
        <span><FontAwesomeIcon icon={faCartShopping} className='cart-icon'/> <strong> {cartList.length}</strong> </span>
      </Link>
    </header>
  );
};
