import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from '@/styles/Main.module.scss';
import stylesStaff from '@/styles/PageStaff.module.scss';

const cx = classNames.bind(styles);
const cxStaff = classNames.bind(stylesStaff);

export default function StaffItemDetail({ data }) {
  return (
    <div className={classNames(cx('d-flex'), cxStaff('staff-detail'))}>
      <div className={cxStaff('staff-detail__img')}>
        <div className={cx('square-img__item')}>
          <picture
            className={cx('square-img__body', 'square-img__body_circle')}
          >
            {data.image && (
              <Image width={312} height={312} src={data.image} alt="" />
            )}
          </picture>
        </div>
      </div>
      <div>
        <div className={cxStaff('staff-member__name')}>
          {data.first_name} {data.last_name}
        </div>
        <div className={cxStaff('staff-member__position')}>{data.status}</div>
        <div
          className={cxStaff('staff-member__text')}
          dangerouslySetInnerHTML={{ __html: data.biography }}
        />
      </div>
    </div>
  );
}
