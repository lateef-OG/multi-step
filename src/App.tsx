import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Tasks from "./screens/steps/Tasks";
import appTheme from "./theme";

const theme = extendTheme({
  ...appTheme,
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Tasks />
    </ChakraProvider>
  );
}

export default App;
