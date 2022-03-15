import { ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import TextCard from "../components/TextCard";

export default function Home() {
  return (
    // <div className="w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
    <div>
      <Navbar />
      <Text fontSize="6xl" className="text-center">
        Today
      </Text>
      <TextCard title="Hi" content="H" />
    </div>
  );
}
