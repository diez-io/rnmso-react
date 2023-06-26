import PageTitle from "../../components/PageTitle";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setBg} from "../../store/bgSlice";
import {setActiveMenu} from "../../store/menuSlice";
import classNames from "classnames/bind";
import styles from '@/styles/Main.module.scss';
import stylesAbout from '@/styles/PageAbout.module.scss';
import Image from "next/image";

const cx = classNames.bind(styles);
const cxAbout = classNames.bind(stylesAbout);

export default function AboutOrchestra(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBg('bg-pink'));
        dispatch(setActiveMenu('orchestra'));
    });

    return(
        <div className="container">
            <PageTitle title="Об оркестре" />
            <div className={cxAbout("page-about")}>
                <div className={classNames(cx('d-flex'), cxAbout("about-section", "about-section_1"))}>
                    <div className={cxAbout("about-left")}>
                        <div className={cxAbout("about__img")}>
                            <Image width={408} height={572} src="/images/dest/about/about1.png" alt="" />
                        </div>
                        <div className={cxAbout("about__img-descr")}>
                            Анастасия Никопольская, виолончель<br/>
                            Екатерина Башкирцева, первая скрипка, концертмейстер оркестра<br/>
                            Павел Чередниченко, гобой, первый солист
                        </div>
                    </div>
                    <div className={cxAbout("about-right")}>
                        <div className={cxAbout("about__text")}>
                        <p>Российский национальный молодежный симфонический оркестр – Симфоническая академия создан в сентябре 2018 года по поручению Президента Российской Федерации В. В. Путина и развивается в рамках национального проекта «Культура». Это крупнейший молодежный проект в области отечественной оркестровой культуры, в роли его куратора выступает Московская филармония.</p>
                        <p>В своей творческой работе оркестр сочетает российские музыкальные традиции и мировой опыт, решая три принципиальные задачи – художественную, образовательную и просветительскую. Такое сочетание функций, ни одна из которых не является вспомогательной, не имеет аналогов.</p>
                        <p>В составе оркестра – 117 исполнителей из 42 регионов России. Проект предъявляет к участникам высокие требования: большой объем учебной, репетиционной и концертной работы, необходимость личностной и профессиональной самоотдачи, дисциплины, увлеченности. Для развития молодых музыкантов созданы беспрецедентные условия: прекрасная репетиционная база, насыщенная концертная жизнь, сотрудничество с лучшими дирижерами и солистами мира, занятия с концертмейстерами крупнейших оркестров и профессорами известных музыкальных вузов. Сегодня РНМСО – неотъемлемая часть концертной жизни страны: за первые три сезона он провел 119 концертов, выступив более чем в 20 российских городах – от Улан-Удэ до Пскова, от Ростова-на-Дону до Санкт-Петербурга. Выступления оркестра посетили десятки тысяч слушателей. Летом 2021 года оркестр дебютировал в крупнейших европейских залах, выступив в Золотом зале венского Музикферайна и на фестивале в Люцерне.</p>
                        </div>
                    </div>
                </div>
                <div className={classNames(cx('d-flex'), cxAbout("about-section", "about-section_2"))}>
                    <div className={cxAbout("about__img")}>
                        <Image width={1240} height={616} src="/images/dest/about/about2.png" alt="" />
                    </div>
                </div>
                <div className={classNames(cx('d-flex'), cxAbout("about-section", "about-section_3"))}>
                    <div className={cxAbout("about-left")}>
                        <div className={cxAbout("about__descr")}>
                            Луиджи Руссоло и его ассистент Уго Пьятти в миланской студии с инструментами группы «интонарумори» (1913)
                        </div>
                    </div>
                    <div className={cxAbout("about-right")}>
                        <div className={cxAbout("about__text")}>
                            <p>Концерты РНМСО проходили на двух главных сценах Московской филармонии, в Большом зале Московской консерватории, Большом и Малом залах Государственного Кремлевского дворца, концертном зале «Мариинский-2», на Красной площади в Москве, транслировались каналом Medici.tv. Оркестр принимал участие в фестивалях «Звезды белых ночей» Мариинского театра, «Звезды на Байкале», «Рахманиновские дни», «Русская зима», Транссибирский Арт-фестиваль, «Лето. Музыка. Музей», а также в масштабных культурных и общественных событиях, среди которых гала-открытие VII Санкт-Петербургского международного культурного форума, церемония открытия книжного фестиваля «Красная площадь», празднование Дня славянской культуры и письменности.</p>
                            <p>Важную роль в становлении участников проекта играет работа с выдающимися дирижерами, под руководством которых музыканты готовят и представляют публике концертные программы, охватывающие широкий круг эпох и стилей. Оркестр выступал под управлением Валерия Гергиева, Владимира Федосеева, Михаила Юровского, Александра Лазарева, Александра Сладковского и Жан-Кристофа Спинози. С коллективом играют Денис Мацуев, Николай Луганский, Александр Канторов, Пинхас Цукерман, Максим Венгеров, Вадим Репин, Павел Милюков, Дмитрий Маслеев, выступают звезды мировой оперной сцены Анна Нетребко, Хибла Герзмава, Петр Бечала, Эрвин Шротт.</p>
                            <p>Сотрудничество с известными солистами дает молодым артистам возможность овладевать искусством интерпретации и приобщает к высоким стандартам ансамблевой игры.</p>
                        </div>
                    </div>
                </div>
                <div className={classNames(cx('d-flex'), cxAbout("about-section", "about-section_4"))}>
                    <div className={cxAbout("about__text-big")}>
                        Сыграв свое соло на барабане, встретив гостей, мальчонка замирает. Но тишину дворцовых залов вспарывают мелодии, клекот, рокот и трели, издаваемые другими экспонатами-механизмами. Становится понятно, что никакого потребления музейных красивостей тут не случится. Главный экспонат выставки — ты сам.
                    </div>
                </div>
                <div className={classNames(cx('d-flex'), cxAbout("about-section", "about-section_5"))}>
                    <div className={cxAbout("about-left")}/>
                    <div className={cxAbout("about-right")}>
                        <div className={cxAbout("about__text")}>
                            <p>Большое внимание оркестр уделяет просветительским программам, особенно выступлениям в российских вузах. Первые концерты РНМСО состоялись именно в студенческих аудиториях ВГИКа и МГУ; коллектив выступал в старейших университетах России (в Санкт-Петербурге, Томске, Омске, Кемерове, Нижнем Новгороде, Красноярске, Перми, Вологде и Череповце). Оркестр участвует в специальных проектах Московской филармонии «Мама, я меломан» и «Язык музыки». В просветительских концертах принимают участие молодые дирижеры, лауреаты Всероссийского музыкального конкурса Димитрис Ботинис и Алексей Рубин, а также музыковед и ведущий программ Ярослав Тимофеев. РНМСО привлекает в мир музыки молодую аудиторию, так как сверстники часто лучше понимают друг друга, чем разделенные культурными барьерами поколения.</p>
                            <p>Репертуар РНМСО пополняется симфониями Бетховена, Берлиоза, Вебера, Брамса, Дворжака, Чайковского, Рахманинова, Малера, Шостаковича, Локшина, сочинениями Моцарта, Глинки, Шумана, Вагнера, Рихарда Штрауса, Стравинского, Айвза, Респиги, Пярта, Тарнопольского, Райха, Циммермана, Штауда, Видмана и Адамса, крупнейших мастеров эпохи барокко. В афише сезона 2019/20 появились циклы камерных концертов солистов оркестра «Игры в “классики”» и «Вокруг света с “Молодежкой”». Оркестр начал программу по творческому обмену кадрами с филармониями Ульяновска и Ростова-на-Дону. В ноябре 2020 года коллектив выступил на открытии VII Международного фестиваля актуальной музыки «Другое пространство».</p>
                            <p>РНМСО с первых дней функционирует и как Симфоническая академия: творческие занятия и мастер-классы – неотъемлемая часть жизни коллектива. С музыкантами работают наставники из Госоркестра России имени Е. Ф. Светланова, Национального филармонического оркестра России, Российского национального оркестра, Большого симфонического оркестра имени П. И. Чайковского, Академического симфонического оркестра Санкт-Петербургской филармонии, оркестров Большого, Мариинского и Михайловского театров, оркестра musicAeterna, французского ансамбля Matheus, Королевского оркестра амстердамского Консертгебау, Филармонического оркестра Цюрихской оперы, Национального оркестра Капитолия Тулузы, Бостонского симфонического оркестра, Симфонического оркестра Баварского радио, Иерусалимского квартета, университетов Бостона, Штутгарта, Граца, Лугано и Брюсселя. Таким образом артисты РНМСО с первых лет приобщаются к мировым стандартам оркестрового исполнительства, учатся свободно ориентироваться в стилистическом разнообразии музыки, получают мощный творческий стимул для реализации в профессии.</p>
                        </div>
                    </div>
                </div>
                <div className={classNames(cx('d-flex'), cxAbout("about-section", "about-section_6"))}>
                    <div className={cxAbout("about__img")}>
                        <Image width={1240} height={616} src="/images/dest/about/about3.png" alt="" />
                    </div>
                </div>
                <div className={classNames(cx('d-flex'), cxAbout("about-section", "about-section_7"))}>
                    <div className={cxAbout("about-left")}>
                        <div className={cxAbout("about__descr")}>
                            Анастасия Никопольская, виолончель<br/>
                            Екатерина Башкирцева, первая скрипка, концертмейстер оркестра<br/>
                            Павел Чередниченко, гобой, первый солист <br/><br/>
                            Серафима Кувшинникова, артистка оркестра<br/>
                            Илья Бекоев, первая скрипка <br/>
                            Павел Чередниченко, гобой, первый солист
                        </div>
                    </div>
                    <div className={cxAbout("about-right")}>
                        <div className={cxAbout("about__text")}>
                            <p>Сезон 2019/20 был насыщен новыми программами и встречами с выдающимися музыкантами. Оркестр выступал под управлением Владимира Федосеева, Юрия Симонова, Александра Ведерникова, Жан-Кристофа Спинози, Кристиана Ярви, Томаса Зандерлинга, Александра Сладковского, Антонелло Манакорды, Валентина Урюпина, Александра Анисимова, Максима Емельянычева и других дирижеров. В сезоне 2020/21 концерты коллектива прошли под управлением таких мастеров, как Шарль Дютуа, Пинхас Цукерман, Томас Цетмайр, Василий Петренко, Юлиан Рахлин, Василий Синайский, при участии прославленных солистов – в их числе Денис Мацуев, Александр Канторов, Николай Луганский, Вадим Руденко, Александр Романовский, Филипп Копачевский, Вадим Репин, Петр Бечала.</p>
                            <p>В сезоне 2021/22 оркестр выступил со всемирно известными дирижерами; в их числе Александр Лазарев, Филипп Херревеге, Марк Минковски, Пааво Ярви, Максим Емельянычев, Туган Сохиев, Лионель Бренгье. Среди солистов, участвовавших в программах сезона, – Максим Венгеров, Каролин Видман, Эрвин Шротт, Томас Хэмпсон, Соня Йончева, Пьер-Лоран Эмар, Тамара Стефанович и другие. Оркестр участвовал в юбилейном концерте к 100-летию Московской филармонии, в концерте лауреатов программы «Русская музыка 2.1», концертном исполнении оперы «Волшебная флейта» Моцарта и других важнейших событиях сезона. В сезоне 2022/23 коллектив участвует в абонементах «Язык музыки», «Другое пространство. Continuo», «Вещь в себе».</p>
                            <p>Молодежный оркестр – важный кадровый ресурс: сегодня уже более 30 человек, воспитанников РНМСО, работают в лучших оркестрах страны. Ежегодно РНМСО проводит всероссийский конкурс молодых артистов оркестра, который собирает в Москве лучших молодых инструменталистов оркестровых специальностей. Лауреаты конкурса получают приглашение на позицию штатного артиста или стажера Молодежного оркестра. Таким образом РНМСО выполняет важную функцию профессионального лифта – он открывает самым талантливым музыкантам дорогу к вершинам исполнительского искусства.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}