import {Avatar, AvatarBadge, Box, Button, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import EyeSvg from '../assets/svgs/EyeSvg';

import avtar from '../assets/pngs/Avatar.png';
import avtar1 from '../assets/pngs/Avatar (1).png';
import avtar2 from '../assets/pngs/Avatar (2).png';
import avtar3 from '../assets/pngs/Avatar (3).png';

const LeftComponent = () => {
  return (
    <Box
      overflowY={{lg: 'auto'}}
      position={'sticky'}
      top={'118px'}
      h={{base: 'auto', lg: 'calc(100vh - 118px)'}}
      sx={{
        '&::-webkit-scrollbar': {
          width: '2px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
        '&::-webkit-scrollbar-button': {
          display: 'none',
        },
      }}
    >

      <Box
        sx={{
          h: '406px',
          background: '#ffffff',

          borderRadius: '8px',
          mb: '32px',
        }}
        style={{padding: '0px, 0px, 10px, 0px'}}
      >
        <Box
          as="H5"
          color="#4B4B4B"
          py={'14px'}
          px={'18px'}
          fontWeight={400}
          fontSize={'18px'}
        >
          Followed Companies
        </Box>
        <hr />
        <Box>
          <Box
            mt={1}
            h={'68px'}
            px={'20px'}
            py={'10px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Stack direction="row" display={'flex'} gap={'12px'}>
              <Avatar
                bg="#7367F0"
                name="Google"
                src="https://bit.ly/broken-link"
              />
              <Stack direction="column">
                <Text fontSize="13px" fontWeight={700}>
                  Adobe{' '}
                </Text>
                <Text fontSize="13px" fontWeight={400}>
                  Tech Company{' '}
                </Text>
              </Stack>
            </Stack>
            <Button colorScheme="purple" variant="outline">
              Followed
            </Button>
          </Box>
          <hr />
          <Box
            mt={1}
            h={'68px'}
            px={'20px'}
            py={'10px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Stack direction="row" display={'flex'} gap={'12px'}>
              <Avatar bg="#7367F0" name="A" src="https://bit.ly/broken-link" />
              <Stack direction="column">
                <Text fontSize="13px" fontWeight={700}>
                  Google{' '}
                </Text>
                <Text fontSize="13px" fontWeight={400}>
                  Tech Company{' '}
                </Text>
              </Stack>
            </Stack>
            <Button colorScheme="purple" variant="outline">
              Followed
            </Button>
          </Box>
          <hr />
          <Box
            mt={1}
            h={'68px'}
            px={'20px'}
            py={'10px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Stack direction="row" display={'flex'} gap={'12px'}>
              <Avatar bg="#7367F0" name="Y" src="https://bit.ly/broken-link" />
              <Stack direction="column">
                <Text fontSize="13px" fontWeight={700}>
                  Meta{' '}
                </Text>
                <Text fontSize="13px" fontWeight={400}>
                  Tech Company{' '}
                </Text>
              </Stack>
            </Stack>
            <Button colorScheme="purple" variant="outline">
              Followed
            </Button>
          </Box>
          <hr />
          <Box
            mt={1}
            h={'68px'}
            px={'20px'}
            py={'10px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Stack direction="row" display={'flex'} gap={'12px'}>
              <Avatar
                bg="#7367F0"
                name="Google"
                src="https://bit.ly/broken-link"
              />
              <Stack direction="column">
                <Text fontSize="13px" fontWeight={700}>
                  Tesla{' '}
                </Text>
                <Text fontSize="13px" fontWeight={400}>
                  Tech Company{' '}
                </Text>
              </Stack>
            </Stack>
            <Button colorScheme="purple" variant="outline">
              Followed
            </Button>
          </Box>
          <hr />
          <Box
            mb={1}
            h={'60px'}
            px={'20px'}
            py={'10px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              background={'#E9E7FD'}
              gap={2}
              borderRadius={'6px'}
              h={'40px'}
              width={'100%'}
              color="#7367F0"
              variant="outline"
            >
              <EyeSvg /> View More
            </Button>
          </Box>
          <hr />
        </Box>
      </Box>
      <Box
        sx={{h: '360px', background: '#ffffff', borderRadius: 8, mb: 2}}
        style={{padding: '0px, 0px, 10px, 0px'}}
      >
        <Box
          as="H5"
          color="#4B4B4B"
          py={'14px'}
          fontSize={'18px'}
          px={'18px'}
          fontWeight={400}
        >
          List of New Connect Requests
        </Box>
        <hr />
        <Box
          mt={1}
          h={'68px'}
          px={'20px'}
          py={'10px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Stack direction="row" display={'flex'} gap={'12px'}>
            <Avatar name="Dan Abrahmov" src={avtar}>
              <AvatarBadge boxSize="1em" bg="gray.400" />
            </Avatar>
            <Stack direction="column">
              <Text
                fontSize="13px"
                lineHeight={'14px'}
                color={'#4B4B4B'}
                fontWeight={600}
              >
                Jana Adams
                <Text fontSize="13px" mt={1} fontWeight={400} color={'#A8AAAE'}>
                  Senior BSA
                </Text>
                <Text
                  fontSize="13px"
                  mt={'5px'}
                  fontWeight={400}
                  color={'#A8AAAE'}
                >
                  New Job Posting
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Box>
        <hr />
        <Box
          mt={1}
          h={'68px'}
          px={'20px'}
          py={'10px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Stack direction="row" display={'flex'} gap={'12px'}>
            <Avatar name="Abhi Kumarv" src={avtar1}>
              <AvatarBadge boxSize="1em" bg="green.500" />
            </Avatar>
            <Stack direction="column">
              <Text
                fontSize="13px"
                lineHeight={'14px'}
                color={'#4B4B4B'}
                fontWeight={600}
              >
                Abhi Kumar
                <Text fontSize="13px" mt={1} fontWeight={400} color={'#A8AAAE'}>
                  Senior BSA
                </Text>
                <Text
                  fontSize="13px"
                  mt={'5px'}
                  fontWeight={400}
                  color={'#A8AAAE'}
                >
                  New Job Posting
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Box>
        <hr />
        <Box
          mt={1}
          h={'68px'}
          px={'20px'}
          py={'10px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Stack direction="row" display={'flex'} gap={'12px'}>
            <Avatar name=" Jhon Smith" src={avtar2}>
              <AvatarBadge boxSize="1em" bg="#FF9F43" />
            </Avatar>
            <Stack direction="column">
              <Text
                fontSize="13px"
                lineHeight={'14px'}
                color={'#4B4B4B'}
                fontWeight={600}
              >
                Jhon Smith
                <Text fontSize="13px" mt={1} fontWeight={400} color={'#A8AAAE'}>
                  Senior BSA
                </Text>
                <Text
                  fontSize="13px"
                  mt={'5px'}
                  fontWeight={400}
                  color={'#A8AAAE'}
                >
                  New Job Posting
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Box>
        <hr />
        <Box
          mt={1}
          h={'68px'}
          px={'20px'}
          py={'10px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Stack direction="row" display={'flex'} gap={'12px'}>
            <Avatar name="Nina Jhon" src={avtar3}>
              <AvatarBadge boxSize="1em" bg="#EA5455" />
            </Avatar>
            <Stack direction="column">
              <Text
                fontSize="13px"
                lineHeight={'14px'}
                color={'#4B4B4B'}
                fontWeight={600}
              >
                Nina Jhon
                <Text fontSize="13px" mt={1} fontWeight={400} color={'#A8AAAE'}>
                  Senior BSA
                </Text>
                <Text
                  fontSize="13px"
                  mt={'5px'}
                  fontWeight={400}
                  color={'#A8AAAE'}
                >
                  New Job Posting
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Box>
        <hr />
      </Box>
    </Box>
  );
};

export default LeftComponent;
