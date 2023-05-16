import React from 'react'
import { Box } from 'native-base'
import HomeSearch from '../Components/HomeSearch';
import HomeProduct from '../Components/HomeProduct';

export const HomeScreen=()=> {
    return (
        <Box flex={1} bg={"amber.100"}>
            <HomeSearch />
            <HomeProduct />
        </Box>
    )
}
 