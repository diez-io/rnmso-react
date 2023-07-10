import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from '@/styles/Main.module.scss';
import stylesMasters from '@/styles/PageMainMasters.module.scss';

const cx = classNames.bind(styles);
const cxMasters = classNames.bind(stylesMasters);

export default function Masters({ posts = masters }) {
  return (
    <div
      className={classNames(
        cxMasters('masters-articles'),
        cx('d-flex', 'flex-wrap')
      )}
    >
      {posts.map((post, i) => (
        <article
          key={`masters_${post.id}`}
          className={classNames(
            cxMasters('masters-article'),
            cx('grid__inner', 'grid__inner_33')
          )}
        >
          <div className={cx('square-img__item')}>
            <picture
              className={cx('square-img__body', {
                'square-img__body_round': i === 1,
                'square-img__body_circle': i === 2,
              })}
            >
              <Image width={200} height={200} src={post.image} alt="" />
            </picture>
          </div>
          <div className={cxMasters('masters-article__text')}>
            <p>{post.position}</p>
            <div className={cxMasters('masters-article__text_name')}>
              {post.title}
            </div>
            <p>{post.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
const masters = [
    {
        "id": "1",
        "title": "валентин урюпин",
        "position": "дирижер",
        "description": "‘Одному мужчине для достижения успеха нужен оркестр, а другому достаточно одной скрипки’.",
        "image": "/images/dest/content/main/master1.png"
    },
    {
        "id": "2",
        "title": "александр сладковский",
        "position": "дирижер",
        "description": "‘Восточного экономического форума прозвучат Симфонические танцы и Третий фортепианный концерт Рахманинова‘.",
        "image": "/images/dest/content/main/master2.png"
    },
    {
        "id": "3",
        "title": "Теодор Курентзис",
        "position": "дирижер",
        "description": "‘Когда сто человек, каждый из которых — индивидуальность, складываются в единое звуковое поле, то всё прошибает насквозь‘.",
        "image": "/images/dest/content/main/master3.png"
    }
]
