import { Box, Text, HStack, VStack, Spacer, Image } from "@chakra-ui/react";
const ExerciseDemo = () => {
  return (
    <>
      <Box as="section" id="exerciseDemo" marginBlock={10} width="100%">
        <Text id="exerciseHeading" className="crimsonSemibold" as="h1">
          Barbell Bicep Curl
        </Text>
        <Text id="exerciseDesc" className="poppinsRegular">
          The barbell curl is a classic and effective bicep exercise that
          targets the muscles in the front of your upper arms, specifically the
          biceps brachii.
        </Text>
        <Spacer height={20}></Spacer>
        <HStack alignItems="start" gap="4rem">
          <Box textAlign="left" display="grid" gap={20}>
            <Box className="grid justifyLeft">
              <Text as="h3" className="subHeading poppinsSemibold">
                Bicep Development
              </Text>
              <Image src="/indicatorLeft.svg" />
              <Text className="poppinsRegular exerciseBenefitText " as="h4">
                The barbell bicep curl specifically targets the biceps brachii,
                contributing to their development and definition.
              </Text>
            </Box>
            <Box className="grid justifyLeft">
              <Text as="h3" className="subHeading poppinsSemibold">
                Strengthen Building
              </Text>
              <Image src="/indicatorLeft.svg" />
              <Text className="poppinsRegular exerciseBenefitText " as="h4">
                The exercise allows for heavy resistance, promoting strength
                gains in the biceps and surrounding muscle groups
              </Text>
            </Box>
          </Box>
          <VStack>
            <Box
              boxSize="400"
              bgImage="/bicepCurlBg.svg"
              bgSize="cover"
              bgPosition="center"
              display="grid"
              placeItems="center"
            ></Box>
            <Box width={453} position="relative">
              <Image
                src="/bicepCurl.svg"
                position="absolute"
                bottom={3}
                right={-3}
              ></Image>
            </Box>
          </VStack>
          <Box textAlign="right" display="grid" gap={20} position="relative">
            <Box className="grid justifyRight">
              <Text as="h3" className="subHeading poppinsSemibold">
                Increased Muscle Engagement
              </Text>
              <Image src="/indicatorRight.svg" />
              <Text className="poppinsRegular exerciseBenefitText " as="h4">
                By maintaining strict form and controlling the weight, you
                ensure that the biceps are doing the majority of the work,
                leading to better muscle engagement and growth.
              </Text>
            </Box>
            <Box className="grid justifyRight">
              <Text as="h3" className="subHeading poppinsSemibold">
                Compound Movement
              </Text>
              <Image src="/indicatorRight.svg" />
              <Text className="poppinsRegular exerciseBenefitText" as="h4">
                While primarily an isolation exercise for the biceps, the
                barbell curl involves other muscles to a lesser extent, such as
                the forearms, shoulders, and upper back. This makes it a
                compound movement that engages multiple muscle groups
              </Text>
            </Box>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default ExerciseDemo;
