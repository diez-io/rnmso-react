import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Head from 'next/head';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Script from 'next/script';
import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';
import PageTitle from '@/components/PageTitle';
import styles from '@/styles/Main.module.scss';
import stylesContacts from '@/styles/PageContacts.module.scss';

const cx = classNames.bind(styles);
const cxContacts = classNames.bind(stylesContacts);

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-white'));
    dispatch(setActiveMenu('info'));
  });
  return (
    <>
      <Head>
        <title>Контакты</title>
        <meta property="og:title" content="Контакты" key="title" />
      </Head>

      <div className="container">
        <PageTitle title="Контакты" />
        <div
          className={classNames(
            cx('d-flex', 'flex-wrap'),
            cxContacts('page-contacts')
          )}
        >
          <div className={cx('grid__inner_33')}>
            <p>
              <b>адрес</b>
              <br />
              Концертный зал Филармония–2
              <br />
              Мичуринский проспект, Олимпийская деревня, 1
            </p>
          </div>
          <div className={cx('grid__inner_33')}>
            <p>
              <b>общие вопросы</b>
              <br />
              <Link className="link" href="mailto:info@rnmso.ru">
                info@rnmso.ru
              </Link>
            </p>
            <p>
              <b>Запросы прессы</b>
              <br />
              <Link className="link" href="mailto:pr@rnmso.ru">
                pr@rnmso.ru
              </Link>
            </p>
          </div>
          <div className={cx('grid__inner_33')}>
            <p>
              <b>социальные сети</b>
              <br />
              <Link className="link" href="#">
                Вконтакте
              </Link>
              <br />
              <Link className="link" href="#">
                Facebook
              </Link>
              <br />
              <Link className="link" href="#">
                Instagram
              </Link>
              <br />
            </p>
          </div>
          <div className={cx('grid__inner_100')}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Acdcb181de4a0630e61a39ec92523343bae54680f873b2bcfa1e1bc86ea3cbf96&amp;source=constructor"
              width="100%"
              height="668"
              frameBorder="0"
              title="map"
            />
          </div>
        </div>
      </div>
    </>
  );
}
