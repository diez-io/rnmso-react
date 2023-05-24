import classNames from 'classnames/bind';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Main.module.scss';
import stylesAfishaPage from '@/styles/AfishaPage.module.scss';
import { loadAfishaTags, getAfishaPosts } from '@/lib/loadAfishaPage';
import Tags from '@/components/Tags';
import PosterSection from '@/components/calendar/PosterSection';

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
    <div className="container">
      <section className="page-title">
        <h1 className="h1">Афиша</h1>
        <div className="page-title__links">
          <Link className="link" href="/abonement">
            Абонементы
          </Link>
          <Link className="link link_calendar" href="#">
            Календарь
          </Link>
          <Link className="link link_filter" href="#">
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
