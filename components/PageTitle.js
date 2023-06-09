import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import stylesTitle from '@/styles/TitlePage.module.scss';

const cxTitle = classNames.bind(stylesTitle);

export default function PageTitle({
  children,
  type,
  titleBack,
  linkBack,
  title,
  titleInfo,
  links,
  customClass
}) {
  switch (type) {
    case 'inner':
      return (
        <>
          {linkBack && titleBack && (
            <section
              className={classNames('main-title', cxTitle('page-title'))}
            >
              <Link
                href={linkBack}
                className={classNames(cxTitle('page-title__back'))}
              >
                <Image
                  className="svg_color"
                  height="12"
                  width="30"
                  src="/images/dest/icons/icon-arrow-left.svg"
                  alt=""
                />
                {titleBack}
              </Link>
            </section>
          )}
          {title && (
            <div className={cxTitle('page-title__inner')}>
              {titleInfo && (
                <div
                  className={cxTitle('page-title__info')}
                  dangerouslySetInnerHTML={{ __html: titleInfo }}
                />
              )}
              <h1 className="h1">{title}</h1>
            </div>
          )}
        </>
      );
    case 'links':
      return (
        <>
          {title && (
            <section
              className={classNames('main-title', cxTitle('page-title'))}
            >
              <h1 className="h1">{title}</h1>
              <div className={cxTitle(`page-title__links`)}>
                {links.map((item) => (
                  <Link
                    key={item.link}
                    className={classNames(
                      'link',
                      item.selected && cxTitle('selected')
                    )}
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </>
      );
    case 'custom':
      return (
        <section
          className={classNames(
            'main-title',
            cxTitle('page-title', customClass)
          )}
        >
          <h1 className="h1">{title}</h1>
          <div className={cxTitle(`page-title__links`)}>{children}</div>
        </section>
      );
    default:
      return (
        <section className={classNames('main-title', cxTitle('page-title'))}>
          {title && <h1 className="h1">{title}</h1>}
        </section>
      );
  }
}
