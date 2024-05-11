'use client';
import Banner from '@/layout/Banner';
import React from 'react';
const HomeApp = ({ dataSlides }: { dataSlides: any }) => {
  console.log(dataSlides);
  return (
    <>
      <Banner data={dataSlides?.items || []} />
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
