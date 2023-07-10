import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from '@/styles/Main.module.scss';
import stylesPhoto from '@/styles/PageMainPhoto.module.scss';
import { getNoun } from '@/pages/api/noun';

const cx = classNames.bind(styles);
const cxPhoto = classNames.bind(stylesPhoto);

export function Photo({ posts }) {
  return (
    <div className={cxPhoto('photo-articles')}>
      <article
        key={`photo_${posts[0].id}`}
        className={cxPhoto('photo-article', 'photo-article_first')}
      >
        <Link className="link" href={`/photo/${posts[0].id}`}>
          <picture className={cxPhoto('photo-article__img')}>
            <Image
              width={200}
              height={200}
              src={`https://rnmso.ru${posts[0].main_photo.image}`}
              alt=""
            />
          </picture>
          <div className={cxPhoto('photo-article__text')}>
            <h4 className="h4">{posts[0].title}</h4>
            <p>{`${posts[0].count_photo} ${getNoun(
              posts[0].count_photo,
              'фотография',
              'фотографии',
              'фотографий'
            )}`}</p>
          </div>
        </Link>
      </article>
      <div className={cx('d-flex', 'flex-wrap')}>
        {posts.map(
          (post, i) =>
            i > 0 && (
              <article
                key={`photo_${post.id}`}
                className={classNames(
                  cxPhoto('photo-article'),
                  cx('grid__inner', 'grid__inner_50')
                )}
              >
                <Link className="link" href={`/photo/${post.id}`}>
                  <picture className={cxPhoto('photo-article__img')}>
                    <Image
                      width={200}
                      height={200}
                      src={`https://rnmso.ru${post.main_photo.image}`} // временно!!!
                      alt=""
                    />
                  </picture>
                  <div className={cxPhoto('photo-article__text')}>
                    <h4 className="h4">{post.title}</h4>
                    <p>{`${post.count_photo} ${getNoun(
                      post.count_photo,
                      'фотография',
                      'фотографии',
                      'фотографий'
                    )}`}</p>
                  </div>
                </Link>
              </article>
            )
        )}
      </div>
    </div>
  );
}

export function PhotoSlider({ posts }) {
  return (
    <div className={cxPhoto('photo-slider')}>
      {posts.map((post) => (
        <article
          key={`slider_${post.id}`}
          className={cxPhoto('photo-slider-article')}
        >
          <Link className="link" href={`/photo/${post.id}`}>
            <picture className={cxPhoto('photo-slider-article__img')}>
              <Image width={200} height={200} src={`https://rnmso.ru${post.main_photo.image}`} alt="" />
            </picture>
            <div className={cxPhoto('photo-slider-article__text')}>
              <h5 className="h5">{post.title}</h5>
              <p>{post.count}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
