import React from 'react'
import {  Box, Flex, Pressable, ScrollView, Image, Heading, Text } from 'native-base'


function HomeProduct ()  {
    const url="https://www.shutterstock.com/image-vector/various-meds-pills-capsules-blisters-260nw-1409823341.jpg"
    return ( 
        <ScrollView flex={1} >
            <Flex flexWrap={"wrap"} direction='row' justifyContent={"space-between"} px={6}>
            {[1,2,3,4,5,6,7,8].map((s1,i)=> <Pressable key={i} w={"47%"} bg={'white'} rounded={'md'} shadow={2} pt={0.3} my={3} pb={2} overflow={'hidden'} >
                <Image source={{uri:url}} alt="image" w="full" h={24} resizeMode="contain"/>
                <Box px={4} pt={1}>
                    <Heading size={'sm'} bold>
                         INR 99
                    </Heading>
                    <Text fontSize={10} mt={1} isTruncated w={'full'} >Medicine</Text>
                </Box>
             </Pressable>)}
            </Flex>
        </ScrollView>
   )
}
export default HomeProduct;