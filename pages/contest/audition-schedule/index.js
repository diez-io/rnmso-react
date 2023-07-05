import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';
import PageTitle from '@/components/PageTitle';
import Tags from '@/components/Tags';
import { getContestDifficulties } from '@/lib/loadContestDifficultiesPage';
import { loadSpecialities } from '@/lib/loadSpecialities';

export async function getStaticProps() {
  const schedule = await getContestDifficulties();
  const tags = await loadSpecialities();

  return {
    props: {
      schedule,
      tags,
    },
  };
}

export default function AuditionSchedule({ schedule, tags }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-lightgreen'));
    dispatch(setActiveMenu('contest'));
  });
  const [items, setItems] = useState(new Map());
  const [itemsByGroup, setItemsByGroup] = useState(new Map());
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const arr = new Map();
    tags.forEach((item) => {
      arr.set(
        item.id,
        // difficulties.filter((f) => item.id === f.speciality)
        schedule.filter((f) => String(item.title) === String(f.speciality))
      );
    });
    setItemsByGroup(arr);
    setItems(arr);
  }, []);

  const handleClickTag = (e) => {
    let dataFilter = e?.currentTarget.value;
    dataFilter = filter.includes(dataFilter)
      ? filter.filter((f) => f !== dataFilter)
      : filter.concat(dataFilter);
    if (dataFilter.length) {
      const filteredItems = new Map(
        [...itemsByGroup].filter(([key, value]) =>
          dataFilter.includes(String(key))
        )
      );
      setItems(filteredItems);
    } else {
      setItems(itemsByGroup);
    }
    setFilter(dataFilter);
  };
  return (
    <>
      <Head>
        <title>График прослушиваний</title>
        <meta property="og:title" content="График прослушиваний" key="title" />
      </Head>

      <div className="container">
        <PageTitle title="График прослушиваний" />
        <Tags
          tags={tags}
          activeTags={filter}
          nameField="title"
          filterField="id"
          getPosts={(e) => handleClickTag(e)}
          type="black"
        />
      </div>
    </>
  );
}
