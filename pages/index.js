import Link from 'next/link';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';

import { MainLayout } from '@/components/MainLayout';
import Afisha from '@/components/main-page/Afisha';
import Orchestra from '@/components/main-page/Orchestra';
import Masters from '@/components/main-page/Masters';
import News from '@/components/main-page/News';
import Video from '@/components/main-page/Video';
import { Photo, PhotoSlider } from '@/components/main-page/Photo';

import { loadAfisha } from '@/lib/loadAfisha';
import { loadNewsMain } from '@/lib/loadNews';
import { loadVideo } from '@/lib/loadVideo';
import { loadPhoto } from '@/lib/loadPhoto';

import stylesMainPage from '@/styles/PageMain.module.scss';

const cxMain = classNames.bind(stylesMainPage);

export async function getStaticProps() {
  const afisha = await loadAfisha('limit=4');
  const news = await loadNewsMain();
  const video = await loadVideo('limit=7');
  const photo = await loadPhoto('limit=5');
  const photoSlider = await loadPhoto('limit=10');

  return {
    props: { afisha, news, video, photo, photoSlider },
  };
}

export default function Main({
  afisha,
  news,
  video,
  photo,
  photoSlider,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg(''));
    dispatch(setActiveMenu(null));
  });
  return (
    <>
      <section
        className={classNames(
          'bg-green',
          cxMain('section-main', 'section-main__poster')
        )}
      >
        <div className="container">
          <h2 className="h2">Афиша</h2>
          <Afisha posts={afisha} />
          <Link href="/calendar" className={cxMain('link-main__all')}>
            все концерты
          </Link>
          <div className="clearfix" />
        </div>
      </section>

      <section className={cxMain('section-main', 'section-main__orchestra')}>
        <div className="container">
          <h2 className="h2">Оркестр</h2>
          <Orchestra />
          <Link className={cxMain('link-main__all')} href="/staff">
            состав оркестра
          </Link>
          <div className="clearfix" />
        </div>
      </section>

      <section className={cxMain('section-main', 'section-main__masters')}>
        <div className="container">
          <h2 className="h2">Мэтры об оркестре</h2>
          <Masters />
        </div>
      </section>

      <section
        className={classNames(
          'bg-purple',
          cxMain('section-main', 'section-main__news')
        )}
      >
        <div className="container">
          <h2 className="h2">Новости</h2>
          <News posts={news} />
          <Link className={cxMain('link-main__all')} href="/news">
            все новости
          </Link>
          <div className="clearfix" />
        </div>
      </section>

      <section
        className={classNames(
          'bg-gray40',
          cxMain('section-main', 'section-main__video')
        )}
      >
        <div className="container">
          <h2 className="h2">Видео</h2>
          <Video posts={video} />
        </div>
      </section>

      <section
        className={classNames(
          'bg-brown',
          cxMain('section-main', 'section-main__photo')
        )}
      >
        <div className="container">
          <h2 className="h2">Процесс</h2>
          <Photo posts={photo} />
        </div>
        <PhotoSlider posts={photoSlider} />
        <div className="container">
          <Link className={cxMain('link-main__all')} href="/photo">
            все фотографии
          </Link>
        </div>
      </section>
    </>
  );
}

Main.getLayout = (page) => <MainLayout>{page}</MainLayout>;
