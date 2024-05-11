'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from '@/utils/moduleSwiper';
import Image from 'next/image';
const Banner = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className='relative lg:top-0 w-full alpha-blur'>
      <div className='beta-blur'>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          keyboard={true}
          rewind={true}
          noSwiping={true}
          slidesPerView={1}
          modules={[Autoplay]}>
          {data.map((item: any) => (
            <SwiperSlide key={item?._id}>
              {/* <img className='h-full w-full object-cover' src={item?.thumb_url} alt='' /> */}
              <Image src={item?.thumb_url} className='h-full w-full object-cover h-screen' alt='' width={0} height={0} sizes='100vw' />
              <div className='absolute top-[40%] z-30 left-[10%] w-full bg-green'>
                <div>{item?.name}</div>
                <p>{item?.origin_name}</p>
                {/* <img src={item?.poster_url} className='w-52' alt='' /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Banner;
