'use client';
import dynamic from 'next/dynamic';
import React from 'react';
const DynamicHeader = dynamic(() => import('@/layout/Banner'), {
  ssr: false,
  // loading: () => <h1>loading...</h1>,
});
const HomeApp = ({ dataSlides }: { dataSlides: any }) => {
  return (
    <>
      <DynamicHeader data={dataSlides?.items || []} />
      <div className='container relative z-20 '>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo provident magnam vero nihil ratione possimus quia labore
          praesentium, blanditiis reiciendis, aliquam commodi. Repellat porro at aperiam dolorem aliquid repudiandae!
        </h1>
      </div>
    </>
  );
};

export default HomeApp;
