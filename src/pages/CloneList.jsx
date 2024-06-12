import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const CloneList = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl">AI Clones List</Text>
        {/* Add logic to list all AI clones */}
        <RouterLink to="/create-clone">
          <Button colorScheme="teal" position="absolute" top="4" right="4">Create Clone</Button>
        </RouterLink>
      </VStack>
    </Box>
  );
};

export default CloneList;