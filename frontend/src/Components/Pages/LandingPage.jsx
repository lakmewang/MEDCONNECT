import React from 'react'
import { useState } from 'react';
import { Box, Button, Flex, Grid, GridItem, SimpleGrid,
    Image,
    Text,
    Center,
    HStack,
 } from '@chakra-ui/react';
import FloatingPhone from '../UI/FloatingPhone'
import Example  from '../UI/FloatingPhone';
import logo from '../UI/Images/pillstackLogo.png';
// import '../. ./index.css';
import {BouncyCardsFeatures} from '../UI/BouncyCardsFeatures';
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();
  return (
    <>
    <Grid templateColumns='repeat(3, 1fr)' 
        position={'fixed'}
        zIndex={100}
        height={100}
        roundedBottom={15}
        bg={'white'}
        //frosty teal bg
        //rgb(0,128,128)
        style={{    
            //frosty glass effect
            backdropFilter: 'blur(7px)'  
           }}
           
         >
            <GridItem w='100%'  />

            <GridItem w='100%' 
                display='flex' justifyContent='center' alignItems='center'>
                <Box m={5}> <Image src={logo} alt="PillStack Logo" /> </Box>
            </GridItem>
            <GridItem w='100%' as={Flex} justifyContent='flex-end' alignItems={'center'}>
                <HStack spacing={5} mx={5}>
                <Button 
                colorScheme='teal'
                // bg={'#1a202c'}
                // _hover={{ bg: '#2d3748' }}
                onClick={
                    () => {
                        navigate('/login')
                    }} 
                >Login</Button>
                <Button
                bg={'#1a202c11'}
                border={'1px solid #1a202c'}
                // color={'#1a202c'}
                // _hover={{ bg: '#1a202c', color: 'white' }}
                colorScheme='teal'
                variant={'outline'}
                onClick={
                    () => {
                        navigate('/patient-register')
                    }}
                >Sign Up</Button>
                </HStack>
            </GridItem>
    </Grid>
        <Box className='teal-blue' pt={100}>

            {/* hero */}
            <Grid templateColumns='repeat(5, 1fr)'>
                <GridItem w='100%'  colSpan={3}
                display='Flex' justifyContent='center' alignItems='center' >
                    <Flex   p={10} flexDirection={'column'}>
                        <Text fontSize={'5xl'} color={'white'} >"Navigating Health, One Click at a Time: Your Reliable Online Drugstore Partner!</Text>
                        <Text fontSize={'2xl'} color={'white'} >Your Wellness Gateway: Seamless Solutions for Your Medication Needs."</Text>
                    </Flex>
                </GridItem>
                <GridItem colSpan={2} >
                    <Flex justifyContent={'center'} alignItems={'center'} p={5} rounded={5}>
                    <FloatingPhone />
                    </Flex>
                </GridItem>
            </Grid>

        </Box>
        <Box className='shapeDivider' h={200} />
        <BouncyCardsFeatures />
    </>
  )
}

export default LandingPage
