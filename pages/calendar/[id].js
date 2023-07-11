import classNames from 'classnames/bind';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from '@/styles/Main.module.scss';
import stylesAfishaPage from '@/styles/PageAfisha.module.scss';
import stylesConcertPage from '@/styles/PageConcert.module.scss';
import PhotoCarousel from '@/components/PhotoCarousel';
import PosterItem from '@/components/calendar/PosterItem';
import AbonementsAfisha from '@/components/abonement/AbonementsAfisha';
import { setBg } from '@/store/bgSlice';
import {setActiveMenu} from "@/store/menuSlice";
import {loadAllAfishaIds} from "@/lib/loadAfisha";
import {loadAfisha, loadAfishaPost} from "../../lib/loadAfisha";

const cx = classNames.bind(styles);
const cxAfisha = classNames.bind(stylesAfishaPage);
const cxConcert = classNames.bind(stylesConcertPage);

export async function getStaticPaths() {
  const paths = await loadAllAfishaIds();
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params }) {
  const postData = await loadAfishaPost(params.id);

  const recommendedPosts = await loadAfisha("limit=3");
  return {
    props: {
      postData,
      recommendedPosts,
    },
  };
}
export default function CalendarPost({
  postData,
  recommendedPosts,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-green'));
    dispatch(setActiveMenu('calendar'));
  });

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
            <PhotoCarousel items={postData.images} />
          </div>
          <div
            className={classNames(
              cx('grid__inner', 'grid__inner_50'),
              cxConcert('concert-section__descr')
            )}
          >
            <div className={cxConcert('concert-section__title')}>
              <p> {postData.date}</p>
              <h4 className="h4">{postData.title}</h4>
              <span>{postData.place}</span>
            </div>
            <MobPhoto items={postData.images} />
            <div className={cxConcert('concert-section__links')}>
              {postData.on_sale && postData.subscription && postData.subscription?.show_buy_button &&
                <Link className="btn" href={post.subscription.link_buy}>
                  купить абонемент
                </Link>
              }
              {postData.on_sale && postData.show_buy_button &&
                <Link href={postData.link_buy} className="btn">
                  билеты
                </Link>
              }
              {postData.on_sale === false &&
                <span>билеты проданы</span>
              }
            </div>
            <div
              className={cxConcert('concert-section__text')}
              dangerouslySetInnerHTML={{ __html: postData.event_program }}
            />
          </div>
        </div>
        {postData.about &&
        <div className={classNames(cx('d-flex'), cxConcert('concert-section'))}>
          <div className={cx('grid__inner', 'grid__inner_25')}>
            <h4 className="h4">о концерте</h4>
          </div>
          <div className={cx('grid__inner', 'grid__inner_75')}>
            <div
                className={cxConcert('concert-section__text')}
                dangerouslySetInnerHTML={{__html: postData.about}}
            />
          </div>
        </div>
        }
        {postData.subscription &&
        <div className={cxConcert('concert-section')}>
          <AbonementsAfisha abonement={postData.subscription}/>
        </div>
        }
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
        {items?.map((item, index) => (
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
