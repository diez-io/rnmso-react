import Link from 'next/link';
import classNames from 'classnames/bind';
import { getAllNewsPostIds, getNewsPost } from '@/lib/loadNewsPage';
import stylesNav from '@/styles/NavPrevNext.module.scss';
import stylesNewsPost from '@/styles/PageNewsPost.module.scss';
import PageTitle from '../../components/PageTitle';
import SubscribeBlock from '../../components/subscribe/SubscribeBlock';

const cxNav = classNames.bind(stylesNav);
const cxNewsPost = classNames.bind(stylesNewsPost);

export async function getStaticPaths() {
  const paths = await getAllNewsPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const data = await getNewsPost(params.id);
  return {
    props: {
      bodyClass: 'bg-white',
      data,
    },
  };
}
export default function NewsPost({ data }) {
  return (
    <>
      <div className="container">
        <div className={cxNewsPost('page-news-post_width')}>
          <PageTitle
            type="inner"
            titleBack="Новости"
            linkBack="/news"
            title={data.title}
            titleInfo={data.date}
          />
          <section className={cxNewsPost('page-news-post')}>
            <div
              className={cxNewsPost('news-post__text')}
              dangerouslySetInnerHTML={{ __html: data.text }}
            />
            <div className={cxNav('page__nav')}>
              {data.previous_id && (
                <Link
                  className={cxNav('page__nav_prev')}
                  href={`/news/${data.previous_id}`}
                >
                  Предыдущая новость
                </Link>
              )}
              {data.next_id && (
                <Link
                  className={cxNav('page__nav_next')}
                  href={`/news/${data.next_id}`}
                >
                  Следующая новость
                </Link>
              )}
            </div>
          </section>
        </div>
      </div>
      <SubscribeBlock />
    </>
  );
}
