import { Box, Center, Image, VStack } from "native-base";
import React from "react";
import Buttone from "../Components/Button";

function NotVerifyScreen() {
    return (
        <Box flex={1} bg={"amber.100"} safeAreaTop>
            <Center w={"full"} h={250}>
                <Image source={"dsjjhhfgfgf"} alt="logo" size="lg" />

            </Center>
            <VStack space={6} px={5} alignItems="center">
                <Buttone  >Reg</Buttone>
                <Buttone  >Login</Buttone>
            </VStack>
        </Box>
    )
}

export default NotVerifyScreen;