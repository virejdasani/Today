import DarkModeToggle from "../components/DarkModeToggle";
import { Text, useColorModeValue } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
        <DarkModeToggle />
        <div className="ml-10">
          <a
            className="mx-2 text-sm font-semibold text-gray-200 hover:text-indigo-700"
            href="#"
          >
            Activity
          </a>
        </div>
        <Text
          className=" flex items-center justify-center ml-auto overflow-hidden cursor-pointer"
          color={"rgb(75 85 99)"}
          // color={useColorModeValue("rgb(229 231 235)", "rgb(75 85 99)")}
        >
          Developed by Virej Dasani
        </Text>
      </div>
    </>
  );
}
