import classNames from 'classnames/bind';
import styles from '@/styles/Tags.module.scss';

const cxTags = classNames.bind(styles);

export default function Tags({
  tags,
  getPosts,
  activeTags,
  type,
  nameField,
  filterField,
}) {
  return (
    <section
      className={cxTags('page-tags', type === 'black' && 'page-tags_black')}
    >
      {tags.map((tag) => (
        <button
          type="button"
          key={`tag_${tag[filterField]}`}
          value={tag[filterField]}
          className={
            activeTags.includes(String(tag[filterField]))
              ? cxTags('active')
              : ''
          }
          onClick={getPosts}
        >
          {tag[nameField]}
        </button>
      ))}
    </section>
  );
}
