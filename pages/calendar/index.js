import Image from "next/image"
import styles from "../../styles/Main.module.scss"
import stylesAfishaPage from "../../styles/AfishaPage.module.scss"
import classNames from 'classnames/bind'
import Link from "next/link"
import {loadAfishaPage} from "@/lib/loadAfishaPage"


const cx = classNames.bind(styles);
const cxAfisha = classNames.bind(stylesAfishaPage);

export async function getStaticProps() {
    const afishaPage = await loadAfishaPage();
    return {
        props: {
            bodyClass: cx("bg-green") ,
            afishaPage
        }
    };
}
export default function Calendar({afishaPage}){
    return (
        <>
            <div className={cx("container")}>
                <section className={cx("page-title")}>
                    <h1 className={cx("h1")}>Афиша</h1>
                    <div className={cx("page-title__links")}>
                        <Link className={cx("link", "link_calendar")} href="#">Календарь</Link>
                        <Link className={cx("link", "link_filter")} href="#">Фильтр</Link>
                    </div>
                </section>

                <section className={cx("page-tags")}>
                    <Link href="#">180 лет Чайковскому</Link>
                    <Link href="#">Урюпин</Link>
                    <Link href="#">Франкфурт</Link>
                    <Link href="#">Опера</Link>
                    <Link href="#">Новая музыка</Link>
                    <Link href="#">Концерты в Москве</Link>
                    <Link href="#">2022</Link>
                </section>
                <section className={cxAfisha("page-poster")}>
                    {afishaPage.map((section, i) => (
                        <PosterSection key={'section-poster_'+i} section={section} />
                    ))}
                </section>
            </div>
        </>
    )
}

function PosterSection({section}){
    return(
        <>
            <div className={cxAfisha("poster-section")}>
                <h3 className={cx("h3")}>{section.month}</h3>
                <div className={cxAfisha("poster-section__items")}>
                    {section.posts.map((post) => (
                        <PosterItem key={'item-poster_'+post.id} post={post} />
                    ))}
                </div>
            </div>
        </>
    )
}
function PosterItem({post}){
    return(
        <>
            <article className={cxAfisha("poster-section__item")}>
                <div className={cxAfisha("poster-section__date")}>
                    <span className={cxAfisha("poster-section__date-num")}>{post.date_num}</span>
                    <p className={cxAfisha("poster-section__date-text")}>
                        {post.date_text}
                    </p>
                </div>
                <picture className={cxAfisha("poster-section__img")}>
                    <Image width={200} height={200} src={post.image} alt=""/>
                </picture>
                <div className={cxAfisha("poster-section__text")}>
                    <h4 className={cx("h4")}><Link className={cx("link")} href="#">{post.title}</Link>
                    </h4>
                    <p>
                        {post.people}
                    </p>
                    <p>
                        {post.place}
                    </p>
                    <span>
                        {post.abonement}
                    </span>
                </div>
                <div className={cxAfisha("poster-section__actions")}>
                    <a href="#" className={cx("btn")}>купить абонемент</a>
                </div>
            </article>
        </>
    )
}