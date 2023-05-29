import classNames from "classnames/bind";
import styles from '@/styles/Main.module.scss';

const cx = classNames.bind(styles);

export async function getStaticProps() {
    return {
        props: {
            bodyClass: cx('bg-gray40', 'light-fonts'),
        },
    };
}

export default function Video(){
    return(
        <div className="container">
            <section className={cx('page-title')}>
                <h1 className={cx('h1')}>Видео</h1>
            </section>
        </div>
    )
}