import { Box, Text, VStack } from "@chakra-ui/react";

const Preview = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl">Clone Preview</Text>
        <Text>Here you can interact with the latest version of your AI Clone while adjusting the settings.</Text>
        {/* Add interactive elements as needed */}
      </VStack>
    </Box>
  );
};

export default Preview;