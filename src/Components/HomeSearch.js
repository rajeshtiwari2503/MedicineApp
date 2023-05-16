import React from 'react'
import { Box, HStack, Input, Pressable, Text } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';

function HomeSearch() {
    return (
        <HStack space={3} w={'full'} px={6} bg={"amber.500"} py={4} alignItems={'center'} safeAreaTop>
            <Input variant="filled" placeholder='Medicine' w="85%" bg="white" type="search" h={12} borderWidth="0" _focus={{ bg: "white" }} />
            <Pressable ml={3} >
                <MaterialIcons name="shop" size={24} color="white" />
                <Box px={1} rounded={'full'} position={'absolute'} top={"-13"} bg={'red.500'} left={2} _text={{ color: "white", fontSize: "11px" }}>
                    7
                </Box>
            </Pressable>
        </HStack>

    )
}
export default HomeSearch;