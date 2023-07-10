import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from '@/styles/Main.module.scss';
import stylesAbonementPage from '@/styles/PageAbonement.module.scss';
import {getMonthString, getWeekDay} from "../../pages/api/date";

const cx = classNames.bind(styles);
const cxAbonement = classNames.bind(stylesAbonementPage);

export default function AbonementItem({ abonement }) {
  return (
    <div
      className={cxAbonement(
        'abonement-section',
        !abonement.show_buy_button ? 'abonement-section_disabled' : ''
      )}
    >
      <div className={cxAbonement('abonement-section_separate')}>
        <div className={cxAbonement('abonement-section__column')}>
          <span className={cxAbonement('abonement-section__num')}>
            {abonement.number}
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
            {abonement.hall?.title}
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
          {abonement.show_buy_button ? (
            <Link href={abonement.link_buy} className={cx('btn')}>
              купить
            </Link>
          ) : (
            <span>раскуплено</span>
          )}
        </div>
      </div>
      <div className={cxAbonement('abonement-section__items')}>
        {abonement.concerts?.map((item) => (
          <ConcertItem key={`concert_${item.id}`} item={item} />
        ))}
      </div>
    </div>
  );
}
function ConcertItem({item}){
  const d = new Date(item.dt);
  const dDay = d.getDate();
  const dMonth = getMonthString(d);
  const dWeekDay = getWeekDay(d);
  const dHours = `${d.getHours()}.${`0${d.getMinutes()}`.slice(-2)}`;
  return(
      <div
          key={`concer_${item.id}`}
          className={cxAbonement(
              'abonement-section__item',
              'abonement-section_separate'
          )}
      >
        <div className={cxAbonement('abonement-section__column')}>
              <span className={cxAbonement('abonement-section__date')}>
                {dDay} {dMonth}<br/>
                {dWeekDay}, {dHours}
              </span>
        </div>
        <div
            className={cxAbonement(
                'abonement-section__column',
                'abonement-section__text'
            )}
        >
          <div
              className={cxAbonement('abonement-section__desc')}
              dangerouslySetInnerHTML={{ __html: item.announcement_index }}
          />
          {item.event_program &&
          <div className={cxAbonement('abonement-section__desc')}>
            <p>В программе:</p>
            <div dangerouslySetInnerHTML={{__html: item.event_program}} />
          </div>
          }
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
  )
}
