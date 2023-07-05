import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import {
  getReserveStaff,
  loadReserveStaffTags,
  loadStaffAboutReserve,
} from '@/lib/loadReserveStaffPage';
import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';
import PageTitle from '@/components/PageTitle';
import Tags from '@/components/Tags';
import { getStaffMember } from '@/lib/loadStaffPage';
import StaffItems from '@/components/staff/StaffItems';
import styles from '@/styles/Main.module.scss';
import ModalWindow from '../../components/ModalWindow';

const cx = classNames.bind(styles);

export async function getStaticProps() {
  const staff = await getReserveStaff();
  const tags = await loadReserveStaffTags();
  const aboutReserve = await loadStaffAboutReserve();
  return {
    props: {
      staff,
      tags,
      aboutReserve,
    },
  };
}

export default function ReserveStaff({ staff, tags, aboutReserve }) {
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);

  const [members, setMembers] = useState(new Map());
  const [membersByGroup, setMembersByGroup] = useState(new Map());
  const [filter, setFilter] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-pink'));
    dispatch(setActiveMenu('orchestra'));
  });

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

  const handleClick = (e) => {
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

  const handleClickAbout = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  const setMembersList = (e) => {
    const membersType = e?.currentTarget.value;
    switch (membersType) {
      case 'participants':
        setMembers([]);
        break;
      case 'candidates':
        setMembers([]);
        break;
      default:
        break;
    }
  };
  return (
    <div className="container">
      <PageTitle type="custom" title="Кадровый резерв РНМСО">
        <a href="/" className="link" onClick={(e) => handleClickAbout(e)}>
          о кадровом резерве
        </a>
      </PageTitle>
      <section className={cx('page-filter')}>
        <div className={cx('page-filter__grid')}>
          <div className={cx('switch__container')} style={{ width: '304px' }}>
            <div className={cx('switch__toggle-container')}>
              <input
                id="participants"
                name="members"
                type="radio"
                value="participants"
                defaultChecked
                onChange={(e) => setMembersList(e)}
              />
              <label
                htmlFor="participants"
                className={cx('switch__label', 'switch__label_left')}
              >
                участники
              </label>
              <input
                id="candidates"
                name="members"
                type="radio"
                value="candidates"
                onChange={(e) => setMembersList(e)}
              />
              <label
                htmlFor="candidates"
                className={cx('switch__label', 'switch__label_right')}
              >
                кандидаты
              </label>
              <div className={cx('switch__toggle')} />
              <div className={cx('switch__pill')} />
            </div>
          </div>
        </div>
      </section>
      <Tags
        tags={tags}
        activeTags={filter}
        nameField="title"
        filterField="id"
        getPosts={(e) => handleClick(e)}
        type="black"
      />

      <StaffItems
        members={members}
        tags={tags}
        getStaffMember={getStaffMember}
      />
      <ModalWindow open={open} closeModal={onCloseModal}>
        <div className="modal-text">
          <div className="modal-text__title">О кадровом резерве</div>
          <div
            className="modal-text__descr"
            dangerouslySetInnerHTML={{ __html: aboutReserve }}
          />
        </div>
      </ModalWindow>
    </div>
  );
}
