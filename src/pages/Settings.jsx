import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Select, VStack, Switch, Grid, GridItem, Checkbox, IconButton, HStack, Text } from "@chakra-ui/react";
import { MdDelete, MdPlayArrow } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import Preview from "./Preview.jsx";

const Settings = () => {
  const [files, setFiles] = useState([]);
  const [labels, setLabels] = useState([]);
  const [description, setDescription] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDeleteFile = (file) => {
    setFiles(files.filter((f) => f !== file));
  };

  const handleAddLabel = () => {
    setLabels([...labels, ""]);
  };

  const handleLabelChange = (index, value) => {
    const newLabels = [...labels];
    newLabels[index] = value;
    setLabels(newLabels);
  };

  const handleDeleteLabel = (index) => {
    setLabels(labels.filter((_, i) => i !== index));
  };

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
          <FormControl id="voice-edit">
            <FormLabel>Voice Edit</FormLabel>
            <Box {...getRootProps()} border="2px dashed" borderColor="gray.300" p={4} textAlign="center">
              <input {...getInputProps()} />
              <Text>Click to upload a file or drag and drop</Text>
              <Text>Audio or Video files, up to 10MB each</Text>
            </Box>
            <Button mt={2} colorScheme="teal">Record Audio</Button>
          </FormControl>
          <FormControl id="samples">
            <FormLabel>Samples {files.length} / 25</FormLabel>
            {files.map((file, index) => (
              <HStack key={index} spacing={2}>
                <Text>{file.name}</Text>
                <Text>{(file.size / 1024 / 1024).toFixed(1)} MB</Text>
                <IconButton icon={<MdPlayArrow />} />
                <IconButton icon={<MdDelete />} onClick={() => handleDeleteFile(file)} />
              </HStack>
            ))}
          </FormControl>
          <FormControl id="labels">
            <FormLabel>Labels {labels.length} / 5</FormLabel>
            {labels.map((label, index) => (
              <HStack key={index} spacing={2}>
                <Input value={label} onChange={(e) => handleLabelChange(index, e.target.value)} />
                <IconButton icon={<MdDelete />} onClick={() => handleDeleteLabel(index)} />
              </HStack>
            ))}
            <Button mt={2} colorScheme="teal" onClick={handleAddLabel}>Add Label</Button>
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='How would you describe the voice? e.g. "An old American male voice with a slight hoarseness in his throat. Perfect for news."' />
          </FormControl>
          <FormControl id="confirmation">
            <Checkbox isChecked={confirmation} onChange={(e) => setConfirmation(e.target.checked)}>
              I hereby confirm that I have all necessary rights or consents to upload and clone these voice samples and that I will not use the platform-generated content for any illegal, fraudulent, or harmful purpose. I reaffirm my obligation to abide by ElevenLabs’ Terms of Service and Privacy Policy.
            </Checkbox>
          </FormControl>
          <HStack spacing={4}>
            <Button colorScheme="gray">Cancel</Button>
            <Button colorScheme="teal">Edit Voice</Button>
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Settings;