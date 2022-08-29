import React from "react";
import Box from "ui/Box";

export default function Container({ children }) {
  return (
    <Box as="main" maxWidth="960px" m="0 auto" p="0 1em">
      {children}
    </Box>
  );
}
