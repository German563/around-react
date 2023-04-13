import header__logo from '../../src/images/header__logo.svg';
function Header() {
    return (

<header className="header">
<img
  className="header__logo"
  src={header__logo}
  alt="header__logo"
/>
</header>

  );
  
}
export default Header