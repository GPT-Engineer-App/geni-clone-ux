import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to AI Clones</Text>
        <Text>Create and manage your AI Clones easily.</Text>
        <RouterLink to="/create-clone">
          <Button colorScheme="teal">Create New Clone</Button>
        </RouterLink>
      </VStack>
    </Container>
  );
};

export default Index;