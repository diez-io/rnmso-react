import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import ModalWindow from '@/components/ModalWindow';
import Player from '@/components/Player';
import styles from '@/styles/Main.module.scss';
import stylesVideo from '@/styles/PageMainVideo.module.scss';
import {displayDateVar2} from "@/pages/api/date";

const cx = classNames.bind(styles);
const cxVideo = classNames.bind(stylesVideo);

export default function Video({ posts }) {
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
            {displayDateVar2(posts[0].date)} · {posts[0].place}
          </p>
          <h4 className="h4">
            <Link className="link" href="#">
              {posts[0].title}
            </Link>
          </h4>
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
                    {displayDateVar2(post.date)} · {post.place}
                  </p>
                  <h4 className="h4">
                    <Link className="link" href="#">
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
