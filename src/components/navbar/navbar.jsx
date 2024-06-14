import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import logo from '../../assets/images/log2.png';
import log2 from '../../assets/images/logoImg.png';
import { FaBars } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { FaWheelchair } from 'react-icons/fa';
import { useRef } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Box shadow={'md'}>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody mt={7}>
              <Box
                display={'flex'}
                gap={5}
                flexDirection={'column'}
                height={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Link onClick={()=>{onClose()}} to={'https://gdrfad.gov.ae/en'}>
                  <Text cursor={'pointer'}>Home</Text>
                </Link>
                <Link
                  onClick={()=>{onClose()}}
                  to={'https://gdrfad.gov.ae/en/about-us'}
                ></Link>
                <Text cursor={'pointer'}>About Us</Text>
                <Link
                  onClick={()=>{onClose()}}
                  to={'https://gdrfad.gov.ae/en/services'}
                >
                  <Text cursor={'pointer'}>Services</Text>
                </Link>
                <Link
                  onClick={()=>{onClose()}}
                  to={' https://gdrfad.gov.ae/en/media-centre'}
                >
                  <Text cursor={'pointer'}>Media Center</Text>
                </Link>
                <Link
                  onClick={()=>{onClose()}}
                  to={'https://gdrfad.gov.ae/en/contact-information'}
                >
                  <Text cursor={'pointer'}>Contact Us</Text>
                </Link>
                <Link
                  onClick={()=>{onClose()}}
                  to={' https://gdrfad.gov.ae/en/website-survey'}
                >
                  <Text cursor={'pointer'}>E-Participation</Text>
                </Link>
                <Link
                  onClick={()=>{onClose()}}
                  to={
                    'https://smart.gdrfad.gov.ae/Public_Th/StatusInquiry_New.aspx'
                  }
                >
                  <Text cursor={'pointer'}>AISAADA Card</Text>
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Container maxW={'7xl'}>
          <Box paddingY={7}>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box>
                <Image
                  src={log2}
                  width={{ base: '90px', md: '105px', lg: '130px' }}
                  alt="icl"
                />
              </Box>
              <Box display={{ base: 'none', lg: 'block' }}>
                <Image src={logo} width={'420px'} alt="log icon" />
              </Box>
              <Box cursor={'pointer'} display={{ base: 'block', lg: 'none' }}>
                <FaBars
                  onClick={() => {
                    onOpen();
                  }}
                  fontWeight={'400'}
                  color="#9a2f23"
                />
              </Box>
            </Stack>
            <Stack
              display={{ base: 'none', lg: 'flex' }}
              direction={'row'}
              mt={8}
              gap={'90px'}
              alignItems={'center'}
            >
              <Box display={'flex'} gap={'40px'} alignItems={'center'}>
                <FaBars fontWeight={'400'} color="#9a2f23" />
                <Box
                  fontSize={'13px'}
                  fontWeight={'400'}
                  gap={6}
                  w={'760px'}
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  color={'#9a2f23'}
                >
                  <Link to={'https://gdrfad.gov.ae/en'}>
                    <Text cursor={'pointer'}>Home</Text>
                  </Link>
                  <Link to={'https://gdrfad.gov.ae/en/about-us'}></Link>
                  <Text cursor={'pointer'}>About Us</Text>
                  <Link to={'https://gdrfad.gov.ae/en/services'}>
                    <Text cursor={'pointer'}>Services</Text>
                  </Link>
                  <Link to={' https://gdrfad.gov.ae/en/media-centre'}>
                    <Text cursor={'pointer'}>Media Center</Text>
                  </Link>
                  <Link to={'https://gdrfad.gov.ae/en/contact-information'}>
                    <Text cursor={'pointer'}>Contact Us</Text>
                  </Link>
                  <Link to={' https://gdrfad.gov.ae/en/website-survey'}>
                    <Text cursor={'pointer'}>E-Participation</Text>
                  </Link>
                  <Link
                    to={
                      'https://smart.gdrfad.gov.ae/Public_Th/StatusInquiry_New.aspx'
                    }
                  >
                    <Text cursor={'pointer'}>AISAADA Card</Text>
                  </Link>
                </Box>
              </Box>
              <Stack
                color="#9a2f23"
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box
                  display={'flex'}
                  gap={4}
                  alignItems={'center'}
                  padding={'7px 15px'}
                  rounded={'full'}
                  bg={'#f7f4f4'}
                >
                  <IoSearch />
                  <Text fontSize={'13px'}>Search...</Text>
                </Box>
                <Box
                  padding={'7px 15px'}
                  width={'fit-content'}
                  rounded={'full'}
                  bg={'#f7f4f4'}
                >
                  العربية
                </Box>
                <Box
                  padding={'7px 15px'}
                  width={'fit-content'}
                  rounded={'full'}
                  bg={'#f7f4f4'}
                >
                  <FaWheelchair />
                </Box>
                <Box
                  display={'flex'}
                  gap={4}
                  alignItems={'center'}
                  padding={'7px 15px'}
                  rounded={'full'}
                  bg={'#f7f4f4'}
                >
                  <FaCircleUser />
                  <Text fontSize={'13px'}>login</Text>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
