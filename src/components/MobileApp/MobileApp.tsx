import { Box, Image, Container, HStack, Text } from "@chakra-ui/react";
const MobileApp = () => {
  return (
    <>
      <Box as="section" id="mobileApp">
        <Container maxWidth="1440px" as="div" padding="0">
          <Box className="leftContainer" gap="20px">
            <Box>
              <Text as="h2" className="crimsonSemibold" color="#ffff">
                Download FitSnap Now
              </Text>
              <Text as="h3" fontSize="2.125rem">
                and turn every workout into a visual masterpiece{" "}
              </Text>
            </Box>
            <HStack>
              <Box bgImage="/app_store.svg" className="storeImage"></Box>
              <Box bgImage="/google_play.svg" className="storeImage"></Box>
            </HStack>
          </Box>
          <HStack className="phoneContainer" display="flex">
            <Box bgImage="/leftApplePh.svg" className="applePhImg leftPh"></Box>
            <Box
              bgImage="/rightApplePh.svg"
              className="applePhImg rightPh"
            ></Box>
          </HStack>
        </Container>
        <Image src="/divBottomCurve.svg" id="bottomCurve"></Image>
      </Box>
      <Container centerContent marginTop={20} textAlign="center" gap={5}>
        <Box width="1067px">
          <Text as="h1" className="crimsonSemibold">
            Elevate Your Fitness: The AI Workout Plan – Precision, Progression,
            Perfection
          </Text>
        </Box>
        <Box width="776px">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
            augue. Integer congue, libero nec congue fermentum, neque turpis
            eleifend libero, sit amet dictum dolor felis quis quam. Sed
            tincidunt{" "}
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default MobileApp;
