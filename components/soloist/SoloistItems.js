import classNames from 'classnames/bind';
import Image from 'next/image';
import stylesSolo from '@/styles/PageSoloists.module.scss';
import styles from '@/styles/Main.module.scss';
import Link from "next/link";

const cx = classNames.bind(styles);
const cxSolo = classNames.bind(stylesSolo);

export default function SoloistItems({ items, description,page}) {
  return (
    <section className={cxSolo('page-soloists')}>
      <div className={cx('d-flex', 'flex-wrap', 'justify-start')}>
        {items?.map((item) => (
          <SoloistItem item={item} description={description} page={page} />
        ))}
      </div>
    </section>
  );
}
function SoloistItem({ item, description, page }) {
  return (
    <div className={cxSolo('soloists-item')}>
        <Link className="link" href={`/${page}/${item.slug}`}>
      <div
        className={classNames(
          cxSolo('soloists-item__img'),
          cx('square-img__item')
        )}
      >
        <picture className={cx('square-img__body')}>
          <Image width={408} height={408} src={item.image} alt="" />
        </picture>
      </div>
      <div className={cxSolo('soloists-item__name')}>
        {item.first_name} {item.last_name}
      </div>
      <div className={cxSolo('soloists-item__descr')}>{item[description]}</div>
    </Link>
    </div>
  );
}
