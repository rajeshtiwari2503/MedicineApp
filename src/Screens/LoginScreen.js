
import React from 'react'
import { Image, Heading, Box ,VStack,Input,Button,Pressable,Text} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const LoginScreen = () => {
    return (
        <Box flex={1} bg={"amber.100"} >
            <Image flex={1} alt='logo' resizeMode='cover' size="lg" w="full" source="https://thumbs.dreamstime.com/b/medical-logo-sign-stock-vector-medical-logo-vector-117790920.jpg" />
            <Box w="full" h="full" position="absolute" top="0" px="6" justifyContent="center">
                <Heading >Login</Heading>
                <VStack space={5} pt="6">
                      <Input InputLeftElement={<MaterialIcons name="email" size={20} color="black"  />} variant="outline" w="70%" pl={2}   placeholder='email@gmail.com' />
                      <Input type='password' InputLeftElement={<Ionicons name="eye" size={20} color="black" />} variant="outline" w="70%" pl={2}   placeholder='************' />
                      <Button my={30} w="40%" rounded="50" bg="black" >Login</Button>
                      <Pressable mt={4}>
                        <Text>SIGN UP</Text>
                      </Pressable>
                </VStack>
            </Box>
        </Box>
    )
}
