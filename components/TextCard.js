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

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TextCard({ websiteTitle, websiteImage, countryCode }) {
  const baseUrl = "https://saurav.tech/NewsAPI/";
  const topHeadlinesUrl =
    baseUrl + "/top-headlines/category/" + "general/" + countryCode + ".json";

  const { data, error } = useSWR(topHeadlinesUrl, fetcher);
  console.log(data);

  const articles = data.articles;

  articles.map((article) => {
    console.log(article.source.name);
  });

  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
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
            <Avatar src={websiteImage} alt={"Author"} />
          </Stack>
          <Headline
            date="Mar 15 2022, 8:30 AM"
            // headline="Today, this will be a headline from a news api, hopefully atleast. Random words eh?"
            headline="headline"
            author="John"
          />
          <Headline
            date="Mar 15 2022, 7:09 AM"
            headline="Another random ass headline Random words eh?"
            author="John"
          />
        </Stack>
      </Box>
    </Center>
  );
}
