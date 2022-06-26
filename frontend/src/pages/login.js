import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export default function Login() {
  return (
    <Stack
      bg={"white"}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading color={"#205375"} fontSize={"2xl"}>
            Get Started
          </Heading>
          <FormControl color={"#205375"} id="username">
            <FormLabel>Username</FormLabel>
            <Input
              borderColor={"#205375"}
              variant="outline"
              color="teal"
              placeholder="username"
              _placeholder={{ color: "inherit" }}
            />
          </FormControl>
          <FormControl color={"#205375"} id="password">
            <FormLabel>Password</FormLabel>
            <Input
              borderColor={"#205375"}
              variant="outline"
              color="teal"
              placeholder="password"
              _placeholder={{ color: "inherit" }}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            ></Stack>
            <Button colorScheme={"blue"} variant={"solid"}>
              Sign In
            </Button>
            <Text color={"#205375"} flex={"1"} align={"center"}>
              Not registered yet?
            </Text>
            <Link to="/register">
              <Button colorScheme={"blue"} variant={"solid"}>
                Sign Up
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex bg={"#205375"} flex={1}>
        {/* <Image alt={"logo"} src="https://i.ibb.co/412P9mk/Group-30.png" /> */}
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://i.ibb.co/jGk9x4j/3d-flame-business-woman-using-a-phone-with-fingerprint-scanner.png"
          }
        />
      </Flex>
    </Stack>
  );
}
