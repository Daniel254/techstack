import Box from "components/Box";
import React from "react";

export default function Container({ children }) {
  return (
    <Box as="main" maxWidth="960px" m="0 auto" p="0 1em">
      {children}
    </Box>
  );
}
