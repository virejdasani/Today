import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function blogPostWithImage({ headline, headlineWebsite, date }) {
  return (
    <>
      <Link fontWeight={600} fontSize={"lg"} href={headlineWebsite} isExternal>
        {headline}
      </Link>
      <Stack
        mt={6}
        direction={"row"}
        spacing={4}
        align={"center"}
        borderBottom="2px"
        borderColor={useColorModeValue("gray.500", "gray.600")}
        pb="4"
      >
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          {/* <Text fontWeight={600}>John Doe</Text> */}
          <Text color={"gray.500"}>{date}</Text>
        </Stack>
      </Stack>
    </>
  );
}
