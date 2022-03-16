import { ChakraProvider } from "@chakra-ui/react";
import { Text, useColorModeValue } from "@chakra-ui/react";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

import Navbar from "../components/Navbar";
import TopHeadlinesCard from "../components/TopHeadlinesCard";

export default function Home() {
  const { data, error } = useSWR("http://ip-api.com/json/", fetcher);

  return (
    // <div className="w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
    <div>
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />

      <Navbar />
      <Text
        fontSize="6xl"
        className="text-center"
        color={useColorModeValue("blue.400", "blue.200")}
      >
        Today
      </Text>
      <TopHeadlinesCard
        websiteTitle="Latest Headlines"
        websiteImage="https://avatars0.githubusercontent.com/u/1164541?v=4"
        countryCode={!data ? "in" : data.countryCode.toLowerCase()}
      />
    </div>
  );
}
