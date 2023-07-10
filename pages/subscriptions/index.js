import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from '@/styles/Main.module.scss';
import AbonementItem from '@/components/abonement/AbonementItem';
import stylesAbonementPage from '@/styles/PageAbonement.module.scss';
import { setBg } from '@/store/bgSlice';
import {setActiveMenu} from "@/store/menuSlice";
import {loadAbonements} from "../../lib/loadAbonements";
import {loadSeason} from "../../lib/loadSeason";

const cx = classNames.bind(styles);
const cxAbonement = classNames.bind(stylesAbonementPage);

export async function getStaticProps() {
  const season = await loadSeason();
  const abonements = await loadAbonements();
  return {
    props: {
      abonements,
      season
    },
  };
}

export default function Abonement({ abonements, season }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-green'));
    dispatch(setActiveMenu('calendar'));
  });

  return (
    <div className="container">
      <section className={cx('page-title')}>
        <h1 className="h1">Абонементы</h1>
      </section>
      <section className={cx('page-filter')}>
        <div className={cx('page-filter__grid')}>
          <div className={cx('switch__container')}>
            <div className={cx('switch__toggle-container')}>
              <input id="year1" name="year" type="radio" defaultChecked />
              <label
                htmlFor="year1"
                className={cx('switch__label', 'switch__label_left')}
              >
                {season.current_season}/{String(season.current_season+1).slice(-2)}
              </label>
              <input id="year2" name="year" type="radio" />
              <label
                htmlFor="year2"
                className={cx('switch__label', 'switch__label_right')}
              >
                {season.next_season}/{String(season.next_season+1).slice(-2)}
              </label>
              <div className={cx('switch__toggle')} />
              <div className={cx('switch__pill')} />
            </div>
          </div>
        </div>
        <div className={cx('page-filter__grid', 'd-flex')}>
          <div className={cx('select__container')}>
            <select>
              <option>жанр</option>
              <option value="1">жанр 1</option>
              <option value="2">жанр 2</option>
            </select>
          </div>
          <div className={cx('select__container')}>
            <select>
              <option>зал</option>
              <option value="1">зал 1</option>
              <option value="2">зал 2</option>
            </select>
          </div>
        </div>
        <div className={cx('page-filter__grid')}>
          <div className={cx('toggle__container')}>
            <label className={cx('toggle')}>
              <input className={cx('toggle__checkbox')} type="checkbox" />
              <div className={cx('toggle__switch')} />
              <span className={cx('toggle__label')}>в продаже</span>
            </label>
          </div>
        </div>
      </section>

      <section className={cx('page-search')}>
        <input
          className={cx('input__search')}
          type="text"
          placeholder="номер абонемента, фамилия, жанр, ключевое слово"
        />
      </section>

      <section className={cxAbonement('page-abonement')}>
        {abonements.map((abonement) => (
          <AbonementItem
            key={`abonement_${abonement.id}`}
            abonement={abonement}
          />
        ))}
      </section>
    </div>
  );
}
