import { Box } from "@chakra-ui/react";
import React, { Children } from "react";

interface WrapperProps {
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      maxW={variant === "small" ? "400px" : "800px"}
      w="100%"
      mx="auto"
      mt={8}
    >
      {children}
    </Box>
  );
};
