import { RiChatSmile2Line } from 'react-icons/ri';
import { PiSmileyMeltingFill } from 'react-icons/pi';
import { FaServer } from 'react-icons/fa';
import { Box, Stack } from '@chakra-ui/react';
import { IoBowlingBallOutline } from 'react-icons/io5';
import { FiChrome } from 'react-icons/fi';
import { PiGoogleChromeLogoLight } from 'react-icons/pi';
import { GoClock } from 'react-icons/go';
import { RiSurveyLine } from 'react-icons/ri';
import { IoLocation } from 'react-icons/io5';
import { IoNewspaperOutline } from 'react-icons/io5';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';

const Footer = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={{ base: 'column', lg: 'row' }}
      px={7}
      py={9}
      gap={6}
      justifyContent={'space-between'}
      alignItems={{ base: 'left', lg: 'center' }}
    >
      <Box
        display={'flex'}
        color={'#9a2f23'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'left', lg: 'center' }}
        fontSize={'30px'}
        gap={6}
      >
        <Box padding={1} pr={5} borderRight={{base:'none',md:'1px solid gray'}}>
          <RiChatSmile2Line />
        </Box>
        <Box padding={1} pr={5}  borderRight={{base:'none',md:'1px solid gray'}}>
          <PiSmileyMeltingFill />
        </Box>
        <Box padding={1} pr={5}  borderRight={{base:'none',md:'1px solid gray'}}>
          <FaServer />
        </Box>
      </Box>
      <Box
        display={'flex'}
        color={'gray.400'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'left', lg: 'center' }}
        fontSize={'30px'}
        gap={6}
      >
        <Box>
          <IoBowlingBallOutline />
        </Box>
        <Box>
          <FiChrome />
        </Box>
        <Box>
          <GoClock />
        </Box>
        <Box>
          <PiGoogleChromeLogoLight />
        </Box>
      </Box>
      <Box
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'left', lg: 'center' }}
        gap={4}
      >
        <Stack
          direction={'row'}
          cursor={'pointer'}
          color={'#9a2f23'}
          alignItems={'center'}
          gap={1}
        >
          <RiSurveyLine />
          <Box fontSize={'13px'}>Survey</Box>
        </Stack>
        <Stack
          direction={'row'}
          cursor={'pointer'}
          color={'#9a2f23'}
          alignItems={'center'}
          gap={1}
        >
          <IoLocation />
          <Box fontSize={'13px'}>location</Box>
        </Stack>
        <Stack
          direction={'row'}
          cursor={'pointer'}
          color={'#9a2f23'}
          alignItems={'center'}
          gap={1}
        >
          <IoNewspaperOutline />
          <Box fontSize={'13px'}>Newsroom</Box>
        </Stack>
        <Stack
          direction={'row'}
          cursor={'pointer'}
          color={'#9a2f23'}
          alignItems={'center'}
          gap={1}
        >
          <FaRegEnvelope />
          <Box fontSize={'13px'}>Contact Us</Box>
        </Stack>
        <FaRegMessage cursor={'pointer'} color={'#9a2f23'} fontSize={'25px'} />
      </Box>
    </Box>
  );
};

export default Footer;
