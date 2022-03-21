import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

import Headline from "./Headline";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TextCard({ websiteTitle, websiteImage, countryCode }) {
  // Thanks to https://github.com/SauravKanchan/NewsAPI
  const baseUrl = "https://saurav.tech/NewsAPI/";
  const topHeadlinesUrl =
    baseUrl +
    "/top-headlines/category/" +
    "technology/" +
    countryCode +
    ".json";

  const { data, error } = useSWR(topHeadlinesUrl, fetcher);

  // For debugging:
  // if (data) {
  //   console.log(data);
  //   const articles = data.articles;

  //   articles.map((article) => {
  //     console.log(article.source.name);
  //   });
  // }

  return (
    <Box
      // maxW={"540px"}
      w={"full"}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      borderWidth={1}
    >
      <Stack>
        <Stack
          mt={2}
          mb={5}
          direction={"row"}
          spacing={4}
          align={"center"}
          justify={"space-between"}
          pb={4}
          borderBottom="2px"
          borderColor={useColorModeValue("gray.600", "gray.500")}
        >
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            color={useColorModeValue("green.400", "green.200")}
          >
            {websiteTitle}
            {/* Todays News */}
          </Heading>
        </Stack>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {!data
            ? "loading"
            : data.articles.map((article, index) => {
                if (index < 16) {
                  return (
                    <SwiperSlide>
                      <Headline
                        headline={article.title}
                        headlineWebsite={article.url}
                        date={article.publishedAt}
                        author={article.source.name}
                        image={article.urlToImage}
                        key={index}
                      />
                    </SwiperSlide>
                  );
                }
              })}
        </Swiper>
      </Stack>
    </Box>
  );
}
