import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from '@/styles/Main.module.scss';
import stylesAfishaPage from '@/styles/AfishaPage.module.scss';

const cx = classNames.bind(styles);
const cxAfisha = classNames.bind(stylesAfishaPage);

const placeholderImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcsnt3PQAHAAKrcPYcMAAAAABJRU5ErkJggg==';

export default function PosterItem({ post }) {
  return (
    <article className={cxAfisha('poster-section__item')}>
      <div className={cxAfisha('poster-section__date')}>
        <span className={cxAfisha('poster-section__date-num')}>
          {post.date_num}
        </span>
        <p className={cxAfisha('poster-section__date-text')}>
          {post.date_text}
        </p>
      </div>
      <picture className={cxAfisha('poster-section__img')}>
        <Image
          width={200}
          height={200}
          src={post.image}
          placeholder="blur"
          blurDataURL={placeholderImage}
          alt=""
        />
      </picture>
      <div className={cxAfisha('poster-section__text')}>
        <h4 className={cx('h4')}>
          <Link className={cx('link')} href={`/calendar/${post.id}`}>
            {post.title}
          </Link>
        </h4>
        <p>{post.people}</p>
        <p>{post.place}</p>
        <span>{post.abonement}</span>
      </div>
      <div className={cxAfisha('poster-section__actions')}>
        <a href="#" className={cx('btn')}>
          купить абонемент
        </a>
      </div>
    </article>
  );
}
