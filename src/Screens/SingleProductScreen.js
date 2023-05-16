import { Box, ScrollView,Image, Heading, HStack, Spacer,Text } from 'native-base'
import React, { useState } from 'react'
import NumericInput from 'react-native-numeric-input'
import Buttone from '../Components/Button'
import HomeSearch from '../Components/HomeSearch'

export const SingleProductScreen = () => {
const [value , setValue]=useState(0)
    const url="https://www.shutterstock.com/image-vector/various-meds-pills-capsules-blisters-260nw-1409823341.jpg"

    return (
        <>
        <HomeSearch />
        <Box safeArea flex={1} bg={"amber.100"}>
            <ScrollView px={5}   showsVerticalScrollIndicator={false}>
                <Image source={{uri:url}} alt="image" w="full" h={300} resize="contain" />
                <Heading bold fontSize={15}mt={5}  lineHeight={22} >
                    Medicine 
                </Heading>
                <HStack space={2}  my={5} > 
                  <NumericInput 
                  value={value} 
                  totalWidth={140}
                  totalHeight={30}
                  iconSize={25}
                  step={1}
                  maxValue={10}
                  minValue={0}
                  
                  rounded
                  textColor={"black"}
                  iconStyle={"white"}
                  rightButtonBackgroundColor={'amber.400'}
                  leftButtonBackgroundColor={'amber.500'}
                  />
                  <Spacer />
                  <Heading bold fontSize={19} >INR 99</Heading>
                </HStack>
                <Text lineHeight={24} fontSize={12} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </Text>
                <Buttone bg={'amber.500'} color={'white'} mt={7}  fontSize={'25'} >
                   Add to Cart  </Buttone>
            </ScrollView>
        </Box>
        </>
    )
}
