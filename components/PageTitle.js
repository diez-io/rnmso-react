import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Main.module.scss';

const cx = classNames.bind(styles);

export default function PageTitle({title, link}) {
  return (
    <section className={classNames('main-title', cx('page-title'))}>
      <Link href={link} className={classNames(cx('page-title__back'))}>
        <Image
          className="svg_color"
          height="12"
          width="30"
          src="/images/dest/icons/icon-arrow-left.svg"
          alt=""
        />
          {title}
      </Link>
    </section>
  );
}
