import BurgerMenu from '../BurgerMenu/BurgerMenu'
import InputSearch from '../InputSearch/InputSearch'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <div className="header__logo">
        <img
          className={styles.headerLogo}
          src={`${process.env.PUBLIC_URL}/assets/images/header/header__logo.svg`}
          alt="Библиотечная Книжный магазин"
        />
      </div>
      <nav className={styles.headerMenu}>
        <ul className={styles.headerMenuList}>
          <li className={styles.headerMenuItem}>
            <a href="#catalog" className={styles.headerMenuLink}>
              Акции
            </a>
          </li>
          <li className={styles.headerMenuItem}>
            <a href="#catalog" className={styles.headerMenuLink}>
              Каталог
            </a>
          </li>
          <li className={styles.headerMenuItem}>
            <a href="#catalog" className={styles.headerMenuLink}>
              Доставка
            </a>
          </li>
          <li className={styles.headerMenuItem}>
            <a href="#catalog" className={styles.headerMenuLink}>
              О магазине
            </a>
          </li>
          <li className={styles.headerMenuItem}>
            <a href="#catalog" className={styles.headerMenuLink}>
              Блог
            </a>
          </li>
        </ul>
      </nav>
      <InputSearch textColor="#241400" inputWidth="200px" />
      <div className={styles.headerActions}>
        <div className={styles.headerFavorites}>
          <svg
            width="38"
            height="39"
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0834 5.61914C6.71183 5.61914 3.16675 9.12781 3.16675 13.4566C3.16675 16.9511 4.55216 25.2446 18.1894 33.6283C18.4337 33.7769 18.7141 33.8556 19.0001 33.8556C19.286 33.8556 19.5665 33.7769 19.8107 33.6283C33.448 25.2446 34.8334 16.9511 34.8334 13.4566C34.8334 9.12781 31.2883 5.61914 26.9168 5.61914C22.5452 5.61914 19.0001 10.3691 19.0001 10.3691C19.0001 10.3691 15.455 5.61914 11.0834 5.61914Z"
              stroke="#E16A00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.headerCart}>
          <svg
            width="38"
            height="37"
            viewBox="0 0 38 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.875 6.94312V9.25556H34.4375V13.8331L31.8027 21.974H11.1278L8.15902 1.15918H1.1875V3.47163H6.09098L9.05973 24.2865H33.5445L36.8125 14.1888V6.94312H11.875Z"
              fill="#E16A00"
            />
            <path
              d="M13.1355 26.618C11.8762 26.6194 10.6688 27.1072 9.77832 27.9742C8.88784 28.8412 8.38693 30.0168 8.3855 31.2429C8.3855 32.4695 8.88594 33.6459 9.77674 34.5132C10.6675 35.3806 11.8757 35.8678 13.1355 35.8678C14.3953 35.8678 15.6035 35.3806 16.4943 34.5132C17.3851 33.6459 17.8855 32.4695 17.8855 31.2429C17.8841 30.0168 17.3832 28.8412 16.4927 27.9742C15.6022 27.1071 14.3948 26.6194 13.1355 26.618ZM13.1355 33.5554C12.6658 33.5554 12.2066 33.4198 11.816 33.1657C11.4255 32.9116 11.121 32.5504 10.9413 32.1279C10.7615 31.7053 10.7145 31.2404 10.8061 30.7918C10.8978 30.3432 11.124 29.9312 11.4561 29.6078C11.7883 29.2844 12.2115 29.0641 12.6722 28.9749C13.1329 28.8857 13.6104 28.9315 14.0444 29.1065C14.4783 29.2815 14.8493 29.5779 15.1102 29.9582C15.3712 30.3385 15.5105 30.7856 15.5105 31.2429C15.5097 31.856 15.2593 32.4438 14.8141 32.8773C14.3688 33.3108 13.7652 33.5547 13.1355 33.5554Z"
              fill="#E16A00"
            />
            <path
              d="M29.7605 26.618C28.5012 26.6194 27.2938 27.1072 26.4033 27.9742C25.5128 28.8412 25.0119 30.0168 25.0105 31.2429C25.0105 32.4695 25.5109 33.6459 26.4017 34.5132C27.2925 35.3806 28.5007 35.8678 29.7605 35.8678C31.0203 35.8678 32.2285 35.3806 33.1193 34.5132C34.0101 33.6459 34.5105 32.4695 34.5105 31.2429C34.5091 30.0168 34.0082 28.8412 33.1177 27.9742C32.2272 27.1071 31.0198 26.6194 29.7605 26.618ZM29.7605 33.5554C29.2908 33.5554 28.8316 33.4198 28.441 33.1657C28.0505 32.9116 27.746 32.5504 27.5663 32.1279C27.3865 31.7053 27.3395 31.2404 27.4311 30.7918C27.5228 30.3432 27.749 29.9312 28.0811 29.6078C28.4133 29.2844 28.8365 29.0641 29.2972 28.9749C29.7579 28.8857 30.2354 28.9315 30.6694 29.1065C31.1033 29.2815 31.4743 29.5779 31.7352 29.9582C31.9962 30.3385 32.1355 30.7856 32.1355 31.2429C32.1348 31.856 31.8843 32.4438 31.4391 32.8773C30.9938 33.3108 30.3902 33.5547 29.7605 33.5554Z"
              fill="#E16A00"
            />
          </svg>
          <div className={styles.headerShoppingCart}>
            <span className={styles.headerCartAmount}>3 990 руб.</span>
            <div className={styles.headerCartArrow}></div>
          </div>
        </div>
      </div>
      <BurgerMenu />
    </div>
  )
}

export default Header
