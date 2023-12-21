import { Alert, AlertIcon, Stack } from "@chakra-ui/react";
import React from "react";

function ErrorMessage() {
  return (
    <div>
      <Stack spacing={3}>
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      </Stack>
      ;
    </div>
  );
}

export default ErrorMessage;
