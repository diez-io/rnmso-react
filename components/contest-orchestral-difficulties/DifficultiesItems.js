import classNames from 'classnames/bind';
import styles from '@/styles/Main.module.scss';
import stylesDiff from '@/styles/PageOrchestralDifficulties.module.scss';

const cx = classNames.bind(styles);
const cxDiff = classNames.bind(stylesDiff);

export default function DifficultiesItems({ items, tags }) {
  const results = [];
  items.forEach((itemsInGroup, group) => {
    itemsInGroup.length &&
      results.push(
        <section
          key={`group_${group}`}
          className={classNames(cx('d-flex'), cxDiff('diff-section'))}
        >
          <div className={cxDiff('diff__title')}>
            <h3 className="h3">
              {tags.filter((f) => f.id === group)[0]?.title}
            </h3>
          </div>
          <div
            className={classNames(
              cxDiff('diff-items'),
              cx('d-flex', 'flex-wrap', 'justify-start')
            )}
          >
            {itemsInGroup.map((item) => (
              <DifficultiesItem key={`diff_${item.id}`} item={item} />
            ))}
          </div>
        </section>
      );
  });

  return <section className={cxDiff('page-diff')}>{results}</section>;
}
function DifficultiesItem({ item }) {
  return <div className={cxDiff('diff-item')}>{item.title}</div>;
}
