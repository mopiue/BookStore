import { useState } from 'react'
import InputSearch from '../InputSearch/InputSearch'
import Menu from '../Menu/Menu'
import styles from './BurgerMenu.module.css'
import 'remixicon/fonts/remixicon.css'

function BurgerMenu({ menuItems }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <i
        className={`ri-menu-fill ${styles.burgerMenuOpenButton}`}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && (
        <div className={styles.burger}>
          <i
            className={`ri-close-line ${styles.burgerMenuCloseButton}`}
            onClick={() => setMenuOpen(false)}
          />
          <InputSearch
            svgFilter="invert(100%) sepia(1%) saturate(2%) hue-rotate(115deg) brightness(116%) contrast(100%)"
            textColor="#FFFFFF"
            inputWidth="290px"
          />
          <div className={styles.burgerMenu}>
            <ul className={styles.burgerMenuList}>
              <li className={styles.burgerMenuItem}>
                <Menu menuItems={menuItems} textColor="#FFFFFF" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default BurgerMenu
