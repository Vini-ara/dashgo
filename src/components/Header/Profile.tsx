import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center" >
      <Box mr="4" textAlign="right">
        <Text>Vinícius Araujo</Text>
        <Text color="gray.300" fontSize="small">
          vinicius.ar02@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Vinícius Araujo" src="https://github.com/Vini-ara.png" />
    </Flex>
  );
}