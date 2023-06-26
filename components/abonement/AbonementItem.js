import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from '@/styles/Main.module.scss';
import stylesAbonementPage from '@/styles/PageAbonement.module.scss';

const cx = classNames.bind(styles);
const cxAbonement = classNames.bind(stylesAbonementPage);

export default function AbonementItem({ abonement }) {
  return (
    <div
      className={cxAbonement(
        'abonement-section',
        abonement.disabled ? 'abonement-section_disabled' : ''
      )}
    >
      <div className={cxAbonement('abonement-section_separate')}>
        <div className={cxAbonement('abonement-section__column')}>
          <span className={cxAbonement('abonement-section__num')}>
            {abonement.num}
          </span>
        </div>
        <div
          className={cxAbonement(
            'abonement-section__column',
            'abonement-section__title'
          )}
        >
          <h4 className={cx('h4')}>{abonement.title}</h4>
          <p>
            {abonement.place}
            <br />
            {abonement.price}
          </p>
        </div>
        <div
          className={cxAbonement(
            'abonement-section__column',
            'abonement-section__actions'
          )}
        >
          {abonement.disabled ? (
            <span>раскуплено</span>
          ) : (
            <Link href="#" className={cx('btn')}>
              купить
            </Link>
          )}
        </div>
      </div>
      <div className={cxAbonement('abonement-section__items')}>
        {abonement.concerts.map((item) => (
          <div
            key={`concer_${item.id}`}
            className={cxAbonement(
              'abonement-section__item',
              'abonement-section_separate'
            )}
          >
            <div className={cxAbonement('abonement-section__column')}>
              <span
                className={cxAbonement('abonement-section__date')}
                dangerouslySetInnerHTML={{ __html: item.date }}
              />
            </div>
            <div
              className={cxAbonement(
                'abonement-section__column',
                'abonement-section__text'
              )}
            >
              <div
                className={cxAbonement('abonement-section__desc')}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              {item.image ? (
                <picture>
                  <img src={item.image} alt="" />
                </picture>
              ) : (
                ''
              )}
            </div>
            <div className={cxAbonement('abonement-section__column')} />
          </div>
        ))}
      </div>
    </div>
  );
}
