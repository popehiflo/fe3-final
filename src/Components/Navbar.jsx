import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="navbar-logo">DH Odonto</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={toggleTheme}>
          Change to {state.theme === 'light' ? 'dark' : 'light'} theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
