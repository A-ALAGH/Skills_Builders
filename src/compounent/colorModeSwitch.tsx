import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode}= useColorMode();
    return(
        <HStack>
            <Switch colorScheme="green" IsChecked={colorMode==='dark'} onChange={toggleColorMode}/>
            <Text>Dark Mode</Text>
        </HStack>
    )
}
export default ColorModeSwitch