import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from '../styles/Main.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx('header')}>
      <picture className={cx('header__banner')}>
        <source
          srcSet="images/dest/main/banner-main-mob.png"
          media="(max-width: 991px)"
        />
        <img src="images/dest/main/banner-main.png" alt="" />
      </picture>
      <div className={cx('container')}>
        <div className={cx('d-flex', 'align-center', 'header__top')}>
          <div className={cx('header__logo', 'header__logo_mob')}>
            <img src="images/dest/logo.svg" alt="" />
          </div>
          <nav className={cx('menu-main')}>
            <ul className={cx('ul-nostyle')}>
              <li className={cx('menu-main__item')}>
                <Link href="#">оркестр</Link>
              </li>
              <li className={cx('menu-main__item')}>
                <Link href="/calendar">афиша</Link>
              </li>
              <li className={cx('menu-main__item')}>
                <Link href="#">конкурс</Link>
              </li>
              <li className={cx('menu-main__item')}>
                <Link href="#">фото и видео</Link>
              </li>
              <li className={cx('menu-main__item')}>
                <Link href="#">информация</Link>
              </li>
            </ul>
          </nav>
          <div className={cx('header__links')}>
            <a className={cx('header__links-lang')} href="#">
              Eng
            </a>
            <a className={styles['header__links-search']} href="#">
              <img
                className={styles['icon-search']}
                src="images/dest/icons/search-icon.svg"
              />
            </a>
          </div>
        </div>
        <div className={cx('d-flex', 'align-end', 'grid-6', 'header__bottom')}>
          <div className={cx('grid__inner', 'header__logo')}>
            <img src="images/dest/logo.svg" alt="" />
          </div>
          <div className={cx('grid__inner', 'header__text')}>
            Российский национальный молодежный симфонический оркестр
          </div>
        </div>
      </div>
    </header>
  );
}
