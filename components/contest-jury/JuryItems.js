import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from '@/styles/Main.module.scss';
import stylesJury from '@/styles/PageJury.module.scss';

const cx = classNames.bind(styles);
const cxJury = classNames.bind(stylesJury);

export default function JuryItems({ members, tags }) {
  const results = [];
  members.forEach((items, group) => {
    items.length &&
      results.push(
        <section key={`group_${group}`} className={cxJury('jury-section')}>
          <h3 className="h3">{tags.filter((f) => f.id === group)[0]?.title}</h3>
          <div
            className={classNames(
              cxJury('jury-members'),
              cx('d-flex', 'flex-wrap', 'justify-start')
            )}
          >
            {items.map((item) => (
              <JuryItem key={`member_${item.id}`} member={item} />
            ))}
          </div>
        </section>
      );
  });

  return <section className={cxJury('page-jury')}>{results}</section>;
}

function JuryItem({ member }) {
  return (
    <div className={cxJury('jury-member')}>
      <div className={cx('square-img__item')}>
        <picture
          className={classNames(
            cxJury('jury-member__img'),
            cx('square-img__body', 'square-img__body_round')
          )}
        >
          {member.image && (
            <Image width={304} height={304} src={member.image} alt="" />
          )}
        </picture>
      </div>
      <div className={cxJury('jury-member__name')}>
        {member.first_name} {member.last_name}
      </div>
      <div className={cxJury('jury-member__position')}>
        {member.official_position}
      </div>
    </div>
  );
}
