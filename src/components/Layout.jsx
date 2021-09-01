import { Flex} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Layout = ({ children }) => {
  return (
    <Flex
      minH={440}
      minH="100vh"
      bg="linear-gradient(180deg, #2F6E81 0%, #203347 100%)"
      color="#fafafa"
      position="relative"
      overflow="hidden"
      align="center"
      justify="center"
    >
      <Flex
        top={["-10vw", "", "", "-5vw"]}
        right={["-5vw", "", "", "-3vw"]}
        maxW={["90vw", "60vw"]}
        position="absolute"
        zIndex="0"
        align="center"
        justify="center"
        opacity="0.3"
      >
        <motion.img
          alt="efeito"
          src="/cicleEffect.svg"
          animate={{
            rotate: [0, 270, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, easings: "linear" }}
        />
        <motion.img
          alt="efeito"
          src="/cicleEffectB.svg"
          animate={{
            rotate: [0, -270, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, type: "spring" }}
        />
      </Flex>
      <Flex
        minH="100vh"
        maxW="1130px"
        zIndex="1"
        align="center"
        justify="center"
        position="relative"
      >
        {children}
      </Flex>
    </Flex>
  );
};
