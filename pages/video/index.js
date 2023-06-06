import classNames from 'classnames/bind';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Main.module.scss';
import Tags from '@/components/Tags';
import { getVideoPosts, loadVideoTags } from '@/lib/loadVideoPage';
import Player from '@/components/Player';
import stylesVideo from '@/styles/PageVideos.module.scss';

const cx = classNames.bind(styles);
const cxVideo = classNames.bind(stylesVideo);

export async function getStaticProps() {
  const videoPosts = await getVideoPosts();
  const tags = await loadVideoTags();
  return {
    props: {
      bodyClass: 'bg-gray40',
      videoPosts,
      tags,
    },
  };
}

export default function Video({ videoPosts, tags }) {
  const [posts, setPosts] = useState(videoPosts);
  const [filter, setFilter] = useState([]);

  const handleClick = (e) => {
    let dataFilter = e?.currentTarget.value;
    dataFilter = filter.includes(dataFilter)
      ? filter.filter((f) => f !== dataFilter)
      : filter.concat(dataFilter);
    getVideoPosts(dataFilter.join(','))
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
    setFilter(dataFilter);
  };
  return (
    <div className="container">
      <section className={cx('page-title')}>
        <h1 className="h1">Видео</h1>
        <div className={cx('page-title__links')}>
          <Link className={classNames('link', cx('selected'))} href="/video">
            Видео
          </Link>
          <Link className="link" href="/photo">
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
      <Tags tags={tags} activeTags={filter} getPosts={(e) => handleClick(e)} />
      <section className={cxVideo('page-videos')}>
        <VideoItems posts={posts} />
      </section>
    </div>
  );
}

function VideoItems({ posts }) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');

  const handleToggle = (url) => {
    setOpen((prev) => !prev);
    !open ? setUrl(url) : '';
  };
  const onCloseModal = () => setOpen(false);
  return (
    <div className={cxVideo('video-articles')}>
      <article
        key={`video_${posts[0].id}`}
        className={classNames(
          cxVideo('video-article', 'video-article_first'),
          cx('d-flex')
        )}
      >
        <div
          className={classNames(
            cxVideo('video-article__text'),
            cx('grid__inner', 'grid__inner_50')
          )}
        >
          <p className={cxVideo('video-article__date')}>
            {posts[0].date} · {posts[0].place}
          </p>
          <h4 className="h4">
            <Link className="link" href={`/video/${posts[0].id}`}>
              {posts[0].title}
            </Link>
          </h4>
          <div className={cxVideo('video-article__info')}>
            <p dangerouslySetInnerHTML={{ __html: posts[0].description }} />
            <p dangerouslySetInnerHTML={{ __html: posts[0].program }} />
          </div>
        </div>
        <div className={cx('grid__inner', 'grid__inner_50')}>
          <div className={cx('square-img__item')}>
            <picture
              className={cx('square-img__body', 'square-img__body_circle')}
              onClick={() => handleToggle(posts[0].url)}
            >
              <Image width={200} height={200} src={posts[0].image} alt="" />
            </picture>
          </div>
        </div>
      </article>
      <div className={cx('d-flex', 'flex-wrap')}>
        {posts.map(
          (post, i) =>
            i > 0 && (
              <article
                key={`video_${post.id}`}
                className={classNames(
                  cxVideo('video-article'),
                  cx('grid__inner', 'grid__inner_50')
                )}
              >
                <picture
                  className={cxVideo('video-article__img')}
                  onClick={() => handleToggle(post.url)}
                >
                  <Image width={200} height={200} src={post.image} alt="" />
                </picture>
                <div className={cxVideo('video-article__text')}>
                  <p className={cxVideo('video-article__date')}>
                    {post.date} · {post.place}
                  </p>
                  <h4 className="h4">
                    <Link className="link" href={`/video/${post.id}`}>
                      {post.title}
                    </Link>
                  </h4>
                </div>
              </article>
            )
        )}
      </div>
      <Player open={open} closeModal={onCloseModal} url={url} />
    </div>
  );
}
