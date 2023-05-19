import Image from 'next/image';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '@/styles/Main.module.scss';
import stylesAfishaPage from '@/styles/AfishaPage.module.scss';
import { loadAfishaTags, getAfishaPosts } from '@/lib/loadAfishaPage';
import Tags from '@/components/Tags';

const cx = classNames.bind(styles);
const cxAfisha = classNames.bind(stylesAfishaPage);

export async function getStaticProps() {
  const afishaPosts = await getAfishaPosts();
  const tags = await loadAfishaTags();
  return {
    props: {
      bodyClass: cx('bg-green'),
      afishaPosts,
      tags,
    },
  };
}
export default function Calendar({ afishaPosts, tags }) {
  const [posts, setPosts] = useState(afishaPosts);
  const [filter, setFilter] = useState([]);
  // useEffect(() => {
  //   getAfishaPosts()
  //     .then((res) => {
  //       setPosts(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleClick = (e) => {
    let dataFilter = e?.currentTarget.value;
    dataFilter = filter.includes(dataFilter)
      ? filter.filter((f) => f !== dataFilter)
      : filter.concat(dataFilter);
    getAfishaPosts(dataFilter.join(','))
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
    setFilter(dataFilter);
  };
  return (
    <div className={cx('container')}>
      <section className={cx('page-title')}>
        <h1 className={cx('h1')}>Афиша</h1>
        <div className={cx('page-title__links')}>
          <Link className={cx('link', 'link_calendar')} href="#">
            Календарь
          </Link>
          <Link className={cx('link', 'link_filter')} href="#">
            Фильтр
          </Link>
        </div>
      </section>

      <Tags tags={tags} activeTags={filter} getPosts={(e) => handleClick(e)} />

      <section className={cxAfisha('page-poster')}>
        {posts?.map((section, i) => (
          <PosterSection key={`section-poster_${i}`} section={section} />
        ))}
      </section>
    </div>
  );
}

function PosterSection({ section }) {
  return (
    <div className={cxAfisha('poster-section')}>
      <h3 className={cx('h3')}>{section.month}</h3>
      <div className={cxAfisha('poster-section__items')}>
        {section?.posts?.map((post) => (
          <PosterItem key={`item-poster_${post.id}`} post={post} />
        ))}
      </div>
    </div>
  );
}
function PosterItem({ post }) {
  return (
    <article className={cxAfisha('poster-section__item')}>
      <div className={cxAfisha('poster-section__date')}>
        <span className={cxAfisha('poster-section__date-num')}>
          {post.date_num}
        </span>
        <p className={cxAfisha('poster-section__date-text')}>
          {post.date_text}
        </p>
      </div>
      <picture className={cxAfisha('poster-section__img')}>
        <Image width={200} height={200} src={post.image} alt="" />
      </picture>
      <div className={cxAfisha('poster-section__text')}>
        <h4 className={cx('h4')}>
          <Link className={cx('link')} href="#">
            {post.title}
          </Link>
        </h4>
        <p>{post.people}</p>
        <p>{post.place}</p>
        <span>{post.abonement}</span>
      </div>
      <div className={cxAfisha('poster-section__actions')}>
        <a href="#" className={cx('btn')}>
          купить абонемент
        </a>
      </div>
    </article>
  );
}
