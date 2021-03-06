import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";

export default function Headline({
  headline,
  headlineWebsite,
  date,
  author,
  image,
}) {
  const formattedDate = new Date(date).toLocaleDateString();
  const formattedTime = new Date(date)
    .toLocaleTimeString("en-GB", {
      hour12: false,
    })
    .slice(0, 5);

  return (
    <Stack
      mt={2}
      // mb={5}
      direction={{ base: "column-reverse", md: "column-reverse" }}
      // direction={{ base: "column-reverse", md: "row" }}
      spacing={4}
      align={"center"}
      justify={"space-between"}
      // pb={4}
      // borderBottom="2px"
      // borderColor={useColorModeValue("gray.500", "gray.600")}
      paddingRight={14}
      paddingLeft={14}
    >
      <div>
        <Link
          fontWeight={600}
          fontSize={"lg"}
          href={headlineWebsite}
          isExternal
        >
          {headline}
        </Link>
        <Stack mt={2} direction={"row"} spacing={4} align={"center"} pb="4">
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Link href={headlineWebsite} isExternal fontWeight={600}>
              {author}
            </Link>
            <Text color={"gray.500"}>
              {formattedDate + " at " + formattedTime}
            </Text>
          </Stack>
        </Stack>
      </div>
      <Image
        src={image}
        alt=""
        // height={{ base: "200px", md: "100px", lg: "150px" }}
        // width={{ base: "", md: "100px", lg: "170px" }}
        height={{ base: "150px", md: "150px", lg: "150px" }}
        width={{ base: "300px", md: "270px", lg: "350px" }}
        objectFit="cover"
      />
    </Stack>
  );
}
