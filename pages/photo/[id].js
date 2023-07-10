import Link from 'next/link';
import classNames from 'classnames/bind';
import Image from 'next/image';

import LightGallery from 'lightgallery/react';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PageTitle from '@/components/PageTitle';
import stylesNav from '@/styles/NavPrevNext.module.scss';
import stylesPhoto from '@/styles/PagePhoto.module.scss';
import { setBg } from '@/store/bgSlice';
import {setActiveMenu} from "@/store/menuSlice";
import {loadAllPhotoIds, loadPhotoPost} from "../../lib/loadPhoto";
import {displayDateVar1, displayDateVar2} from "../api/date";

const cxNav = classNames.bind(stylesNav);
const cxPhoto = classNames.bind(stylesPhoto);

export async function getStaticPaths() {
  const paths = await loadAllPhotoIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const data = await loadPhotoPost(params.id);
  return {
    props: {
      data,
    },
  };
}
export default function PhotoPost({ data }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-brown'));
    dispatch(setActiveMenu('media'));
  });

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <div className="container">
      <PageTitle
        type="inner"
        titleBack="Фото"
        linkBack="/photo"
        title={data.title}
        titleInfo={`${displayDateVar1(data.date)}`}
      />
      <section className={cxPhoto('page-photo')}>
        <LightGallery
          onInit={onInit}
          speed={500}
          elementClassNames={cxPhoto('photo-items')}
        >
          {data.preview_photos.map((item) => (
            <Link href={`https://rnmso.ru${item.image}`} className={cxPhoto('photo-items__img')}>
              <Image width={304} height={200} src={`https://rnmso.ru${item.image}`} alt="" />
            </Link>
          ))}
        </LightGallery>

        <div className={cxNav('page__nav')}>
          <Link className={cxNav('page__nav_prev')} href="#">
            Гастроли в Салехарде
          </Link>
          <Link className={cxNav('page__nav_next')} href="#">
            Концерт с Аидой Гарифуллиной
          </Link>
        </div>
      </section>
    </div>
  );
}
