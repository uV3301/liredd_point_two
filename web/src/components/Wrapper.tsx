import { Box } from "@chakra-ui/react";
import React, { Children } from "react";

export type WrapperVariant = "small" | "regular";
interface WrapperProps {
  variant?: WrapperVariant;
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
