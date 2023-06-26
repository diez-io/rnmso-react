import Link from 'next/link';
import classNames from 'classnames/bind';
import stylesSub from '@/styles/SubscribeBlock.module.scss';

const cxSub = classNames.bind(stylesSub);

export default function SubscribeBlock() {
  return (
    <section className={cxSub('subscribe-block')}>
      <div className="container">
        <div className={cxSub('subscribe-block__inner')}>
          <p>
            Подпишитесь на нашу рассылку <nobr>пресс-релизов</nobr>
          </p>
          <input
            type="text"
            className={cxSub('subscribe-block__input')}
            placeholder="email"
          />
          <Link
            href="#"
            className={classNames('btn', cxSub('subscribe-block__btn'))}
          >
            Подписаться
          </Link>
        </div>
      </div>
    </section>
  );
}
