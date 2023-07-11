import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setBg} from "../../store/bgSlice";
import {setActiveMenu} from "../../store/menuSlice";
import {getAllConductorsSlugs, getConductor} from "../../lib/loadConductorsPage";
import PageTitle from "../../components/PageTitle";
import classNames from "classnames/bind";
import styles from '@/styles/Main.module.scss';
import stylesAfishaPage from '@/styles/PageAfisha.module.scss';

import PosterItem from "../../components/calendar/PosterItem";
import SoloCard from "../../components/soloist/SoloCard";
import {loadAfisha} from "../../lib/loadAfisha";

const cx = classNames.bind(styles);
const cxAfisha = classNames.bind(stylesAfishaPage);

export async function getStaticPaths() {
    const paths = await getAllConductorsSlugs();
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const data = await getConductor(params.slug);
    const recommendedPosts = await loadAfisha('limit=3');
    return {
        props: {
            data,
            recommendedPosts,
        },
    };
}
export default function ConductorsPost({data, recommendedPosts}){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBg('bg-pink'));
        dispatch(setActiveMenu('orchestra'));
    });
    return(
        <>
            <div className="container">
                <PageTitle
                    type="inner"
                    titleBack="Дирижеры сезона"
                    linkBack="/conductors"
                />
                <SoloCard data={data} />
                <section className={cxAfisha('page-poster')}>
                    <h2 className={cx('h2')}>концерты</h2>
                    <div className={cxAfisha('poster-section')}>
                        <div className={cxAfisha('poster-section__items')}>
                            {recommendedPosts?.map((post) => (
                                <PosterItem key={`item-poster_${post.id}`} post={post} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}