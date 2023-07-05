import { useState } from 'react';
import classNames from 'classnames/bind';
import stylesAccordion from '@/styles/Accordion.module.scss';

const cxAccordion = classNames.bind(stylesAccordion);

export default function Accordion({ item, open }) {
  const [isOpen, setOpen] = useState(open);
  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <div
      className={cxAccordion(
        'accordion-item',
        isOpen && 'accordion-item_active'
      )}
      onClick={handleOpen}
    >
      <div className={cxAccordion('accordion-item__title')}>
        <span>{item.num}.</span>&nbsp;{item.title}
      </div>
      <div
        className={cxAccordion('accordion-item__text')}
        dangerouslySetInnerHTML={{ __html: item.text }}
      />
    </div>
  );
}
