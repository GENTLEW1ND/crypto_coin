import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import profilePic from "../assets/profile.jpg"

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
        <Stack direction={["column", "row"]}h={"full"} alignItems={"center"}>

<VStack w={"full"} alignItems={["center", "flex-start"]}>
<Text fontWeight={"bold"}>About us</Text>
<Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are the best crypto trading app in india, we provide our guidence at a very resonable price.</Text>
</VStack>
<VStack >
    <Avatar boxSize={"28"} mt={["4","0"]} src={profilePic}/>
    <Text fontSize={"sm"} style={{
  width:"148px",
}}>Founder: GENTLEW1ND</Text>
</VStack>
        </Stack>
    </Box>
  );
};

export default Footer;
