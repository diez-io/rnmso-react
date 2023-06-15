import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import styles from '@/styles/Main.module.scss';
import stylesPhoto from '@/styles/PagePhotos.module.scss';
import Tags from '@/components/Tags';
import {
  getPhotoPosts,
  loadPhotoTags,
  loadPhotoSlider,
} from '@/lib/loadPhotoPage';
import PageTitle from '../../components/PageTitle';
import { setBg } from '@/store/bgSlice';
import {setActiveMenu} from "@/store/menuSlice";

const cx = classNames.bind(styles);
const cxPhoto = classNames.bind(stylesPhoto);

export async function getStaticProps() {
  const photoPosts = await getPhotoPosts();
  const photoSlider = await loadPhotoSlider();
  const tags = await loadPhotoTags();
  return {
    props: {
      photoPosts,
      photoSlider,
      tags,
    },
  };
}

export default function Photo({ photoPosts, photoSlider, tags }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-brown'));
    dispatch(setActiveMenu('media'));
  });

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
        <PageTitle
          type="links"
          title="Фото"
          links={[
            { link: '/video', name: 'Видео' },
            { link: '/photo', name: 'Фото', selected: true },
            { link: '/news', name: 'Новости' },
            { link: '/press', name: 'Пресса' },
          ]}
        />
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
