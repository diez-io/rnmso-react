import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from '@/styles/Main.module.scss';
import stylesOrchestra from '@/styles/PageMainOrchestra.module.scss';

const cx = classNames.bind(styles);
const cxOrchestra = classNames.bind(stylesOrchestra);

export default function Orchestra({ posts = orchestra }) {
  return (
    <div
      className={classNames(cxOrchestra('orchestra-articles'), cx('d-flex'))}
    >
      {posts.map((post, i) => (
        <article
          key={`orchestra_${post.id}`}
          className={classNames(
            cxOrchestra('orchestra-article'),
            cx('grid__inner', 'grid__inner_50')
          )}
        >
          <div className={cx('square-img__item')}>
            <picture
              className={cx('square-img__body', {
                'square-img__body_circle': i === 0,
              })}
            >
              <Image width={200} height={200} src={post.image} alt="" />
            </picture>
          </div>
          <p className={cxOrchestra('orchestra-article__text')}>{post.title}</p>
        </article>
      ))}
    </div>
  );
}
const orchestra = [
    {
      "id": "1",
      "title": "Анастасия Никопольская, виолончель\n Екатерина Башкирцева, первая скрипка, концертмейстер оркестра\n Павел Чередниченко, гобой, первый солист",
      "image": "/images/dest/content/main/band1.png"
    },
    {
      "id": "2",
      "title": "Данила Мартынов, альт\n Илья Бекоев, первая скрипка\n Павел Чередниченко, гобой, первый солист",
      "image": "/images/dest/content/main/band2.png"
    },
    {
      "id": "3",
      "title": "Анастасия Никопольская, виолончель\n Екатерина Башкирцева, первая скрипка, концертмейстер оркестра\n Павел Чередниченко, гобой, первый солист",
      "image": "/images/dest/content/main/band3.png"
    },
    {
      "id": "4",
      "title": "Серафима Кувшинникова, артистка оркестра\n Илья Бекоев, первая скрипка\n Павел Чередниченко, гобой, первый солист",
      "image": "/images/dest/content/main/band4.png"
    }
  ]
