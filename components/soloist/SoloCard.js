import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState } from 'react';
import Player from '../Player';
import ModalWindow from '../ModalWindow';
import stylesSolo from '@/styles/PageSolo.module.scss';
import styles from '@/styles/Main.module.scss';

const cxSolo = classNames.bind(stylesSolo);
const cx = classNames.bind(styles);

export default function SoloCard({ data }) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=ysz5S6PUM-U');

  const handleToggle = (url) => {
    setOpen((prev) => !prev);
    !open ? setUrl(url) : '';
  };
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div className={cxSolo('page-solo')}>
        <div className={classNames(cxSolo('solo-section'), cx('d-flex'))}>
          <div className={cxSolo('solo__name')}>
            <h1 className="h1">
              {data.first_name}
              <br />
              {data.last_name}
            </h1>
            <div className={cxSolo('solo__descr')}>
              {data.post ? data.post : data.specialty}
            </div>
          </div>
          <div className={cxSolo('solo__img')}>
            <div
              className={classNames(
                cxSolo('soloists-item__img'),
                cx('square-img__item')
              )}
            >
              <picture className={cx('square-img__body')}>
                <Image width={408} height={408} src={data.image} alt="" />
              </picture>
            </div>
          </div>
        </div>
        {data.biography && (
          <div
            className={classNames(
              cxSolo('solo-section', 'solo-text'),
              cx('d-flex')
            )}
          >
            <div className={cx('grid__inner', 'grid__inner_25')}>
              <h4 className="h4">Биография</h4>
            </div>
            <div
              className={classNames(
                cxSolo('solo-text__inner'),
                cx('grid__inner', 'grid__inner_75')
              )}
              dangerouslySetInnerHTML={{ __html: data.biography }}
            />
          </div>
        )}
        <div
          className={classNames(
            cxSolo('solo-section', 'solo-media'),
            cx('d-flex', 'flex-wrap')
          )}
        >
          <div className={cx('grid__inner_33')}>
            <div className={cxSolo('solo-media__img')}>
              <Image
                width={410}
                height={260}
                src="/images/dest/content/main/photo1.png"
                alt=""
              />
            </div>
          </div>
          <div className={cx('grid__inner_33')}>
            <div className={cxSolo('solo-media__img')}>
              <Image
                width={410}
                height={260}
                src="/images/dest/content/main/photo2.png"
                alt=""
              />
            </div>
          </div>
          <div className={cx('grid__inner_33')}>
            <div className={cxSolo('solo-media__img')}>
              <Image
                width={410}
                height={260}
                src="/images/dest/content/main/photo3.png"
                alt=""
              />
            </div>
          </div>
          <div className={cx('grid__inner_33')}>
            <div
              className={cxSolo('solo-media__video')}
              onClick={() => handleToggle(url)}
            >
              <picture>
                <Image
                  width={410}
                  height={260}
                  src="/images/dest/content/main/video1.png"
                  alt=""
                />
              </picture>
              <div className={cxSolo('solo-media__descr')}>
                Гендель. Оратория Аталия
                <br />
                03.10.2019
              </div>
            </div>
          </div>
          <div className={cx('grid__inner_33')}>
            <div
              className={cxSolo('solo-media__video')}
              onClick={() => handleToggle(url)}
            >
              <picture>
                <Image
                  width={410}
                  height={260}
                  src="/images/dest/content/main/video2.png"
                  alt=""
                />
              </picture>
              <div className={cxSolo('solo-media__descr')}>
                Гендель. Оратория Аталия
                <br />
                03.10.2019
              </div>
            </div>
          </div>
          <div className={cx('grid__inner_33')}>
            <div
              className={cxSolo('solo-media__video')}
              onClick={() => handleToggle(url)}
            >
              <picture>
                <Image
                  width={410}
                  height={260}
                  src="/images/dest/content/main/video3.png"
                  alt=""
                />
              </picture>
              <div className={cxSolo('solo-media__descr')}>
                Гендель. Оратория Аталия
                <br />
                03.10.2019
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalWindow open={open} closeModal={onCloseModal} type="video">
        <Player url={url} />
      </ModalWindow>
    </>
  );
}
