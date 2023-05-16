import Link from "next/link"
import classNames from 'classnames/bind'
import styles from "../styles/Main.module.scss"
import NavBar from "./NavBar";

const cx = classNames.bind(styles)

export default function HeaderInner(){
    return(
        <header className={cx("page-header")}>
            <div className={cx('container')}>
                <div className={cx("d-flex", "page-header__inner")}>
                    <div className={cx("header__logo", "header__logo_mob")}>
                        <Link href="/"><img src="images/dest/logo-b.svg" alt="" /></Link>
                    </div>
                    <div className={cx("d-flex", "justify-start")}>
                        <div className={cx("header__logo", "header__logo_page")}>
                            <Link href="/"><img src="images/dest/logo-small.svg" alt="" /></Link>
                        </div>
                        <NavBar />
                    </div>
                    <div className={cx("header__links", "header__links_page")}>
                        <Link className={cx("header__links-lang", "header__links-lang_b", "link")} href="#">Eng</Link>
                        <Link className={cx("header__links-search", "header__links-search_b")} href="#">
                            <img className={cx("icon-search", "icon-search_b")} src="images/dest/icons/search-icon.svg" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}