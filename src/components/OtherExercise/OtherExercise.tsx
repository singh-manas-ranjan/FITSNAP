import { Box, Container, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
interface Props {
  data: Array<{
    name: string;
    description: string;
    img: string;
    link: string;
  }>;
}

const OtherExercise = (exercises: Props) => {
  return (
    <Container centerContent marginBlock={20} rowGap="50px">
      <Text as="h1" fontSize="30px" className="crimsonSemibold">
        Discover the other exercise at FitSnap
      </Text>
      <HStack columnGap={40}>
        {exercises.data.map(({ name, description, img, link }, index) => (
          <Box key={index}>
            <VStack gap={5} textAlign="center">
              <Box
                bgImage={img}
                boxSize="250px"
                bgPosition="center"
                bgSize="contain"
                bgRepeat="no-repeat"
              />
              <Text className="subHeading poppinsSemibold">{name}</Text>
              <Text>{description}</Text>
              <Link href={link} display="flex" color="#233470">
                <Text as="span">Read More</Text>
                <Text as="span" position="relative" top="3px" fontSize="20px">
                  <IoIosArrowForward />
                </Text>
              </Link>
            </VStack>
          </Box>
        ))}
      </HStack>
    </Container>
  );
};

export default OtherExercise;
