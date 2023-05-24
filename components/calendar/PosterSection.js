import classNames from 'classnames/bind';
import styles from '@/styles/Main.module.scss';
import stylesAfishaPage from '@/styles/AfishaPage.module.scss';
import PosterItem from '@/components/calendar/PosterItem';

const cx = classNames.bind(styles);
const cxAfisha = classNames.bind(stylesAfishaPage);

export default function PosterSection({ section }) {
  return (
    <div className={cxAfisha('poster-section')}>
      <h3 className={cx('h3')}>{section.month}</h3>
      <div className={cxAfisha('poster-section__items')}>
        {section?.posts?.map((post) => (
          <PosterItem key={`item-poster_${post.id}`} post={post} />
        ))}
      </div>
    </div>
  );
}