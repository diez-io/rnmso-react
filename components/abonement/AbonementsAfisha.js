import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from '@/styles/Main.module.scss';
import stylesConcertPage from '@/styles/PageConcert.module.scss';

const cx = classNames.bind(styles);
const cxConcert = classNames.bind(stylesConcertPage);

export default function AbonementsAfisha({ abonement }) {
  const data = abonement[0];
  return (
    <>
      <div
        className={classNames(
          cx('d-flex'),
          cxConcert('concert-section__season_title')
        )}
      >
        <div className={cx('grid__inner', 'grid__inner_75')}>
          <h4 className={cx('h4')}>Абонемент №{data.num}</h4>
          <span>{data.title}</span>
        </div>
        <div className={cx('grid__inner grid__inner_25')}>
          <Link href="#" className={cx('btn')}>
            купить абонемент
          </Link>
        </div>
      </div>
      {data?.concerts?.map((post) => (
        <div
          key={`ab_${post.id}`}
          className={classNames(
            cx('d-flex'),
            cxConcert('concert-section__season_table')
          )}
        >
          <div
            className={cx('grid__inner', 'grid__inner_25')}
            dangerouslySetInnerHTML={{ __html: post.date }}
          />
          <div
            className={cx('grid__inner', 'grid__inner_75')}
            dangerouslySetInnerHTML={{ __html: post.description }}
          />
        </div>
      ))}
    </>
  );
}
