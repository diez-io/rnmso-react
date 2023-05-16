import Link from 'next/link'
import {useState} from "react"
import Image from "next/image"
import {MainLayout} from "../components/MainLayout"
import Player from "../components/Player"

import {loadAfisha, loadOrchestra, loadMasters, loadNews, loadVideo, loadPhoto, loadPhotoSlider} from "@/lib/loadMainPosts"

import styles from "../styles/Main.module.scss"
import stylesMainPage from "../styles/MainPage.module.scss"
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);
const cxMain = classNames.bind(stylesMainPage);

export async function getStaticProps() {
    const afisha = await loadAfisha();
    const orchestra = await loadOrchestra();
    const masters = await loadMasters();
    const news = await loadNews();
    const video = await loadVideo();
    const photo = await loadPhoto();
    const photoSlider = await loadPhotoSlider();

    return { props: { afisha, orchestra, masters, news, video, photo, photoSlider } };
}

export default function Main({afisha, orchestra, masters, news, video, photo, photoSlider}) {
  return (
    <>
            <section className={classNames(cx("bg-green"), cxMain("section-main", "section-main__poster"))}>
                <div className={cx("container")}>
                    <h2 className={cx("h2")}>Афиша</h2>
                    <Afisha posts={afisha}/>
                    <Link href={"/calendar"} className={cxMain("link-main__all")}>все концерты</Link>
                    <div className={cx("clearfix")}/>
                </div>
            </section>

            <section className={cxMain("section-main", "section-main__orchestra")}>
                <div className={cx("container")}>
                    <h2 className={cx("h2")}>Оркестр</h2>
                    <Orchestra posts={orchestra} />
                    <Link className={cxMain("link-main__all")} href="#">состав оркестра</Link>
                    <div className={cx("clearfix")}/>
                </div>
            </section>

            <section className={cxMain("section-main", "section-main__masters")}>
                <div className={cx("container")}>
                    <h2 className={cx("h2")}>Мэтры об оркестре</h2>
                    <Masters posts={masters} />
                </div>
            </section>

            <section className={classNames(cx("bg-purple"), cxMain("section-main", "section-main__news"))}>
                <div className={cx("container")}>
                    <h2 className={cx("h2")}>Новости</h2>
                    <News posts={news} />
                    <Link className={cxMain("link-main__all")} href="#">все новости</Link>
                    <div className={cx("clearfix")}/>
                </div>
            </section>

            <section className={classNames(cx("bg-gray40"), cxMain("section-main", "section-main__video"))}>
                <div className={cx("container")}>
                    <h2 className={cx("h2")}>Видео</h2>
                    <Video posts={video} />
                </div>
            </section>

            <section className={classNames(cx("bg-brown"), cxMain("section-main", "section-main__photo"))}>
                <div className={cx("container")}>
                    <h2 className={cx("h2")}>Процесс</h2>
                    <Photo posts={photo} />
                </div>
                <PhotoSlider posts={photoSlider} />
                <div className={cx("container")}>
                    <a className={cxMain("link-main__all")} href="#">все фотографии</a>
                </div>
            </section>

    </>
  )
}

