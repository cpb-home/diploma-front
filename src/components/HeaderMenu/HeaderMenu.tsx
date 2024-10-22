import { NavLink } from "react-router-dom";
import menuItems from "../../assets/linksList";

const HeaderMenu = () => {

  const selected = ({ isActive }: { isActive: boolean }) => isActive ? 'header__menu-link header__menu-link-active' : 'header__menu-link';

  return (
    <nav className="header__menuCont">
      <ul className="header__menuList">
        {menuItems.map((item, id) => 
          <li className="header__menuList__item" key={id}>
            <NavLink className={selected} to={item.link} title={item.text}>{item.text}</NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default HeaderMenu
