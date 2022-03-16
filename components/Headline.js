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

export default function Headline({ headline, headlineWebsite, date, author }) {
  return (
    <div>
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
          <Text fontWeight={600}>{author}</Text>
          <Text color={"gray.500"}>{date}</Text>
        </Stack>
      </Stack>
    </div>
  );
}
