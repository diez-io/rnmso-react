// items   /staff/   /contest/members/
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import ModalWindow from '@/components/ModalWindow';
import StaffItem from '@/components/staff/StaffItem';
import StaffItemDetail from '@/components/staff/StaffItemDetail';
import styles from '@/styles/Main.module.scss';
import stylesStaff from '@/styles/PageStaff.module.scss';

const cx = classNames.bind(styles);
const cxStaff = classNames.bind(stylesStaff);

export default function StaffItems({ members, tags, getStaffMember }) {
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);

  const [memberDetail, setMemberDetail] = useState(null);
  const [memberId, setMemberId] = useState(null);

  const fetchDataMember = async (id) => {
    // const dataMember = await getStaffMember(id);
    // return setMemberDetail(dataMember);
    const dataMember = await getStaffMember();
    return setMemberDetail(dataMember);
  };

  useEffect(() => {
    fetchDataMember(memberId);
  }, [memberId]);

  const handleClickMember = (e, id) => {
    setMemberId(id);
    setOpen((prev) => !prev);
  };

  const results = [];
  members.forEach((items, group) => {
    items.length &&
      results.push(
        <section key={`group_${group}`} className={cxStaff('staff-section')}>
          {/* {group !== 'all' && ( */}
          <h3 className="h3">{tags.filter((f) => f.id === group)[0]?.title}</h3>
          {/* )} */}
          <div
            className={classNames(
              cxStaff('staff-members'),
              cx('d-flex', 'flex-wrap', 'justify-start')
            )}
          >
            {items.map((item) => (
              <StaffItem
                key={`member_${item.id}`}
                member={item}
                handleClickMember={handleClickMember}
              />
            ))}
          </div>
        </section>
      );
  });

  return (
    <section className={cxStaff('page-staff')}>
      {results}
      <ModalWindow open={open} closeModal={onCloseModal}>
        <StaffItemDetail data={memberDetail} />
      </ModalWindow>
    </section>
  );
}
