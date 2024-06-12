import { Box, Button, FormControl, FormLabel, Input, Switch, VStack } from "@chakra-ui/react";

const Share = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl id="webpage-link">
          <FormLabel>WebPage Link</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="public-private">
          <FormLabel>Public / Private</FormLabel>
          <Switch />
        </FormControl>
        <Button colorScheme="teal" type="submit">Share</Button>
      </VStack>
    </Box>
  );
};

export default Share;