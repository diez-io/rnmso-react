import classNames from 'classnames/bind';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Main.module.scss';
import stylesPhoto from '@/styles/PagePhotos.module.scss';
import Tags from '@/components/Tags';
import {
  getPhotoPosts,
  loadPhotoTags,
  loadPhotoSlider,
} from '@/lib/loadPhotoPage';

const cx = classNames.bind(styles);
const cxPhoto = classNames.bind(stylesPhoto);

export async function getStaticProps() {
  const photoPosts = await getPhotoPosts();
  const photoSlider = await loadPhotoSlider();
  const tags = await loadPhotoTags();
  return {
    props: {
      bodyClass: 'bg-brown',
      photoPosts,
      photoSlider,
      tags,
    },
  };
}

export default function Photo({ photoPosts, photoSlider, tags }) {
  const [posts, setPosts] = useState(photoPosts);
  const [filter, setFilter] = useState([]);

  const handleClick = (e) => {
    let dataFilter = e?.currentTarget.value;
    dataFilter = filter.includes(dataFilter)
      ? filter.filter((f) => f !== dataFilter)
      : filter.concat(dataFilter);
    getPhotoPosts(dataFilter.join(','))
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
    setFilter(dataFilter);
  };
  return (
    <>
      <div className="container">
        <section className={cx('page-title')}>
          <h1 className="h1">Фото</h1>
          <div className={cx('page-title__links')}>
            <Link className="link" href="/video">
              Видео
            </Link>
            <Link className={classNames('link', cx('selected'))} href="/photo">
              Фото
            </Link>
            <Link className="link" href="/news">
              Новости
            </Link>
            <Link className="link" href="#">
              Пресса
            </Link>
          </div>
        </section>
        <Tags
          tags={tags}
          activeTags={filter}
          getPosts={(e) => handleClick(e)}
        />
      </div>
      <section className={cxPhoto('page-photos')}>
        <div className="container">
          <PhotoItems posts={posts} />
        </div>
        <PhotoSlider posts={photoSlider} />
      </section>
    </>
  );
}

function PhotoItems({ posts }) {
  return (
    <div className={cxPhoto('photo-articles')}>
      <div className={cx('d-flex', 'flex-wrap')}>
        <article
          key={`photo_${posts[0].id}`}
          className={cxPhoto('photo-article', 'photo-article_first')}
        >
          <Link className="link" href={`/photo/${posts[0].id}`}>
            <picture className={cxPhoto('photo-article__img')}>
              <Image width={200} height={200} src={posts[0].image} alt="" />
            </picture>
            <div className={cxPhoto('photo-article__text')}>
              <h4 className="h4">{posts[0].title}</h4>
              <p>{posts[0].count}</p>
            </div>
          </Link>
        </article>

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
                    <Image width={200} height={200} src={post.image} alt="" />
                  </picture>
                  <div className={cxPhoto('photo-article__text')}>
                    <h4 className="h4">{post.title}</h4>
                    <p>{post.count}</p>
                  </div>
                </Link>
              </article>
            )
        )}
      </div>
    </div>
  );
}
function PhotoSlider({ posts }) {
  return (
    <div className={cxPhoto('photo-slider')}>
      {posts.map((post) => (
        <article
          key={`slider_${post.id}`}
          className={cxPhoto('photo-slider-article')}
        >
          <Link className="link" href={`/photo/${post.id}`}>
            <picture className={cxPhoto('photo-slider-article__img')}>
              <Image width={200} height={200} src={post.image} alt="" />
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
