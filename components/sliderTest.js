import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Headline from "./Headline";

export default function SliderTest({}) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Headline headline="OIEijeoijOIJ OIJE o " />
        </SwiperSlide>
        <SwiperSlide>
          <Headline headline="OIEijeoijOIJ OIJE o " />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
