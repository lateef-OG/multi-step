import { extendTheme, ChakraProvider, Text, Button, Checkbox } from "@chakra-ui/react";
import appTheme from './theme';;

const theme = extendTheme({
  ...appTheme,
});


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text>Testing font</Text>
      <Button>Test Button</Button>
      <Checkbox defaultChecked>Checkbox</Checkbox>
    </ChakraProvider>
  );
}

export default App;
