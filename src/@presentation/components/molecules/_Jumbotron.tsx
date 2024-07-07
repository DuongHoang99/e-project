import 'swiper/css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import jumbotron1 from "@assets/images/jumbotron/jumbotron-1.avif";
import jumbotron2 from "@assets/images/jumbotron/jumbotron-2.avif";
import jumbotron3 from "@assets/images/jumbotron/jumbotron-3.avif";

export default function Jumbotron() {
	return (
		<Swiper modules={[Autoplay]} autoplay loop>
			{[jumbotron1, jumbotron2, jumbotron3].map((imageSrc, index) => (
        <SwiperSlide key={imageSrc}>
          <img src={imageSrc} alt={`jumbotron-${index}`} className='w-full h-[500px] object-cover' />
        </SwiperSlide>
      ))}
		</Swiper>
	);
}
