import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import stylesAfishaPage from '@/styles/PageAfisha.module.scss';
import {getWeekDay} from "@/pages/api/date";

const cxAfisha = classNames.bind(stylesAfishaPage);

const placeholderImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcsnt3PQAHAAKrcPYcMAAAAABJRU5ErkJggg==';

export default function PosterItem({ post }) {
    const d = new Date(post.dt);
    const dDay = d.getDate();
    const dWeekDay = getWeekDay(d);
    const dHours = `${d.getHours()}.${`0${d.getMinutes()}`.slice(-2)}`;
  return (
    <article className={cxAfisha('poster-section__item')}>
      <div className={cxAfisha('poster-section__date')}>
        <span className={cxAfisha('poster-section__date-num')}>
          {dDay}
        </span>
        <p className={cxAfisha('poster-section__date-text')}>
          {dWeekDay}<br/>
            {dHours}
        </p>
      </div>
      <picture className={cxAfisha('poster-section__img')}>
        <Image
          width={200}
          height={200}
          src={post.image}
          placeholder="blur"
          blurDataURL={placeholderImage}
          alt=""
        />
      </picture>
      <div className={cxAfisha('poster-section__text')}>
          <Link className="link" href={`/calendar/${post.id}`}>
              {post.title &&
              <h4 className="h4">
                  {post.title}
              </h4>
              }
        <p>{post.people}</p>
        <p>{post.place}</p>
          {post.subscription &&
          <span>
            Абонемент №{post.subscription.number}
              {post.subscription.title &&
                  <>
                  :<br/>{post.subscription.title}
                  </>
              }
        </span>
          }
          </Link>
      </div>
      <div className={cxAfisha('poster-section__actions')}>
          {post.on_sale && post.subscription && post.subscription?.show_buy_button &&
          <Link href={post.subscription.link_buy} className="btn">
              купить абонемент
          </Link>
          }
          {post.on_sale && post.show_buy_button &&
          <Link href={post.link_buy} className="btn">
              купить билет
          </Link>
          }
          {post.on_sale === false &&
            <span>билеты проданы</span>
          }
      </div>
    </article>
  );
}
