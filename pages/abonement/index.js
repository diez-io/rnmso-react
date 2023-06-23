import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from '@/styles/Main.module.scss';
import AbonementItem from '@/components/abonement/AbonementItem';
import { loadAbonementPosts } from '@/lib/loadAbonementsPage';
import stylesAbonementPage from '@/styles/PageAbonement.module.scss';
import { setBg } from '@/store/bgSlice';
import {setActiveMenu} from "@/store/menuSlice";

const cx = classNames.bind(styles);
const cxAbonement = classNames.bind(stylesAbonementPage);

export async function getStaticProps() {
  const abonements = await loadAbonementPosts();
  return {
    props: {
      abonements,
    },
  };
}

export default function Abonement({ abonements }) {
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
                2021/22
              </label>
              <input id="year2" name="year" type="radio" />
              <label
                htmlFor="year2"
                className={cx('switch__label', 'switch__label_right')}
              >
                2022/23
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
