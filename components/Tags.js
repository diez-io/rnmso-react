import classNames from 'classnames/bind';
import styles from '@/styles/Tags.module.scss';

const cxTags = classNames.bind(styles);

export default function Tags({ tags, getPosts, activeTags }) {
  return (
    <section className={cxTags('page-tags')}>
      {tags.map((tag) => (
        <button
          type="button"
          key={tag.slug}
          value={tag.slug}
          className={activeTags.includes(tag.slug) ? cxTags('active') : ''}
          onClick={getPosts}
        >
          {tag.title}
        </button>
      ))}
    </section>
  );
}
