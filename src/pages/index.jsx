import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Flex
        w="100vw"
        h="auto"
        justify={["space-evenly", "", "", "space-between"]}
        align="center"
        direction={["column-reverse", "row"]}
        mb='75px'
      >
        <Box w={["80vw","50vw","auto"]} mx="5">
          <Text fontSize={["30px", "", "", "70px"]} fontWeight="semibold">
            Programador & Design
          </Text>
          <Text fontSize={["15px", "", "", "24px"]} fontWeight="thin">
            Me chamo Thiago Kufa,
            <br />
            sou desenvolvedor de aplicativos e sites de alta performace com
            designs únicos e criativos.
          </Text>
        </Box>
        <Image  src="/avatar.png" w={["80vw","35vw","35vw","auto"]} />
      </Flex>
      <Image maxW='80%' src='/menuBotStatic.png' position='absolute' left='0' bottom='0' />
    </Layout>
  );
}
