import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import styles from '@/styles/Main.module.scss';
import Tags from '@/components/Tags';
import {
  getVideoPosts,
  getVideoPostsLive,
  loadVideoTags,
} from '@/lib/loadVideoPage';
import Player from '@/components/Player';
import stylesVideo from '@/styles/PageVideos.module.scss';
import PageTitle from '../../components/PageTitle';
import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';
import ModalWindow from '@/components/ModalWindow';

const cx = classNames.bind(styles);
const cxVideo = classNames.bind(stylesVideo);

export async function getStaticProps() {
  const videoPosts = await getVideoPostsLive();
  const tags = await loadVideoTags();
  return {
    props: {
      videoPosts,
      tags,
    },
  };
}

export default function Video({ videoPosts, tags }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-gray40'));
    dispatch(setActiveMenu('media'));
  });

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
      <PageTitle
        type="links"
        title="Видео"
        links={[
          { link: '/video', name: 'Видео', selected: true },
          { link: '/photo', name: 'Фото' },
          { link: '/news', name: 'Новости' },
          { link: '/press', name: 'Пресса' },
        ]}
      />
      <Tags
        tags={tags}
        activeTags={filter}
        nameField="title"
        filterField="slug"
        getPosts={(e) => handleClick(e)}
      />
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
              onClick={() => handleToggle(posts[0].video)}
            >
              <Image
                width={200}
                height={200}
                src={posts[0].video_thumbnail}
                alt=""
              />
            </picture>
          </div>
        </div>
      </article>
      <div className={cx('d-flex', 'flex-wrap')}>
        {posts.map(
          (post, i) =>
            i > 0 &&
            post.video &&
            post.video_thumbnail && (
              <article
                key={`video_${post.id}`}
                className={classNames(
                  cxVideo('video-article'),
                  cx('grid__inner', 'grid__inner_50')
                )}
              >
                <picture
                  className={cxVideo('video-article__img')}
                  onClick={() => handleToggle(post.video)}
                >
                  <Image
                    width={200}
                    height={200}
                    src={post.video_thumbnail}
                    alt=""
                  />
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
      <ModalWindow open={open} closeModal={onCloseModal} type="video">
        <Player url={url} />
      </ModalWindow>
    </div>
  );
}
