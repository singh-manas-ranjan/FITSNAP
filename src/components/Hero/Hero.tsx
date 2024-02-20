import { Box, Image, Text } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Box
      height="697.5px"
      marginTop="79px"
      width="100%"
      bgImage="/HeroSection_image.svg"
      bgSize="cover"
      bgPosition="center"
      display="grid"
      placeItems="center"
      position="relative"
    >
      <Image src="/HeroSection_playBtn.svg" />
      <Box
        width="300px"
        height="68px"
        bgColor="#fff"
        borderRadius="50px"
        display="flex"
        alignItems="center"
        position="absolute"
        left="-70px"
        bottom="50px"
        boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
        paddingInline={5}
        gap={5}
        cursor="pointer"
      >
        <Image src="/subsIcon.svg" width="36px" height="37px" />
        <Box display="grid" justifyItems="left">
          <Text as="p" fontSize="12px" className="poppinsSemibold">
            100+ new users enrolled
          </Text>
          <Text as="p" fontSize="10px" color="#8993AA">
            join now to get 20% instant discount
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
