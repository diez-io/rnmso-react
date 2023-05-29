import classNames from "classnames/bind";
import styles from '@/styles/Main.module.scss';

const cx = classNames.bind(styles);

export default function Photo(){
    return(
        <div className="container">
            <section className={cx('page-title')}>
                <h1 className={cx('h1')}>Фото</h1>
            </section>
        </div>
    )
}