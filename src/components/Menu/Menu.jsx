import styles from './Menu.module.css'

function Menu({ menuItems, textColor }) {
  return menuItems.map((item, index) => (
    <a
      href={item.link}
      className={styles.menuLink}
      style={{ color: textColor }}
      key={index}
    >
      {item.title}
    </a>
  ))
}

export default Menu
