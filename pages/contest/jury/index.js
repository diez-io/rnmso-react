import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadSpecialities } from '@/lib/loadSpecialities';
import PageTitle from '@/components/PageTitle';
import Tags from '@/components/Tags';
import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';
import { getContestJury } from '@/lib/loadContestJuryPage';
import JuryItems from '@/components/contest-jury/JuryItems';

export async function getStaticProps() {
  const jury = await getContestJury();
  const tags = await loadSpecialities();

  return {
    props: {
      jury,
      tags,
    },
  };
}

export default function PageJury({ jury, tags }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-lightgreen'));
    dispatch(setActiveMenu('contest'));
  });
  const [members, setMembers] = useState(new Map());
  const [membersByGroup, setMembersByGroup] = useState(new Map());
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const arr = new Map();
    tags.forEach((item) => {
      arr.set(
        item.id,
        jury.filter((f) => item.id === f.speciality)
      );
    });
    setMembersByGroup(arr);
    setMembers(arr);
  }, [jury, tags]);

  const handleClickTag = (e) => {
    let dataFilter = e?.currentTarget.value;
    dataFilter = filter.includes(dataFilter)
      ? filter.filter((f) => f !== dataFilter)
      : filter.concat(dataFilter);
    if (dataFilter.length) {
      const filteredMembers = new Map(
        [...membersByGroup].filter(([key, value]) =>
          dataFilter.includes(String(key))
        )
      );
      setMembers(filteredMembers);
    } else {
      setMembers(membersByGroup);
    }
    setFilter(dataFilter);
  };
  return (
    <div className="container">
      <PageTitle title="Жюри конкурса" />
      <Tags
        tags={tags}
        activeTags={filter}
        nameField="title"
        filterField="id"
        getPosts={(e) => handleClickTag(e)}
        type="black"
      />
      <JuryItems members={members} tags={tags} />
    </div>
  );
}
