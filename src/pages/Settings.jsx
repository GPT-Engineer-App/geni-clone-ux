import { Box, Button, FormControl, FormLabel, Input, Textarea, Select, VStack, Switch, Grid, GridItem } from "@chakra-ui/react";
import Preview from "./Preview.jsx";

const Settings = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} p={4}>
      <GridItem w="100%">
        <Preview />
      </GridItem>
      <GridItem w="100%">
        <VStack spacing={4} align="stretch">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="profile-pic">
            <FormLabel>Profile Picture</FormLabel>
            <Input type="file" />
          </FormControl>
          <FormControl id="webpage-password">
            <FormLabel>WebPage Password / Public</FormLabel>
            <Switch />
          </FormControl>
          <FormControl id="webpage-link">
            <FormLabel>WebPage Link Copy</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="first-message">
            <FormLabel>First Message</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="system-prompt">
            <FormLabel>System Prompt</FormLabel>
            <Textarea />
          </FormControl>
          <FormControl id="knowledge-base">
            <FormLabel>Files as Knowledge Base</FormLabel>
            <Input type="file" multiple />
          </FormControl>
          <FormControl id="language">
            <FormLabel>Language</FormLabel>
            <Select placeholder="Select language">
              <option value="en">English</option>
              <option value="de">German</option>
              {/* Add more languages as needed */}
            </Select>
          </FormControl>
          <FormControl id="voice-edit">
            <FormLabel>Voice Edit</FormLabel>
            <Input type="file" />
          </FormControl>
          <FormControl id="voice-config">
            <FormLabel>Voice Config</FormLabel>
            <Input type="file" />
          </FormControl>
          <FormControl id="advanced-model">
            <FormLabel>Advanced (Model)</FormLabel>
            <Select placeholder="Select provider">
              <option value="provider1">Provider 1</option>
              <option value="provider2">Provider 2</option>
              {/* Add more providers as needed */}
            </Select>
            <Input placeholder="Model" />
            <Input placeholder="Temperature" />
            <Input placeholder="Max Tokens" />
          </FormControl>
          <Button colorScheme="teal" type="submit">Save Settings</Button>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Settings;