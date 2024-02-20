import {
  Box,
  HStack,
  ListItem,
  UnorderedList,
  Text,
  Container,
  VStack,
  Input,
  Image,
  InputGroup,
  InputRightElement,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { FaGreaterThan } from "react-icons/fa6";

interface Props {
  data: {
    [key: string]: string[];
  };
  socialIcon: string[];
}

const Footer = ({ data, socialIcon }: Props) => {
  return (
    <Box as="section" id="footer">
      <Container maxWidth="1440px" as="footer" display="flex">
        <HStack columnGap={20} width="60%">
          {Object.keys(data).map((key, idx) => (
            <Box key={idx} display="grid" rowGap={2} className="fontWhite">
              <Text className="fontWhite footerHeadingFont">{key}</Text>
              <UnorderedList listStyleType="none" marginInlineStart={0}>
                <Stack spacing={3}>
                  {data[key].map((item: string, idx: number) => (
                    <ListItem
                      key={idx}
                      className="fontWhite"
                      fontSize="12px"
                      cursor="pointer"
                    >
                      {item}
                    </ListItem>
                  ))}
                </Stack>
              </UnorderedList>
            </Box>
          ))}
        </HStack>
        <HStack columnGap={20} alignItems="start">
          <VStack>
            <Text className="fontWhite footerHeadingFont">SOCIAL MEDIA</Text>
            <HStack>
              {socialIcon.map((icon, idx) => (
                <Image src={icon} key={idx} cursor="pointer" />
              ))}
            </HStack>
          </VStack>
          <VStack alignItems="left" gap={5}>
            <Text className="fontWhite footerHeadingFont">
              STAY UPDATED WITH US
            </Text>
            <InputGroup>
              <Input
                placeholder="Your email address"
                border="none"
                bgColor="#ffff"
                width="348px"
                height="55px"
                borderRadius={0}
                color="#393c34"
              />
              <InputRightElement>
                <IconButton
                  aria-label="Search"
                  icon={<FaGreaterThan color="#ffff" />}
                  id="searchIconBtn"
                />
              </InputRightElement>
            </InputGroup>
            <Text fontSize="12px" className="fontWhite" display="flex" gap={2}>
              Copyright &copy; 2023 FitSnap
            </Text>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
