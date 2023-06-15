import classNames from 'classnames/bind';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getAfishaPost,
  getAllAfishaPostIds,
  loadAbonementPost,
  loadReccomendedAfishaPosts,
} from '@/lib/loadAfishaPage';
import styles from '@/styles/Main.module.scss';
import stylesAfishaPage from '@/styles/PageAfisha.module.scss';
import stylesConcertPage from '@/styles/PageConcert.module.scss';
import PhotoCarousel from '@/components/PhotoCarousel';
import PosterItem from '@/components/calendar/PosterItem';
import AbonementsAfisha from '@/components/abonement/AbonementsAfisha';
import { setBg } from '@/store/bgSlice';
import {setActiveMenu} from "@/store/menuSlice";

const cx = classNames.bind(styles);
const cxAfisha = classNames.bind(stylesAfishaPage);
const cxConcert = classNames.bind(stylesConcertPage);

export async function getStaticPaths() {
  const paths = await getAllAfishaPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getAfishaPost(params.id);
  const recommendedPosts = await loadReccomendedAfishaPosts(params.id);
  const abonement = await loadAbonementPost(postData[0].abonementId);
  return {
    props: {
      postData,
      recommendedPosts,
      abonement,
    },
  };
}
export default function CalendarPost({
  postData,
  recommendedPosts,
  abonement,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-green'));
    dispatch(setActiveMenu('calendar'));
  });

  const data = postData[0];
  return (
    <div className="container">
      <section className={cxConcert('page-concert')}>
        <div className={classNames(cx('d-flex'), cxConcert('concert-section'))}>
          <div
            className={classNames(
              cx('grid__inner', 'grid__inner_50'),
              cxConcert('concert-section__photo')
            )}
          >
            <PhotoCarousel items={data.slider} />
          </div>
          <div
            className={classNames(
              cx('grid__inner', 'grid__inner_50'),
              cxConcert('concert-section__descr')
            )}
          >
            <div className={cxConcert('concert-section__title')}>
              <p> {data.date}</p>
              <h4 className="h4">{data.title}</h4>
              <span>{data.place}</span>
            </div>
            <MobPhoto items={data.slider} />
            <div className={cxConcert('concert-section__links')}>
              <Link className="btn" href="#">
                билеты
              </Link>
            </div>
            <div
              className={cxConcert('concert-section__text')}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>

        <div className={classNames(cx('d-flex'), cxConcert('concert-section'))}>
          <div className={cx('grid__inner', 'grid__inner_25')}>
            <h4 className="h4">о концерте</h4>
          </div>
          <div className={cx('grid__inner', 'grid__inner_75')}>
            <div
              className={cxConcert('concert-section__text')}
              dangerouslySetInnerHTML={{ __html: data.about }}
            />
          </div>
        </div>

        <div className={cxConcert('concert-section')}>
          <AbonementsAfisha abonement={abonement} />
        </div>
      </section>

      <section className={cxAfisha('page-poster')}>
        <h2 className={cx('h2')}>также рекомендуем</h2>
        <div className={cxAfisha('poster-section')}>
          <div className={cxAfisha('poster-section__items')}>
            {recommendedPosts?.map((post) => (
              <PosterItem key={`item-poster_${post.id}`} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
function MobPhoto({ items }) {
  return (
    <div
      className={classNames(
        cx('grid__inner'),
        cxConcert('concert-section__photo', 'concert-section__photo_mob')
      )}
    >
      <div className={cxConcert('gallery-mob__items')}>
        {items.map((item, index) => (
          <picture
            key={`momImage_${index}`}
            className={cxConcert('gallery-mob__item')}
          >
            <img src={item} alt="" />
          </picture>
        ))}
      </div>
    </div>
  );
}
