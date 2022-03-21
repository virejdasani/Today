import { Text, useColorModeValue, Stack } from "@chakra-ui/react";
import Head from "next/head";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

import Navbar from "../components/Navbar";
import TopHeadlinesCard from "../components/TopHeadlinesCard";
import TechHeadlinesCard from "../components/TechHeadlinesCard";

import SliderTest from "../components/sliderTest";

export default function Home() {
  const { data, error } = useSWR("http://ip-api.com/json/", fetcher);

  return (
    // <div className="w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
    <div>
      {/*  This meta tag is required to allow browsers to fetch the IP because the api uses HTTP */}
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <Head>
        <title>Today</title>
      </Head>

      <Navbar />
      <Text
        fontSize="6xl"
        className="text-center"
        color={useColorModeValue("blue.400", "blue.200")}
        mb={4}
      >
        Today
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="20px"
        justifyContent="center"
        marginLeft={8}
        marginRight={8}
        marginBottom={8}
      >
        <TopHeadlinesCard
          websiteTitle="Top Headlines"
          countryCode={!data ? "in" : data.countryCode.toLowerCase()}
        />
        <TechHeadlinesCard
          websiteTitle="Tech News"
          countryCode={!data ? "in" : data.countryCode.toLowerCase()}
        />
      </Stack>
    </div>
  );
}
