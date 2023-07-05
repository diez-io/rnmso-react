import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';
import PageTitle from '@/components/PageTitle';
import Tags from '@/components/Tags';
import { getStaffMember } from '@/lib/loadStaffPage';
import StaffItems from '@/components/staff/StaffItems';
import { loadMemberGroups } from '@/lib/loadMemberGroups';
import { getContestMembers } from '@/lib/loadContestMembersPage';

export async function getStaticProps() {
  const contestMembers = await getContestMembers();
  const tags = await loadMemberGroups();

  return {
    props: {
      contestMembers,
      tags,
    },
  };
}

export default function ContestMembers({ contestMembers, tags }) {
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
        contestMembers.filter((f) => item.id === f.group)
      );
    });
    setMembersByGroup(arr);
    // setMembers(new Map().set('all', contestMembers));
    setMembers(arr);
  }, []);

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
      // setMembers(new Map().set('all', membersByGroup));
    }
    setFilter(dataFilter);
  };
  return (
    <div className="container">
      <PageTitle title="Участники конкурса" />
      <Tags
        tags={tags}
        activeTags={filter}
        nameField="title"
        filterField="id"
        getPosts={(e) => handleClickTag(e)}
        type="black"
      />
      <StaffItems
        members={members}
        tags={tags}
        getStaffMember={getStaffMember}
      />
    </div>
  );
}
