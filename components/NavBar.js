import Link from 'next/link';
import { useRouter } from 'next/router';

import classNames from 'classnames/bind';
import styles from '@/styles/MenuMain.module.scss';

const cxMenu = classNames.bind(styles);

const navigationRoutes = {"orchestra": "оркестр", "calendar":"афиша", "competition":"конкурс", "video": "медиа", "info":"информация"};

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className={cxMenu('menu-main', 'menu-main_page')}>
      <ul className="ul-nostyle">
        {Object.entries(navigationRoutes).map(([key, value]) =>(
            <NavLink
                key={key}
                href={`/${key}`}
                text={value}
                router={router}
            />
        ))}

      </ul>
    </nav>
  );
}

function NavLink({ href, text, router }) {
  const isActive = router.pathname.includes(href);
  return (
      <li className={cxMenu('menu-main__item', 'menu-main__item_b', isActive && "selected")}>
        <Link href={href}>{text}</Link>
      </li>
  );
}
