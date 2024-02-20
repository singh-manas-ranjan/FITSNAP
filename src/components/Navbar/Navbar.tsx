import {
  Flex,
  Image,
  HStack,
  Spacer,
  Link,
  Button,
  Text,
} from "@chakra-ui/react";
import { LuUser2 } from "react-icons/lu";
const Navbar = () => {
  return (
    <Flex
      as="nav"
      height="86px"
      bg="#051342"
      color="white"
      id="navbar"
      alignItems="center"
      position="relative"
    >
      <Image
        src="/logo.svg"
        h="202px"
        w="325px"
        position="absolute"
        top="-59px"
        cursor="pointer"
      ></Image>
      <Spacer></Spacer>
      <HStack gap="50px" paddingRight="80px" className="navItems">
        <Link>HOME</Link>
        <Link>WORKOUT PLAN</Link>
        <Link>AI TRACKER</Link>
        <Link>EXERCISE</Link>
        <Link>ABOUT</Link>
        <Button id="loginBtn">
          <LuUser2 size={16} color="#FDF8ED" />
          <Text paddingLeft="8px" className="latoBold">
            LOGIN
          </Text>
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
