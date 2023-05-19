import { getAfishaPost } from '@/lib/loadAfishaPage';

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
  const postData = getAfishaPost(params.id);
  return {
    props: {
      postData,
    },
  };
}
export default function CalendarPost({ postData }) {
  return (
    <div className="container">
      <section className="page-concert">
        <div className="d-flex concert-section">
          <div className="grid__inner grid__inner_50 concert-section__photo gallery">
            <div className="gallery__main">
              <picture>
                <img src="images/dest/content/main/afisha1.png" alt="" />
              </picture>
            </div>
            <div className="gallery__items">
              <picture className="gallery__item">
                <img src="images/dest/content/main/afisha1.png" alt="" />
              </picture>
              <picture className="gallery__item">
                <img src="images/dest/content/main/afisha2.png" alt="" />
              </picture>
              <picture className="gallery__item active">
                <img src="images/dest/content/main/afisha3.png" alt="" />
              </picture>
              <picture className="gallery__item">
                <img src="images/dest/content/main/afisha4.png" alt="" />
              </picture>
              <picture className="gallery__item">
                <img src="images/dest/content/main/afisha1.png" alt="" />
              </picture>
            </div>
          </div>
          <div className="grid__inner grid__inner_50 concert-section__descr">
            <div className="concert-section__title">
              <p>27 Ноября Суббота, 19:00</p>
              <h4 className="h4">Международный фестиваль-конкурс творчества</h4>
              <span>
                Хабаровск
                <br />
                Большой зал Хабаровской краевой филармонии
              </span>
            </div>
            <div className="grid__inner concert-section__photo concert-section__photo_mob">
              <div className="gallery-mob__items">
                <picture className="gallery-mob__item">
                  <img src="images/dest/content/main/afisha1.png" alt="" />
                </picture>
                <picture className="gallery-mob__item">
                  <img src="images/dest/content/main/afisha2.png" alt="" />
                </picture>
                <picture className="gallery-mob__item">
                  <img src="images/dest/content/main/afisha3.png" alt="" />
                </picture>
                <picture className="gallery-mob__item">
                  <img src="images/dest/content/main/afisha4.png" alt="" />
                </picture>
                <picture className="gallery-mob__item">
                  <img src="images/dest/content/main/afisha1.png" alt="" />
                </picture>
              </div>
            </div>
            <div className="concert-section__links">
              <a className="btn" href="#">
                билеты
              </a>
            </div>
            <div className="concert-section__text">
              <p>
                Государственный академический симфонический оркестр России имени
                Е.Ф. Светланова
              </p>
              <p>Большой джазовый оркестр под управлением Петра Востокова</p>
              <p>
                Владимир Юровский, дирижёр
                <br />
                Надежда Гулицкая, сопрано
                <br />
                Анна Бутурлина, сопрано
                <br />
                Елена Манистина, меццо-сопрано
                <br />
                Борис Пинхасович, баритон
                <br />
                Елена Веремеенко, меццо-сопрано
                <br />
                Ярослав Тимофеев, ведущий
                <br />
              </p>
              <table>
                <tr>
                  <td>Филоненко</td>
                  <td>Memory code, 2021</td>
                </tr>
                <tr>
                  <td>Крохалев</td>
                  <td>Catcher, 2021</td>
                </tr>
                <tr>
                  <td>Раннев</td>
                  <td>Сильнейшие, 2021</td>
                </tr>
                <tr>
                  <td>Горлинский</td>
                  <td>Терракотовый, 2021</td>
                </tr>
                <tr>
                  <td>Чернышков</td>
                  <td>Spokoyno, 2021</td>
                </tr>
                <tr>
                  <td>Рыкова</td>
                  <td>X is where I am, 2021</td>
                </tr>
                <tr>
                  <td>Полеухина</td>
                  <td>
                    A hovering heart stretches the page until it floats, 2021
                  </td>
                </tr>
                <tr>
                  <td>Васильев</td>
                  <td>Как я провёл это лето, 2021</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="d-flex concert-section">
          <div className="grid__inner grid__inner_25">
            <h4 className="h4">о концерте</h4>
          </div>
          <div className="grid__inner grid__inner_75">
            <div className="concert-section__text">
              <p>
                На концерте представлены восемь мировых премьер – симфонические
                и камерные произведения композиторов-лауреатов программы
                «Русская музыка 2.1». Это второй сезон проекта Aksenov Family
                Foundation, созданного для поддержки российских композиторов и
                исполнения их лучших сочинений в нашей стране и за рубежом.
                Партнерами проекта в 2021 году стали Московская филармония и
                Московский музей современного искусства.
              </p>
              <p>
                Владимир Горлинский, Олег Крохалев, Владимир Раннев, Александра
                Филоненко создают сочинения для симфонического оркестра, которые
                исполнит Российский национальный молодежный симфонический
                оркестр под управлением Фёдора Леднёва. Антон Васильев, Марина
                Полеухина, Елена Рыкова и Александр Чернышков работают над
                камерными опусами для Московского Ансамбля Современной Музыки.
              </p>
            </div>
          </div>
        </div>

        <div className="concert-section">
          <div className="d-flex concert-section__season_title">
            <div className="grid__inner grid__inner_75">
              <h4 className="h4">Абонемент №28</h4>
              <span>«Вещь в себе». Ведущий цикла — Ярослав Тимофеев</span>
            </div>
            <div className="grid__inner grid__inner_25">
              <a href="#" className="btn">
                купить абонемент
              </a>
            </div>
          </div>
          <div className="d-flex concert-section__season_table">
            <div className="grid__inner grid__inner_25">
              29 Декабря
              <br />
              Среда, 19:00
            </div>
            <div className="grid__inner grid__inner_75">
              Российский национальный молодёжный симфонический оркестр
              <br />
              Туган Сохиев, дирижёр
              <br />
              Александр Канторов, фортепиано
              <br />В программе — Шуман
            </div>
          </div>
          <div className="d-flex concert-section__season_table">
            <div className="grid__inner grid__inner_25">
              21 Января
              <br />
              Пятница, 19:00
            </div>
            <div className="grid__inner grid__inner_75">
              Государственный академический симфонический оркестр России имени
              Е. Ф. Светланова
              <br />
              Владимир Юровский, дирижёр
              <br />
              Томас Хэмпсон, бас-баритон
              <br />В программе — Р. Штраус, Малер, Й. Гайдн
            </div>
          </div>
          <div className="d-flex concert-section__season_table">
            <div className="grid__inner grid__inner_25">
              12 Марта
              <br />
              Суббота, 19:00
            </div>
            <div className="grid__inner grid__inner_75">
              Оркестр Московской Филармонии <br />
              Юрий Симонов, дирижеёр <br />
              Иван Почекин, фортепиано
              <br />В программе — Скрябин, Шостакович, Губайдулина
            </div>
          </div>
        </div>
      </section>

      <section className="page-poster">
        <h2 className="h2">также рекомендуем</h2>
        <div className="poster-section">
          <div className="poster-section__items">
            <article className="poster-section__item">
              <div className="poster-section__date">
                <span className="poster-section__date-num">7</span>
                <p className="poster-section__date-text">Понедельник 19:00</p>
              </div>
              <picture className="poster-section__img">
                <img src="images/dest/content/main/afisha1.png" alt="" />
              </picture>
              <div className="poster-section__text">
                <h4 className="h4">
                  <a className="link" href="#">
                    Концерт в Хабаровской филармонии
                  </a>
                </h4>
                <p>
                  Алексей Рубин, дирижёр
                  <br />
                  Елена Таросян (скрипка)
                </p>
                <p>
                  Хабаровск
                  <br />
                  Большой зал Хабаровской краевой филармонии
                </p>
                <span>
                  Абонемент №28:
                  <br />
                  «Вещь в себе». Ведущий цикла— Ярослав Тимофеев
                </span>
              </div>
              <div className="poster-section__actions">
                <a href="#" className="btn">
                  купить абонемент
                </a>
              </div>
            </article>
            <article className="poster-section__item">
              <div className="poster-section__date">
                <span className="poster-section__date-num">7</span>
                <p className="poster-section__date-text">Понедельник 19:00</p>
              </div>
              <picture className="poster-section__img">
                <img src="images/dest/content/main/afisha1.png" alt="" />
              </picture>
              <div className="poster-section__text">
                <h4 className="h4">
                  <a className="link" href="#">
                    Концерт в Хабаровской филармонии
                  </a>
                </h4>
                <p>
                  Алексей Рубин, дирижёр
                  <br />
                  Елена Таросян (скрипка)
                </p>
                <p>
                  Хабаровск
                  <br />
                  Большой зал Хабаровской краевой филармонии
                </p>
                <span>
                  Абонемент №28:
                  <br />
                  «Вещь в себе». Ведущий цикла— Ярослав Тимофеев
                </span>
              </div>
              <div className="poster-section__actions">
                <a href="#" className="btn">
                  купить
                </a>
              </div>
            </article>
            <article className="poster-section__item">
              <div className="poster-section__date">
                <span className="poster-section__date-num">7</span>
                <p className="poster-section__date-text">Понедельник 19:00</p>
              </div>
              <picture className="poster-section__img">
                <img src="images/dest/content/main/afisha1.png" alt="" />
              </picture>
              <div className="poster-section__text">
                <h4 className="h4">
                  <a className="link" href="#">
                    Концерт в Хабаровской филармонии
                  </a>
                </h4>
                <p>
                  Алексей Рубин, дирижёр
                  <br />
                  Елена Таросян (скрипка)
                </p>
                <p>
                  Хабаровск
                  <br />
                  Большой зал Хабаровской краевой филармонии
                </p>
                <span>
                  Абонемент №28:
                  <br />
                  «Вещь в себе». Ведущий цикла— Ярослав Тимофеев
                </span>
              </div>
              <div className="poster-section__actions">
                <span>раскуплено</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
