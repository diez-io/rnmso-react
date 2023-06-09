import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
import PageTitle from '@/components/PageTitle';
import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';
import stylesText from '@/styles/PageText.module.scss';

const cxText = classNames.bind(stylesText);

export default function Refund() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-lightgreen'));
    dispatch(setActiveMenu('contest'));
  });
  return (
    <div className="container">
      <PageTitle title="Компенсация расходов" />
      <div className={cxText('page-text')}>
        <div className={cxText('text__big')}>
          Условия приобретения жд и авиабилетов для участников Конкурса, при
          которых осуществляется компенсации расходов на проезд и размещение в
          гостинице.
        </div>
        <div className={cxText('text__normal')}>
          <p>
            1. Проезд из гг. Санкт-Петербург, Казань и обратно: желательно
            приобретать железнодорожный переезд (Сапсан эконом или место купе).
          </p>
          <p>2. Все авиаперелеты исключительно «эконом – классом».</p>
          <p>
            3. Билеты приобретать только «невозвратные». Все иные тарифы (эконом
            Премиум, бизнес, билеты с возможностью замены даты и так далее) не
            возмещаются, если есть возможность приобретения невозвратных
            билетов.
          </p>
          <p>
            4. Для музыкальных инструментов «туба» и «виолончель» нужно
            приобретать отдельный билет по такому же тарифу, как и у участника.
          </p>
          <p>
            5. Для осуществления компенсации необходимо после приобретения
            билета (-ов) предоставить Организатору (куратору группы) билеты в
            электронном или бумажном виде. В случае авиаперелета необходимо
            дополнительно предоставить Организатору оригиналы или цветные фото
            (хорошего качества) посадочных талонов в обе стороны (+ посадочный
            талон на инструмент). Утеря посадочного талона или не предоставление
            качественного цветного фото является основанием для невыплаты
            компенсации. Посадочные талоны необходимо передать или отправить по
            электронной почте, WhatsApp или смс-сообщением своему куратору
            группы.
          </p>
          <p>
            6. В случае вылета/ выезда и обратно из городов не по прописке (в
            паспорте), Конкурсанты должны будут предоставить справки с места
            работы или учебы для обоснования маршрута такого переезда.
          </p>
          <p>
            7. Из аэропорта, ж/д вокзала до места проведения Конкурса, гостиницы
            и обратно участники добираются самостоятельно. Адрес гостиницы
            &quot;Университетская&quot; в Москве: Мичуринский проспект, дом 8, стр 1.
            (метро Ломоносовский проспект).
          </p>
          <p>
            Организован трансфер на весь период проведения Конкурса от гостиницы
            &quot;Университетская&quot; до Филармонии-2 и обратно.
          </p>
          <p>
            8. Заселение в гостиницу и приезд – выезд Конкурсантов строго в
            период с 27 июня по 02 июля, концертмейстеров с 27 по 29 июня 2022
            г., для Участников по специальностям «Ударные инструменты» и «Арфа»
            на период с 01 по 02 июля 2022 г., исключения возможны лишь при
            отсутствии рейсов в указанные дни и строго по согласованию с
            Организатором.
          </p>
        </div>
      </div>
    </div>
  );
}
