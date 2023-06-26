import classNames from 'classnames/bind';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '@/styles/Main.module.scss';
import stylesVideoPage from '@/styles/PageVideo.module.scss';
import Player from '@/components/Player';
import { getAllVideoPostIds, getVideoPost } from '@/lib/loadVideoPage';
import PageTitle from '@/components/PageTitle';
import { setBg } from '@/store/bgSlice';
import {setActiveMenu} from "@/store/menuSlice";

const cx = classNames.bind(styles);
const cxVideo = classNames.bind(stylesVideoPage);

export async function getStaticPaths() {
  const paths = await getAllVideoPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getVideoPost(params.id);
  return {
    props: {
      postData,
    },
  };
}
export default function VideoPost({ postData }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-gray40'));
    dispatch(setActiveMenu('media'));
  });

  const data = postData[0];
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');

  const handleToggle = (url) => {
    setOpen((prev) => !prev);
    !open ? setUrl(url) : '';
  };
  const onCloseModal = () => setOpen(false);
  return (
    <div className="container">
      <PageTitle type="inner" titleBack="Видео" linkBack="/video" />
      <section className={cxVideo('page-video')}>
        <div className={classNames(cx('d-flex'), cxVideo('video-section'))}>
          <div
            className={classNames(
              cx('grid__inner', 'grid__inner_50'),
              cxVideo('video-section__video')
            )}
          >
            <picture onClick={() => handleToggle(data.url)}>
              <Image width={200} height={200} src={data.image} alt="" />
            </picture>
          </div>
          <div
            className={classNames(
              cx('grid__inner', 'grid__inner_50'),
              cxVideo('video-section__descr')
            )}
          >
            <div className={cxVideo('video-section__title')}>
              <p> {data.date}</p>
              <h4 className="h4">{data.title}</h4>
              <span>{data.place}</span>
            </div>
            <div
              className={classNames(
                cx('grid__inner'),
                cxVideo('video-section__video', 'video-section__video_mob')
              )}
            >
              <picture onClick={() => handleToggle(data.url)}>
                <Image width={200} height={200} src={data.image} alt="" />
              </picture>
            </div>
            <div
              className={cxVideo('video-section__text')}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>
        {data.program && (
          <div className={classNames(cx('d-flex'), cxVideo('video-section'))}>
            <div className={cx('grid__inner', 'grid__inner_25')}>
              <h4 className="h4">о концерте</h4>
            </div>
            <div className={cx('grid__inner', 'grid__inner_75')}>
              <div
                className={cxVideo('video-section__text')}
                dangerouslySetInnerHTML={{ __html: data.program }}
              />
            </div>
          </div>
        )}
      </section>
      <Player open={open} closeModal={onCloseModal} url={url} />
    </div>
  );
}
