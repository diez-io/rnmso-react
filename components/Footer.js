import Link from 'next/link';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from '../styles/Main.module.scss';
import { selectBg } from '@/store/bgSlice';

const cx = classNames.bind(styles);

export default function Footer() {
  const bg = useSelector(selectBg);
  useEffect(() => {
    document.body.className = bg;
  }, [bg]);
  return (
    <footer className={cx('footer', 'bg-gray26')}>
      <div className="container">
        <div className={cx('footer-columns')}>
          <div className={cx('footer-column')}>
            <h2 className={cx('footer__main-title')}>
              Российский национальный молодежный симфонический оркестр
            </h2>
          </div>
          <div className={cx('footer-column')}>
            <div className={cx('footer-menu__items')}>
              <div className={cx('footer-menu__item')}>
                <h3 className={cx('footer__title')}>Окрестр</h3>
                <ul className={cx('ul-nostyle')}>
                  <li>
                    <a href="#">Состав оркестра</a>
                  </li>
                  <li>
                    <a href="#">Дирижеры оркестра</a>
                  </li>
                  <li>
                    <a href="#">Солисты и ведущие сезона</a>
                  </li>
                  <li>
                    <a href="#">Контакты</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx('footer-column')}>
            <div className={cx('footer-menu__items')}>
              <div className={cx('footer-menu__item')}>
                <h3 className={cx('footer__title')}>Афиша</h3>
                <ul className={cx('ul-nostyle')}>
                  <li>
                    <a href="#">Календарь концертов</a>
                  </li>
                  <li>
                    <a href="#">Архив</a>
                  </li>
                </ul>
              </div>
              <div className={cx('footer-menu__item')}>
                <h3 className={cx('footer__title')}>Медиа</h3>
                <ul className={cx('ul-nostyle')}>
                  <li>
                    <a href="#">Видео</a>
                  </li>
                  <li>
                    <a href="#">Фото</a>
                  </li>
                  <li>
                    <a href="#">Онлайн-трансляция</a>
                  </li>
                  <li>
                    <a href="#">Новости</a>
                  </li>
                  <li>
                    <a href="#">Пресса</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx('footer-column')}>
            <div className={cx('footer-contacts')}>
              <h3 className={cx('footer__title')}>Контакты</h3>
              <p>
                Концертный зал <nobr>Филармония–2</nobr>
                <br />
                Мичуринский проспект,
                <br />
                Олимпийская деревня, 1<br />
                Часы работы: 10:00—21:00
              </p>
              <p>
                Общие вопросы
                <br />
                <a className={cx('link')} href="mailto:info@rnmso.ru">
                  info@rnmso.ru
                </a>
              </p>
              <p>
                Пресса
                <br />
                <a className={cx('link')} href="mailto:pr@rnmso.ru">
                  pr@rnmso.ru
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={cx('footer-bottom')}>
          <div className={cx('footer-bottom__links')}>
            <Link href="#">
              <img src="/images/dest/logo-small-w.svg" alt="" />
            </Link>
            <Link href="#">
              <img src="/images/dest/logo-footer-1.svg" alt="" />
            </Link>
            <Link href="#">
              <img src="/images/dest/logo-footer-2.svg" alt="" />
            </Link>
          </div>
          <div className={cx('footer-bottom__copyright')}>
            © Российский национальный молодежный симфонический оркестр
          </div>
        </div>
      </div>
    </footer>
  );
}
