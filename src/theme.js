import { extendTheme } from "@chakra-ui/react";
import { checkboxTheme } from "./theme/components/checkbox";

const theme = extendTheme({
  fonts: {
    body: "Public Sans, sans-serif", // Set "Public Sans" as the font family for the body (default text) text.

    heading: "Public Sans, sans-serif", // Set "Public Sans" as the font family for headings.
  },
  components: {
    Checkbox: checkboxTheme,
  }
});

export default theme;
