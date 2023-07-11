import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setBg} from "../../store/bgSlice";
import {setActiveMenu} from "../../store/menuSlice";
import PageTitle from "../../components/PageTitle";
import classNames from "classnames/bind";
import styles from '@/styles/Main.module.scss';
import stylesAfishaPage from '@/styles/PageAfisha.module.scss';

import PosterItem from "../../components/calendar/PosterItem";
import SoloCard from "../../components/soloist/SoloCard";
import {getAllSoloistsSlugs, getSoloist} from "../../lib/loadSoloistsPage";
import {loadAfisha} from "../../lib/loadAfisha";

const cx = classNames.bind(styles);
const cxAfisha = classNames.bind(stylesAfishaPage);

export async function getStaticPaths() {
    const paths = await getAllSoloistsSlugs();
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const data = await getSoloist(params.slug);
    const recommendedPosts = await loadAfisha("limit=3");
    return {
        props: {
            data,
            recommendedPosts,
        },
    };
}
export default function SoloistsPost({data, recommendedPosts}){
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
                    titleBack="Солисты и ведущие сезона"
                    linkBack="/soloists"
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