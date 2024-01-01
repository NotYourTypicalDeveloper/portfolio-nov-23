import { Box } from "@chakra-ui/react";
import React from "react";

const Triangle1 = ({ bgColor }) => {
  return (
    <Box
      borderStyle="solid"
      borderWidth="80px 80px 0 0"
      borderColor={`${bgColor} transparent transparent transparent`}
      transform="rotate(30deg)"
      position="absolute"
      right={200}
      bottom={450}
    ></Box>
  );
};

export default Triangle1;
