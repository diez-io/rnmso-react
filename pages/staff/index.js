import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';
import { loadStaff, loadStaffMember } from '@/lib/loadStaff';
import Tags from '@/components/Tags';
import PageTitle from '@/components/PageTitle';
import StaffItems from '@/components/staff/StaffItems';
import { loadMemberGroups } from '@/lib/loadMemberGroups';

export async function getStaticProps() {
  const staff = await loadStaff();
  const tags = await loadMemberGroups();

  return {
    props: {
      staff,
      tags,
    },
  };
}

export default function Staff({ staff, tags }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-pink'));
    dispatch(setActiveMenu('orchestra'));
  });

  const [members, setMembers] = useState(new Map());
  const [membersByGroup, setMembersByGroup] = useState(new Map());
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const arr = new Map();
    tags.forEach((item) => {
      arr.set(
        item.id,
        staff.filter((f) => item.id === f.group)
      );
    });
    setMembersByGroup(arr);
    setMembers(arr);
    // setMembers(new Map().set('all', staff));
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
      // setMembers(new Map().set('all', staff));
    }
    setFilter(dataFilter);
  };

  return (
    <div className="container">
      <PageTitle title="Состав оркестра" />
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
        getStaffMember={loadStaffMember}
      />
    </div>
  );
}
