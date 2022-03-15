import { ChakraProvider } from "@chakra-ui/react";
import { Text, useColorModeValue } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import TextCard from "../components/TextCard";

export default function Home() {
  return (
    // <div className="w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
    <div>
      <Navbar />
      <Text
        fontSize="6xl"
        className="text-center"
        color={useColorModeValue("blue.400", "blue.200")}
      >
        Today
      </Text>
      <TextCard
        websiteTitle="World News"
        websiteImage="https://avatars0.githubusercontent.com/u/1164541?v=4"
      />
    </div>
  );
}
