import Link from 'next/link';
import { useRouter } from 'next/router';

import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import styles from '@/styles/MenuMain.module.scss';
import { selectActiveMenu, selectNavigationRoutes } from '@/store/menuSlice';

const cxMenu = classNames.bind(styles);

export default function NavBar({ isInner }) {
  // const router = useRouter();
  const navigationRoutes = useSelector(selectNavigationRoutes);
  const activeMenu = useSelector(selectActiveMenu);
  return (
    <nav className={cxMenu('menu-main', isInner && 'menu-main_page')}>
      <ul className="ul-nostyle">
        {Object.entries(navigationRoutes).map(([key, value]) => (
          <NavLink
            key={key}
            href={`/${value.link}`}
            text={value.name}
            // router={router}
            active={activeMenu}
            slug={key}
          />
        ))}
      </ul>
    </nav>
  );
}

function NavLink({ href, text, active, slug }) {
  // const isActive = router.pathname.includes(href);
  const isActive = slug === active;
  return (
    <li className={cxMenu('menu-main__item', isActive && 'selected')}>
      <Link href={href}>{text}</Link>
    </li>
  );
}
