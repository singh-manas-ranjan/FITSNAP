import { Box, Text, UnorderedList, ListItem, Stack } from "@chakra-ui/react";

interface Props {
  data: {
    id: number;
    qn: string;
    ans: string;
  }[];
  listData: {
    qn: string;
    ans: string[];
  }[];
}

const AboutExercise = ({ data, listData }: Props) => {
  return (
    <Box width="958px" className="grid justifyLeft poppinsRegular" gap="10px">
      {data.map(({ id, qn, ans }, idx) => (
        <>
          {idx === 0 ? (
            <Text
              className="poppinsSemibold exerciseKeyPoints"
              as="h3"
              fontSize="1.5rem"
              key={id}
            >
              {qn}
            </Text>
          ) : (
            <Text
              className="exerciseKeyPoints poppinsSemibold"
              as="p"
              key={`${id}a`}
            >
              {qn}
            </Text>
          )}

          {idx === 0 ? (
            <Text paddingRight="80px" width="780px" key={`${id}b`}>
              {ans}
            </Text>
          ) : (
            <Text key={`${id}c`}>{ans}</Text>
          )}
        </>
      ))}

      {listData.map(({ qn, ans }, idx) => (
        <>
          <Text key={idx + "d"}>{qn}</Text>
          <UnorderedList className="grid" gap="10px" key={idx + "e"}>
            <Stack spacing={3} key={`${idx}g`}>
              {ans.map((item, idx) => (
                <ListItem key={`${idx}f`}>{item}</ListItem>
              ))}
            </Stack>
          </UnorderedList>
        </>
      ))}
    </Box>
  );
};

export default AboutExercise;
