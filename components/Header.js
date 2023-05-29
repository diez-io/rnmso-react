import Link from 'next/link';
import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from '@/styles/Main.module.scss';
import stylesMenu from '@/styles/MenuMain.module.scss';
import stylesHeader from '@/styles/Header.module.scss';

const cx = classNames.bind(styles);
const cxHeader = classNames.bind(stylesHeader);
const cxMenu = classNames.bind(stylesMenu);

export default function Header() {
  return (
    <header className={cxHeader('header')}>
      <picture className={cxHeader('header__banner')}>
        <source
          srcSet="/images/dest/main/banner-main-mob.png"
          media="(max-width: 991px)"
        />
        <img src="/images/dest/main/banner-main.png" alt="" />
      </picture>
      <div className={`container ${cxHeader('container_header')}`}>
        <div
          className={classNames(
            cx('d-flex', 'align-center'),
            cxHeader('header__top')
          )}
        >
          <div className={cxHeader('header__logo', 'header__logo_mob')}>
            <Image src="images/dest/logo.svg" width="485" height="78" alt="" />
          </div>
          <nav className={cxMenu('menu-main')}>
            <ul className="ul-nostyle">
              <li className={cxMenu('menu-main__item')}>
                <Link href="#">оркестр</Link>
              </li>
              <li className={cxMenu('menu-main__item')}>
                <Link href="/calendar">афиша</Link>
              </li>
              <li className={cxMenu('menu-main__item')}>
                <Link href="#">конкурс</Link>
              </li>
              <li className={cxMenu('menu-main__item')}>
                <Link href="/video">медиа</Link>
              </li>
              <li className={cxMenu('menu-main__item')}>
                <Link href="#">информация</Link>
              </li>
            </ul>
          </nav>
          <div className={cxHeader('header__links')}>
            <a className={cxHeader('header__links-lang')} href="#">
              Eng
            </a>
            <a className={cxHeader('header__links-search')} href="#">
              <Image
                height="25"
                width="24"
                className={cx('icon-search')}
                src="images/dest/icons/search-icon.svg"
              />
            </a>
          </div>
        </div>
        <div
          className={classNames(
            cx('d-flex', 'align-end', 'grid-6'),
            cxHeader('header__bottom')
          )}
        >
          <div
            className={classNames(cx('grid__inner'), cxHeader('header__logo'))}
          >
            <Image src="images/dest/logo.svg" width="485" height="78" alt="" />
          </div>
          <div
            className={classNames(cx('grid__inner'), cxHeader('header__text'))}
          >
            Российский национальный молодежный симфонический оркестр
          </div>
        </div>
      </div>
    </header>
  );
}
