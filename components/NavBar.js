import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from "../styles/Main.module.scss"
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

export default function NavBar(){
    const router = useRouter();
    const currentRoute = router.pathname;

    return(
        <nav className={cx("menu-main", "menu-main_page")}>
            <ul className={cx('ul-nostyle')}>
                <li className={cx("menu-main__item", "menu-main__item_b")}>
                    <Link href="#" className={currentRoute === '/orchestra' ? cx("selected") : ''}>оркестр</Link>
                </li>
                <li className={cx("menu-main__item", "menu-main__item_b")}>
                    <Link href="/calendar" className={currentRoute === '/calendar' ? cx("selected") : ''}>афиша</Link>
                </li>
                <li className={cx("menu-main__item", "menu-main__item_b")}><Link href="#">конкурс</Link></li>
                <li className={cx("menu-main__item", "menu-main__item_b")}><Link href="#">фото и видео</Link></li>
                <li className={cx("menu-main__item", "menu-main__item_b")}><Link href="#">информация</Link></li>
            </ul>
        </nav>
    )
}