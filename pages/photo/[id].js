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
import { getAllPhotoPostIds, getPhotoPost } from '@/lib/loadPhotoPage';
import { setBg } from '@/store/bgSlice';
import {setActiveMenu} from "@/store/menuSlice";

const cxNav = classNames.bind(stylesNav);
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
      postData,
    },
  };
}
export default function PhotoPost({ postData }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-brown'));
    dispatch(setActiveMenu('media'));
  });

  const data = postData[0];
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
        titleInfo={`${data.place}<br/>${data.date}`}
      />
      <section className={cxPhoto('page-photo')}>
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
