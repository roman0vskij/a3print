"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Controller, Navigation } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TReview = {
  name: string;
  review: string;
  rating: string;
};

type TProps = {
  reviews: TReview[];
};

function Slide({ r }: { r: TReview }) {
  return (
    <div className="w-full rounded-[8px] bg-white p-5 custom-shadow lg:max-w-96.5">
      <div className="flex gap-5">
        <p className="text-2xl lg:text-[28px] leading-[129%] text-(--font-blue-color)">
          {r.rating}
        </p>
        <p className="text-[22px] lg:text-2xl leading-[129%] blur-[7px]">
          {r.name}
        </p>
      </div>
      <p className="mt-5 font-medium text-base lg:text-lg leading-[140%] font-montserrat">
        {r.review}
      </p>
    </div>
  );
}

export function ReviewsCarousel({ reviews }: TProps) {
  const [firstSwiper, setFirstSwiper] = useState<null | SwiperType>(null);
  const [secondSwiper, setSecondSwiper] = useState<null | SwiperType>(null);

  return (
    <>
      <div className="lg:hidden max-w-full">
        <Swiper
          modules={[Controller, Navigation]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          spaceBetween={15}
          breakpoints={{ "768": { slidesPerView: 2 } }}
          navigation={{
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
          }}
          className="h-full"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={`swiper1-slide-${i}`} className="px-3.75 py-9">
              <Slide r={r} />
            </SwiperSlide>
          ))}
          <div className="flex justify-between mx-auto max-w-34 h-fit pb-1">
            <button className="hover:drop-shadow-sm swiper-button-prev1 [&.swiper-button-disabled]:opacity-20 opacity-90 flex items-center justify-center size-12 bg-(--primary-color) rounded-full">
              <ChevronLeft className="size-7 flex items-center justify-center" />
            </button>
            <button className="hover:drop-shadow-sm swiper-button-next1 [&.swiper-button-disabled]:opacity-20 opacity-90 flex items-center justify-center size-12 bg-(--primary-color) rounded-full">
              <ChevronRight className="size-7 flex items-center justify-center" />
            </button>
          </div>
        </Swiper>
      </div>

      <div className="max-lg:hidden min-h-50 w-screen max-w-[1440px] mt-15 overflow-hidden">
        <div className="absolute md:top-15 lg:top-20 flex justify-between mx-auto w-full max-w-[1440px] px-10 h-fit">
          <button className="hover:drop-shadow-md swiper-button-prev2 [&.swiper-button-disabled]:opacity-20 opacity-90 flex items-center justify-center min-w-20 size-20 bg-(--primary-color) rounded-full">
            <ChevronLeft className="size-12 flex items-center justify-center" />
          </button>
          <button className="hover:drop-shadow-md swiper-button-next2 [&.swiper-button-disabled]:opacity-20 opacity-90 flex items-center justify-center min-w-20 size-20 bg-(--primary-color) rounded-full">
            <ChevronRight className="size-12 flex items-center justify-center" />
          </button>
        </div>

        <Swiper
          modules={[Controller, Navigation]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          spaceBetween={50}
          slidesPerView={3}
          slidesPerGroup={2}
          speed={1000}
          navigation={{
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
          }}
          className="h-full max-w-[1284px] left-0"
        >
          {reviews.slice(0, 7).map((r, i) => (
            <SwiperSlide key={`swiper1-slide-${i}`} className="px-3.75 py-9">
              <Slide r={r} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          spaceBetween={50}
          slidesPerView={3.5}
          slidesPerGroup={2}
          speed={1000}
          className="h-full"
        >
          {reviews.slice(7, 14).map((r, i) => (
            <SwiperSlide key={`swiper2-slide-${i}`} className="px-3.75 py-9">
              <Slide r={r} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
