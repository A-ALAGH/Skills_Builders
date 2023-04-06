import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const congfig: ThemeConfig ={
    initialColorMode:'dark'
}
const theme = extendTheme({ congfig });
export default theme