import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import { getMonthString, getWeekDay } from '@/pages/api/date';
import stylesAfisha from '@/styles/PageMainAfisha.module.scss';
import styles from '@/styles/Main.module.scss';

const cx = classNames.bind(styles);
const cxAfisha = classNames.bind(stylesAfisha);

export default function Afisha({ posts }) {
  const result = posts.map((post, i) => {
    const d = new Date(post.dt);
    const dDay = d.getDate();
    const dMonth = getMonthString(d);
    const dWeekDay = getWeekDay(d);
    const dHours = `${d.getHours()}.${`0${d.getMinutes()}`.slice(-2)}`;
    return (
      <article
        key={`afisha_${post.id}`}
        className={classNames(cx('d-flex'), cxAfisha('poster-article'))}
      >
        <div
          className={cx(
            'grid__inner',
            'grid__inner_50',
            'd-flex',
            'justify-start',
            'flex-nowrap_mob'
          )}
        >
          <div className={cxAfisha('poster-article__date')}>
            <span className={cxAfisha('poster-article__date-num')}>{dDay}</span>
            <p className={cxAfisha('poster-article__date-text')}>
              {dMonth}
              <br />
              {dWeekDay}
              <br />
              {dHours}
            </p>
          </div>
          <div className={cxAfisha('poster-article__text')}>
            <h4 className="h4">
              <Link className="link" href={`/calendar/${post.id}`}>
                {post.title}
              </Link>
            </h4>
            <div
              className={cxAfisha('poster-article__announcement')}
              dangerouslySetInnerHTML={{ __html: post.announcement_index }}
            />
            <div className={cxAfisha('poster-article__place')}>
              {post.place}
            </div>
          </div>
        </div>
        <div className={cx('grid__inner', 'grid__inner_50')}>
          {i === 0 ? (
            <div className={cx('square-img__item', 'square-img__unset_mob')}>
              <picture
                className={classNames(
                  cxAfisha('poster-article__img'),
                  cx('square-img__body', 'square-img__body_circle')
                )}
              >
                <Image width={200} height={200} src={post.image} alt="" />
              </picture>
            </div>
          ) : (
            <picture className={cxAfisha('poster-article__img')}>
              <Image width={200} height={200} src={post.image} alt="" />
            </picture>
          )}
        </div>
      </article>
    );
  });
  return <div className={cxAfisha('poster-articles')}>{result}</div>;
}
