import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from '@/styles/Main.module.scss';
import stylesStaff from '@/styles/PageStaff.module.scss';

const cx = classNames.bind(styles);
const cxStaff = classNames.bind(stylesStaff);

export default function StaffItem({ member, handleClickMember }) {
  return (
    <div
      className={cxStaff('staff-member')}
      onClick={(e) => handleClickMember(e, member.id)}
    >
      <div className={cx('square-img__item')}>
        <picture
          className={classNames(
            cxStaff('staff-member__img'),
            cx('square-img__body', 'square-img__body_circle')
          )}
        >
          {member.image && (
            <Image width={200} height={200} src={member.image} alt="" />
          )}
        </picture>
      </div>
      <div className={cxStaff('staff-member__name')}>
        {member.first_name} {member.last_name}
      </div>
      <div className={cxStaff('staff-member__position')}>{member.status}</div>
    </div>
  );
}