function Afisha({posts}){
    return(
        <>
            <div className={cxMain("poster-articles")}>
                {posts.map((post, i) => (
                    <article key={"afisha_"+post.id} className={classNames(cx("d-flex"), cxMain("poster-article"))}>
                        <div className={cx("grid__inner", "grid__inner_50", "d-flex", "justify-start", "flex-nowrap_mob")}>
                            <div className={cxMain("poster-article__date")}>
                                <span className={cxMain("poster-article__date-num")}>{post.dateNum}</span>
                                <p className={cxMain("poster-article__date-text")}>
                                    {post.dateText}
                                </p>
                            </div>
                            <div className={cxMain("poster-article__text")}>
                                <h4 className={cx("h4")}><Link className={cx("link")} href="#">{post.title}</Link></h4>
                                <p>
                                    {post.description}
                                </p>
                                <p>
                                    {post.place}
                                </p>
                            </div>
                        </div>
                        <div className={cx("grid__inner", "grid__inner_50")}>
                            {(i === 0)
                             ?  <div className={cx("square-img__item", "square-img__unset_mob")}>
                                    <picture className={classNames(cxMain("poster-article__img"), cx("square-img__body", "square-img__body_circle"))}>
                                    <Image objectFit="cover" layout="fill" src={post.image} alt=""/>
                                    </picture>
                                </div>
                            :   <picture className={cxMain("poster-article__img")}>
                                    <Image objectFit="cover" layout="fill" src={post.image} alt=""/>
                                </picture>
                            }
                        </div>
                    </article>
                ))}

            </div>
        </>
    )
}
function Orchestra({posts}) {
    return (
        <>
            <div className={classNames(cxMain("orchestra-articles"), cx("d-flex"))}>
                {posts.map((post, i) => (
                    <article key={"orchestra_"+post.id} className={classNames(cxMain("orchestra-article"), cx("grid__inner", "grid__inner_50"))}>
                        <div className={cx("square-img__item")}>
                            <picture className={cx(
                                "square-img__body",
                                {"square-img__body_circle": i === 0}
                            )}>
                                <Image objectFit="cover" layout="fill" src={post.image} alt=""/>
                            </picture>
                        </div>
                        <p className={cxMain("orchestra-article__text")}>
                            {post.title}
                        </p>
                    </article>
                ))}
            </div>
        </>
    )
}
function Masters({posts}) {
    return (
        <>
            <div className={classNames(cxMain("masters-articles"), cx("d-flex", "flex-wrap"))}>
                {posts.map((post, i) => (
                    <article key={"masters_"+post.id} className={classNames(cxMain("masters-article"), cx("grid__inner", "grid__inner_33"))}>
                        <div className={cx("square-img__item")}>
                            <picture className={cx(
                                "square-img__body",
                                {
                                    "square-img__body_round" : i===1,
                                    "square-img__body_circle" : i===2
                                }
                            )}>
                                <Image layout="fill" src={post.image} alt=""/>
                            </picture>
                        </div>
                        <div className={cxMain("masters-article__text")}>
                            <p>{post.position}</p>
                            <div className={cxMain("masters-article__text_name")}>{post.title}</div>
                            <p>{post.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </>
    )
}
function News({posts}){
    return(
        <>
            <div className={cxMain("news-articles")}>
                {posts.map((post) => (
                    <article key={"news_"+post.id} className={cxMain("news-article")}>
                        <span>{post.date}</span>
                        <h4 className={cx("h4")}><Link className={cx("link")} href="#">{post.title}</Link></h4>
                    </article>
                ))}
            </div>
        </>
    )
}
function Video({posts}){
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("");

    const handleToggle = (url) => {
        setOpen((prev) => !prev);
        !open ? setUrl(url) : "";
    };
    const onCloseModal = () => setOpen(false);
    return(
        <>
            <div className={cxMain("video-articles")}>
                <article key={"video_"+posts[0].id} className={classNames(cxMain("video-article", "video-article_first"), cx("d-flex"))}>
                    <div className={classNames(cxMain("video-article__text"), cx("grid__inner", "grid__inner_50"))}>
                        <p>{posts[0].date} · {posts[0].place}</p>
                        <h4 className={cx("h4")}><Link className={cx("link")} href="#">{posts[0].title}</Link></h4>
                    </div>
                    <div className={cx("grid__inner", "grid__inner_50")}>
                        <div className={cx("square-img__item")}>
                            <picture className={cx("square-img__body", "square-img__body_circle")} onClick={() => handleToggle(posts[0].url)}>
                                <Image objectFit="cover" layout="fill" src={posts[0].image} alt=""/>
                            </picture>
                        </div>
                    </div>
                </article>
                <div className={cx("d-flex", "flex-wrap")}>
                    {posts.map((post, i) => (
                        i > 0 &&
                            <article key={"video_"+post.id} className={classNames(cxMain("video-article"), cx("grid__inner", "grid__inner_50"))}>
                                <picture className={cxMain("video-article__img")} onClick={() => handleToggle(post.url)}>
                                    <Image objectFit="cover" layout="fill" src={post.image} alt=""/>
                                </picture>
                                <div className={cxMain("video-article__text")}>
                                    <p>{post.date} · {post.place}</p>
                                    <h4 className={cx("h4")}><Link className={cx("link")} href="#">{post.title}</Link></h4>
                                </div>
                            </article>
                    ))}
                </div>
                <Player open={open} closeModal={onCloseModal} url={url}  />
            </div>
        </>
    )
}
function Photo({posts}) {
    return (
        <>
            <div className={cxMain("photo-articles")}>
                <article key={"photo_"+posts[0].id} className={cxMain("photo-article", "photo-article_first")}>
                    <picture className={cxMain("photo-article__img")}>
                        <Image objectFit="cover" layout="fill" src={posts[0].image} alt=""/>
                    </picture>
                    <div className={cxMain("photo-article__text")}>
                        <h4 className={cx("h4")}><Link className={cx("link")} href="#">{posts[0].title}</Link></h4>
                        <p>{posts[0].count}</p>
                    </div>
                </article>
                <div className={cx("d-flex", "flex-wrap")}>
                    {posts.map((post, i) => (
                        i > 0 &&
                            <article key={"photo_"+post.id} className={classNames(cxMain("photo-article"), cx("grid__inner", "grid__inner_50"))}>
                                <picture className={cxMain("photo-article__img")}>
                                    <Image objectFit="cover" layout="fill" src={post.image} alt=""/>
                                </picture>
                                <div className={cxMain("photo-article__text")}>
                                    <h4 className={cx("h4")}><Link className={cx("link")} href="#">{post.title}</Link></h4>
                                    <p>{post.count}</p>
                                </div>
                            </article>
                    ))}
                </div>
            </div>
        </>
    )
}
function PhotoSlider({posts}) {
    return (
        <>
            <div className={cxMain("photo-slider")}>
                {posts.map((post) => (
                    <article key={"slider_"+post.id} className={cxMain("photo-slider-article")}>
                        <picture className={cxMain("photo-slider-article__img")}>
                            <Image objectFit="cover" layout="fill" src={post.image} alt=""/>
                        </picture>
                        <div className={cxMain("photo-slider-article__text")}>
                            <Link className={cx("link")} href="#">{post.title}</Link>
                            <p>{post.count}</p>
                        </div>
                    </article>
                ))}
            </div>
        </>
    )
}

Main.getLayout = (page) => (
    <MainLayout>
        {page}
    </MainLayout>
)