import Link from 'next/link';
import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from '@/styles/Main.module.scss';
import stylesNews from '@/styles/PageNews.module.scss';
import { getPressPostsLive } from '@/lib/loadPressPage';
import PageTitle from '../../components/PageTitle';

const cx = classNames.bind(styles);
const cxNews = classNames.bind(stylesNews);

export async function getStaticProps() {
  const posts = await getPressPostsLive();
  return {
    props: {
      bodyClass: 'bg-white',
      posts,
    },
  };
}
export default function Press({ posts }) {
  return (
    <>
      <div className="container">
        <PageTitle
          type="links"
          title="Пресса"
          links={[
            { link: '/video', name: 'Видео' },
            { link: '/photo', name: 'Фото' },
            { link: '/news', name: 'Новости' },
            { link: '/press', name: 'Пресса', selected: true },
          ]}
        />
        <section className={cxNews('page-news')}>
          <div className={cxNews('news-articles')}>
            {posts.map((post) => (
              <article
                key={`news_${post.id}`}
                className={cxNews('news-article')}
              >
                <div className={cxNews('news-article__img')}>
                  <Image src={post.image} alt="" width="200" height="20" />
                </div>
                <h4 className="h4">{post.title}</h4>
                <div
                  className={cxNews('news-article__description')}
                  dangerouslySetInnerHTML={{ __html: post.text }}
                />
                <Link
                  href={post.link}
                  className={cxNews('news-article__link')}
                  target="_blank"
                >
                  Читать далее
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
