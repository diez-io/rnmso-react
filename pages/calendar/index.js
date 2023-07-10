import Link from 'next/link';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';

import { loadAfisha, loadAfishaTags } from '@/lib/loadAfisha';
import Tags from '@/components/Tags';
import PosterSection from '@/components/calendar/PosterSection';
import PageTitle from '@/components/PageTitle';
import {getLastDayOfMonth, setRightMonth00} from "../api/date";

export async function getStaticProps() {
  const dt = new Date();
  const day = dt.getDate();
  const year = dt.getFullYear();
  const month = setRightMonth00(dt.getMonth());
  let nextMonth = (dt.getMonth() + 3 > 12) ? 0 : dt.getMonth() + 3;
  const nextMonthLastDay = getLastDayOfMonth(year, nextMonth);
  nextMonth = setRightMonth00(nextMonth);

  const afishaPosts = await loadAfisha(`dt_after=${day}.${month}.${year}&dt_before=${nextMonthLastDay}.${nextMonth}.${year}`);

  const tags = await loadAfishaTags();
  return {
    props: {
      afishaPosts,
      tags,
    },
  };
}
export default function Calendar({ afishaPosts, tags }) {
  console.log(afishaPosts);
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
    loadAfisha(`tag=${dataFilter.join(',')}`)
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
        nameField="name"
        filterField="id"
        getPosts={(e) => handleClick(e)}
      />

      <PosterSection posts={posts} />
    </div>
  );
}
