import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import stylesAfishaPage from '@/styles/PageAfisha.module.scss';
import { loadAfishaTags, getAfishaPosts } from '@/lib/loadAfishaPage';
import Tags from '@/components/Tags';
import PosterSection from '@/components/calendar/PosterSection';
import styles from '@/styles/Main.module.scss';
import { setBg } from '@/store/bgSlice';
import {setActiveMenu} from "@/store/menuSlice";
import stylesTitle from "@/styles/TitlePage.module.scss";
import PageTitle from "@/components/PageTitle";

const cx = classNames.bind(styles);
const cxAfisha = classNames.bind(stylesAfishaPage);
const cxTitle = classNames.bind(stylesTitle);

export async function getStaticProps() {
  const afishaPosts = await getAfishaPosts();
  const tags = await loadAfishaTags();
  return {
    props: {
      afishaPosts,
      tags,
    },
  };
}
export default function Calendar({ afishaPosts, tags }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-green'));
    dispatch(setActiveMenu('calendar'));
  });

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
      <PageTitle type="custom" title="Афиша" customClass="page-title_poster">
        <Link className="link" href="/abonement">
          Абонементы
        </Link>
        <Link className="link link_calendar" href="#">
          Календарь
        </Link>
        <Link className="link link_filter" href="#">
          Фильтр
        </Link>
      </PageTitle>

      <Tags
        tags={tags}
        activeTags={filter}
        nameField="title"
        filterField="slug"
        getPosts={(e) => handleClick(e)}
      />

      <section className={cxAfisha('page-poster')}>
        {posts?.map((section, i) => (
          <PosterSection key={`section-poster_${i}`} section={section} />
        ))}
      </section>
    </div>
  );
}
