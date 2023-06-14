import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from '@/styles/Main.module.scss';
import stylesNews from '@/styles/PageNews.module.scss';
import { getNewsPostsLive } from '@/lib/loadNewsPage';
import PageTitle from '../../components/PageTitle';

const cx = classNames.bind(styles);
const cxNews = classNames.bind(stylesNews);

export async function getStaticProps() {
  const posts = await getNewsPostsLive();
  return {
    props: {
      bodyClass: 'bg-white',
      posts,
    },
  };
}
export default function News({ posts }) {
  return (
    <>
      <div className="container">
        <PageTitle
          type="links"
          title="Новости"
          links={[
            { link: '/video', name: 'Видео' },
            { link: '/photo', name: 'Фото' },
            { link: '/news', name: 'Новости', selected: true },
            { link: '/press', name: 'Пресса' },
          ]}
        />
        <section className={cxNews('page-news')}>
          <div className={cxNews('news-articles')}>
            {posts.map((post) => (
              <article
                key={`news_${post.id}`}
                className={cxNews('news-article')}
              >
                <span className={cxNews('news-article__date')}>
                  {post.date}
                </span>
                <h4 className="h4">{post.title}</h4>
                <div
                  className={cxNews('news-article__description')}
                  dangerouslySetInnerHTML={{ __html: post.announcement }}
                />
                <Link
                  href={`/news/${post.id}`}
                  className={cxNews('news-article__link')}
                >
                  Читать далее
                </Link>
                <Link href="#" className={cxNews('news-article__link')}>
                  Скачать заявку
                </Link>
              </article>
            ))}
          </div>
          <div className={cxNews('news-buttons')}>
            <Link href="#" className="btn btn_transparent">
              Еще
            </Link>
            <Link
              href="#"
              className={classNames(
                'btn',
                'btn_transparent',
                cxNews('news-buttons__subscribe')
              )}
            >
              Подписаться на рассылку
            </Link>
          </div>
        </section>
      </div>
      <section className={cxNews('news-subscribe')}>
        <div className="container">
          <p>Подпишитесь на нашу рассылку пресс-релизов</p>
          <input
            type="text"
            className={cxNews('news-subscribe__input')}
            placeholder="email"
          />
          <Link
            href="#"
            className={classNames('btn', cxNews('news-subscribe__btn'))}
          >
            Подписаться
          </Link>
        </div>
      </section>
    </>
  );
}
