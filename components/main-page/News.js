import Link from 'next/link';
import classNames from 'classnames/bind';
import stylesNews from '@/styles/PageMainNews.module.scss';
import { displayDateVar1 } from '@/pages/api/date';

const cxNews = classNames.bind(stylesNews);

export default function News({ posts }) {
  return (
    <div className={cxNews('news-articles')}>
      {posts.map((post) => (
        <article key={`news_${post.id}`} className={cxNews('news-article')}>
          <span>{displayDateVar1(post.date)}</span>
          <h4 className="h4">
            <Link className="link" href={`/news/${post.id}`}>
              {post.title}
            </Link>
          </h4>
        </article>
      ))}
    </div>
  );
}
