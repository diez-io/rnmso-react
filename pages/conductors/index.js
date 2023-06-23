import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import PageTitle from '@/components/PageTitle';
import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';

import SoloistItems from '@/components/soloist/SoloistItems';
import { getConductors } from '@/lib/loadConductorsPage';

export async function getStaticProps() {
  const conductors = await getConductors();
  return {
    props: {
      conductors,
    },
  };
}
export default function Soloists({ conductors }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-pink'));
    dispatch(setActiveMenu('orchestra'));
  });
  return (
    <div className="container">
      <PageTitle title="Дирижеры сезона" />
      <SoloistItems items={conductors} description="post" />
    </div>
  );
}
