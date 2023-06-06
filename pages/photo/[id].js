import Link from 'next/link';
import classNames from 'classnames/bind';
import Image from 'next/image';

import LightGallery from 'lightgallery/react';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import { useState } from 'react';
import PageTitle from '@/components/PageTitle';
import stylesPhoto from '@/styles/PagePhoto.module.scss';
import { getAllPhotoPostIds, getPhotoPost } from '@/lib/loadPhotoPage';

const cxPhoto = classNames.bind(stylesPhoto);

export async function getStaticPaths() {
  const paths = await getAllPhotoPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPhotoPost(params.id);
  return {
    props: {
      bodyClass: 'bg-brown',
      postData,
    },
  };
}
export default function PhotoPost({ postData }) {
  const data = postData[0];
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <div className="container">
      <PageTitle title="Фото" link="/photo" />
      <section className={cxPhoto('page-photo')}>
        <div className={cxPhoto('page-photo__info')}>
          {data.place}
          <br />
          {data.date}
        </div>
        <h1 className="h1">{data.title}</h1>

        <LightGallery
          onInit={onInit}
          speed={500}
          elementClassNames={cxPhoto('photo-items')}
        >
          {data.items.map((item) => (
            <Link href={item} className={cxPhoto('photo-items__img')}>
              <Image width={304} height={200} src={item} alt="" />
            </Link>
          ))}
        </LightGallery>

        <div className={cxPhoto('page-photo__nav')}>
          <Link className={cxPhoto('page-photo__nav_prev')} href="#">
            Гастроли в Салехарде
          </Link>
          <Link className={cxPhoto('page-photo__nav_next')} href="#">
            Концерт с Аидой Гарифуллиной
          </Link>
        </div>
      </section>
    </div>
  );
}
