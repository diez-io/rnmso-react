import classNames from 'classnames/bind';
import stylesAfishaPage from '@/styles/PageAfisha.module.scss';
import PosterItem from '@/components/calendar/PosterItem';
import {getMonthStringVar2} from "../../pages/api/date";

const cxAfisha = classNames.bind(stylesAfishaPage);

export default function PosterSection({ posts }) {
    const result = {};
    posts.forEach((post) => {
        const dt = new Date(post.dt);
        const month = dt.getMonth();
        if(!(month in result)) result[month] = [];
        result[month].push(post);
    });
    const resultEntries = Object.entries(result);
  return (
      <section className={cxAfisha('page-poster')}>
          {resultEntries.map((section) => (
              <div key={`section_${section[0]}`} className={cxAfisha('poster-section')}>
                  <h3 className="h3">{getMonthStringVar2(section[0])}</h3>
                  <div className={cxAfisha('poster-section__items')}>
                      {section[1]?.map((post) => (
                          <PosterItem key={`item-poster_${post.id}`} post={post} />
                      ))}
                  </div>
              </div>
          ))}
      </section>
  );
}
