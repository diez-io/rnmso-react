import Link from 'next/link';
import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from '@/styles/Main.module.scss';
import stylesHeader from '@/styles/Header.module.scss';
import NavBar from './NavBar';

const cx = classNames.bind(styles);
const cxHeader = classNames.bind(stylesHeader);

export default function HeaderInner() {
  return (
    <header className={cxHeader('page-header')}>
      <div className="container">
        <div
          className={classNames(cx('d-flex'), cxHeader('page-header__inner'))}
        >
          <div className={cxHeader('header__logo', 'header__logo_mob')}>
            <Link href="/">
              <Image
                className="svg_color"
                src="/images/dest/logo.svg"
                height="50"
                width="312"
                alt=""
              />
            </Link>
          </div>
          <div className={cx('d-flex', 'justify-start')}>
            <div
              className={cxHeader('header__logo', 'header__logo_page')}
            >
              <Link href="/">
                <Image
                  className="svg_color"
                  src="/images/dest/logo-small-w.svg"
                  height="60"
                  width="111"
                  alt=""
                />
              </Link>
            </div>
            <NavBar isInner />
          </div>
          <div className={cxHeader('header__links', 'header__links_page')}>
            <Link className={`${cxHeader('header__links-lang')} link`} href="#">
              Eng
            </Link>
            <Link className={cxHeader('header__links-search')} href="#">
              <Image
                className={classNames(cxHeader('icon-search'), 'svg_color')}
                height="25"
                width="24"
                src="/images/dest/icons/search-icon.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
