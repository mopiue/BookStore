import { useState } from 'react'
import InputSearch from '../InputSearch/InputSearch'
import styles from './BurgerMenu.module.css'
import 'remixicon/fonts/remixicon.css'

function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <i
        className={`ri-menu-fill ${styles.burgerMenuOpenButton}`}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && (
        <ul className={styles.burgerMenu}>
          <i
            className={`ri-close-line ${styles.burgerMenuCloseButton}`}
            onClick={() => setMenuOpen(false)}
          />
          <InputSearch
            svgFilter="invert(100%) sepia(1%) saturate(2%) hue-rotate(115deg) brightness(116%) contrast(100%)"
            textColor="#FFFFFF"
            inputWidth="290px"
          />
          <li>Menu item</li>
          <li>Menu item</li>
          <li>Menu item</li>
        </ul>
      )}
    </div>
  )
}

export default BurgerMenu
