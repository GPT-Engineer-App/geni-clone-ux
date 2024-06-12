import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box color="white" fontWeight="bold">AI Clones</Box>
        <Flex alignItems={"center"}>
          <RouterLink to="/">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              AI Clones
            </Button>
          </RouterLink>
          <RouterLink to="/create-clone">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              Create Clone
            </Button>
          </RouterLink>
          <RouterLink to="/settings">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              Settings
            </Button>
          </RouterLink>
          <RouterLink to="/preview">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              Preview
            </Button>
          </RouterLink>
          <RouterLink to="/share">
            <Button as={Link} colorScheme="teal" variant="ghost">
              Share
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;