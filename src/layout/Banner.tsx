'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from '@/utils/moduleSwiper';
import Image from 'next/image';
const Banner = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className='relative lg:top-0 w-full alpha-blur banner'>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        keyboard={true}
        rewind={true}
        navigation={true}
        noSwiping={true}
        slidesPerView={1}
        modules={[Navigation]}>
        {data.map((item: any) => (
          <SwiperSlide key={item?._id}>
            {/* <img className='h-full w-full object-cover' src={item?.thumb_url} alt='' /> */}
            <div>
              <Image
                src={item?.thumb_url}
                className='w-full h-full object-cover md:h-[70vh] lg:h-screen aspect-video '
                alt=''
                priority
                width={0}
                height={0}
                sizes='100vw'
              />
              <div className='absolute position-center z-30 w-full flex container sm:!top-[70%] '>
                <div className='flex-1 h-max z-20'>
                  <div className='text-white '>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold font-pertSen text-yellow mb-3 w-3/4 text-wrap'>
                      {/* {convertName.map((item: string) => (
                          <span key={item}>{item}</span>
                        ))} */}
                      {item.name}
                      {/* line-clamp-1 !leading-[86px] */}
                    </h2>
                    <h4 className='text-lg sm:text-xl font-bold tracking-wide'>{item?.origin_name}</h4>
                  </div>
                  <div>
                    <div>detail movie</div>
                    <button>play movie</button>
                  </div>
                </div>
                {/* <div className='absolute top-0 left-0 w-[90%] h-2/6 bg-blur z-10'></div> */}
                <div className='z-20  w-32 h-full right-[5%] sm:relative md:-top-14 border-8 rounded-lg  md:w-72 lg:w-80 border-yellow hidden md:block'>
                  <Image src={item?.poster_url} width={1000} height={1000} priority className='w-full h-full' alt='' />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
