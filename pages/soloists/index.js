import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import PageTitle from '@/components/PageTitle';
import { setBg } from '@/store/bgSlice';
import { setActiveMenu } from '@/store/menuSlice';

import { getSoloists } from '@/lib/loadSoloistsPage';
import SoloistItems from '@/components/soloist/SoloistItems';

export async function getStaticProps() {
  const soloists = await getSoloists();
  return {
    props: {
      soloists,
    },
  };
}
export default function Soloists({ soloists }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBg('bg-pink'));
    dispatch(setActiveMenu('orchestra'));
  });
  return (
    <div className="container">
      <PageTitle title="Солисты и ведущие сезона" />
      <SoloistItems items={soloists} description="specialty" page="soloists" />
    </div>
  );
}
