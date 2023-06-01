import { Box } from "@chakra-ui/react";
import BodyContainer from "../container/BodyContainer";

const Body = () => {
  return (
    <>
    <BodyContainer>
      <Box bg="tomato" w="100%" p={4} color="white">
        Body
      </Box>
      <Box bg="blue" w="100%" p={4} color="white">
        Body
      </Box>
    </BodyContainer>
    </>
    
  );
};

export default Body;
