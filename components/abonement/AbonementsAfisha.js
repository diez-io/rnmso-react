import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from '@/styles/Main.module.scss';
import stylesConcertPage from '@/styles/PageConcert.module.scss';
import {getMonthString, getWeekDay} from "../../pages/api/date";

const cx = classNames.bind(styles);
const cxConcert = classNames.bind(stylesConcertPage);

export default function AbonementsAfisha({ abonement }) {
  const concerts = abonement.concerts.map((post) => {
    const d = new Date(post.dt);
    const dDay = d.getDate();
    const dMonth = getMonthString(d);
    const dWeekDay = getWeekDay(d);
    const dHours = `${d.getHours()}.${`0${d.getMinutes()}`.slice(-2)}`;
    return(
        <div
            key={`ab_${post.id}`}
            className={classNames(
                cx('d-flex'),
                cxConcert('concert-section__season_table')
            )}
        >
          <div className={cx('grid__inner', 'grid__inner_25')}>
            {dDay} {dMonth}<br/>
            {dWeekDay}, {dHours}
          </div>
          <div className={cx('grid__inner', 'grid__inner_75')}>
            <div>{post.title}</div>
            <div dangerouslySetInnerHTML={{ __html: post.announcement_index }}/>
          </div>
        </div>
    )
  })
  return (
    <>
      <div
        className={classNames(
          cx('d-flex'),
          cxConcert('concert-section__season_title')
        )}
      >
        <div className={cx('grid__inner', 'grid__inner_75')}>
          <h4 className={cx('h4')}>Абонемент №{abonement.number}</h4>
          <span>{abonement.title}</span>
        </div>
        <div className={cx('grid__inner grid__inner_25')}>
          <Link href="#" className={cx('btn')}>
            купить абонемент
          </Link>
        </div>
      </div>
      {concerts}
    </>
  );
}
