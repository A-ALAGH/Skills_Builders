import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp.png";
import ColorModeSwitch from "./colorModeSwitch";

const NavBar = () => {
    return (
        <HStack justifyContent={"space-between"} padding={"10px"}>
            <Image src={logo} boxSize={'100px'}/>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar