import { Box, Button, FormControl, FormLabel, Input, Textarea, Select, VStack } from "@chakra-ui/react";

const CreateClone = () => {
  return (
    <Box p={4} position="relative">
      <VStack spacing={4} align="stretch">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="profile-pic">
          <FormLabel>Profile Picture</FormLabel>
          <Input type="file" />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="Describe the person, how he talks, how he is, how he interacts with people. Describe language patterns. Describe in the Language he should speak" />
        </FormControl>
        <FormControl id="language">
          <FormLabel>Language</FormLabel>
          <Select placeholder="Select language">
            <option value="en">English</option>
            <option value="de">German</option>
            {/* Add more languages as needed */}
          </Select>
        </FormControl>
        <FormControl id="knowledge-base">
          <FormLabel>Upload files as Knowledge base</FormLabel>
          <Input type="file" multiple />
        </FormControl>
        <FormControl id="voice-samples">
          <FormLabel>Upload Voice samples</FormLabel>
          <Input type="file" multiple />
        </FormControl>
        <Button colorScheme="teal" type="submit" position="absolute" top="4" right="4">Create Clone</Button>
      </VStack>
    </Box>
  );
};

export default CreateClone;